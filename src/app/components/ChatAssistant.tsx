import { MessageCircle, X, Send, User, Loader2, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface LeadData {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
}

interface ChatResult {
  message: string;
  leadData: LeadData;
  leadComplete: boolean;
}

const PROJECT_HINTS: Array<{ keywords: string[]; value: string }> = [
  { keywords: ['ci/cd', 'pipeline', 'github actions', 'gitlab', 'jenkins'], value: 'DevSecOps CI/CD Engineering' },
  { keywords: ['security', 'soc2', 'hipaa', 'compliance', 'zero trust'], value: 'Cloud Security Hardening' },
  { keywords: ['kubernetes', 'cluster', 'k8s'], value: 'Cloud & Kubernetes Hardening Sprint' },
  { keywords: ['terraform', 'iac', 'automation'], value: 'Secure CI/CD & Automation Sprint' },
  { keywords: ['ai', 'llm', 'genai', 'inference', 'model gateway', 'rag'], value: 'AI Infrastructure & LLMOps Enablement' },
  { keywords: ['cloud', 'aws', 'azure', 'gcp', 'infrastructure'], value: 'DevSecOps & Infrastructure Health Check' },
];

const BUDGET_HINTS = [
  'under $10k',
  '$10k - $50k',
  '$50k - $100k',
  '$100k+',
  'not sure',
];

function normalize(input: string): string {
  return input.toLowerCase().trim();
}

function extractLeadData(text: string): LeadData {
  const input = normalize(text);
  const extracted: LeadData = {};

  const emailMatch = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  if (emailMatch) extracted.email = emailMatch[0];

  const nameMatch = text.match(/(?:my name is|i am|i'm)\s+([A-Za-z][A-Za-z\s'-]{1,40})/i);
  if (nameMatch) extracted.name = nameMatch[1].trim();

  const companyMatch = text.match(/(?:company is|from|at)\s+([A-Za-z0-9&.,' -]{2,60})/i);
  if (companyMatch) extracted.company = companyMatch[1].trim();

  for (const hint of BUDGET_HINTS) {
    if (input.includes(hint.toLowerCase())) {
      extracted.budget = hint;
      break;
    }
  }

  if (!extracted.budget) {
    const genericBudget = text.match(/\$[\d,.]+\s*(?:-|to)?\s*\$?[\d,.]*\s*[kKmM]?/);
    if (genericBudget) extracted.budget = genericBudget[0];
  }

  for (const option of PROJECT_HINTS) {
    if (option.keywords.some((k) => input.includes(k))) {
      extracted.projectType = option.value;
      break;
    }
  }

  return extracted;
}

function mergeLead(existing: LeadData, next: LeadData): LeadData {
  return {
    name: next.name || existing.name,
    email: next.email || existing.email,
    company: next.company || existing.company,
    projectType: next.projectType || existing.projectType,
    budget: next.budget || existing.budget,
  };
}

function getMissingField(lead: LeadData): keyof LeadData | null {
  if (!lead.name) return 'name';
  if (!lead.email) return 'email';
  if (!lead.company) return 'company';
  if (!lead.projectType) return 'projectType';
  if (!lead.budget) return 'budget';
  return null;
}

function generateReply(userText: string, lead: LeadData): ChatResult {
  const extracted = extractLeadData(userText);
  const updated = mergeLead(lead, extracted);
  const complete = getMissingField(updated) === null;
  const input = normalize(userText);

  if (complete) {
    return {
      message:
        'Great, I have everything needed for a project intake. I will prepare your lead details so you can send them to us by email now.',
      leadData: updated,
      leadComplete: true,
    };
  }

  if (input.includes('service') || input.includes('what do you offer')) {
    return {
      message:
        'We offer four core services: DevSecOps & Infrastructure Health Check, Secure CI/CD & Automation Sprint, Cloud & Kubernetes Hardening Sprint, and AI Infrastructure & LLMOps Enablement. Share your current challenge and I can recommend the best fit.',
      leadData: extracted,
      leadComplete: false,
    };
  }

  if (input.includes('price') || input.includes('cost') || input.includes('budget')) {
    return {
      message:
        'Typical projects range from $10k to $100k+ depending on scope and compliance needs. If you share your target budget and project type, I can narrow this down quickly.',
      leadData: extracted,
      leadComplete: false,
    };
  }

  if (input.includes('start') || input.includes('quote') || input.includes('proposal') || input.includes('interested')) {
    const nextMissing = getMissingField(updated);
    if (nextMissing === 'name') {
      return {
        message: 'Great. To start, what is your name?',
        leadData: extracted,
        leadComplete: false,
      };
    }
    if (nextMissing === 'email') {
      return {
        message: 'Thanks. What is the best email for follow-up?',
        leadData: extracted,
        leadComplete: false,
      };
    }
    if (nextMissing === 'company') {
      return {
        message: 'Got it. What company are you with?',
        leadData: extracted,
        leadComplete: false,
      };
    }
    if (nextMissing === 'projectType') {
      return {
        message: 'Which project type do you need most right now: Infrastructure Health Check, CI/CD & Automation Sprint, Cloud & Kubernetes Hardening Sprint, or AI Infrastructure & LLMOps Enablement?',
        leadData: extracted,
        leadComplete: false,
      };
    }
    return {
      message: 'Helpful. What budget range are you targeting: under $10k, $10k-$50k, $50k-$100k, or $100k+?',
      leadData: extracted,
      leadComplete: false,
    };
  }

  const missing = getMissingField(updated);
  if (missing === 'name') {
    return {
      message:
        'I can help with that. If you want a tailored recommendation, share your name and I will ask just a few quick project questions.',
      leadData: extracted,
      leadComplete: false,
    };
  }

  return {
    message:
      'Thanks for the details. I can guide your DevSecOps and AI infrastructure scope and next steps. If you are ready, say "start project" and I will complete a quick intake.',
    leadData: extracted,
    leadComplete: false,
  };
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi, I am GAX Assistant. I can answer DevSecOps, cloud, and AI infrastructure questions or help you start a project.",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [collectedLead, setCollectedLead] = useState<LeadData>({});
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendLeadEmail = (lead: LeadData) => {
    const subject = encodeURIComponent(`New Chat Lead: ${lead.name}`);
    const body = encodeURIComponent(
      `New Lead from GAX Global Chat

Name: ${lead.name}
Email: ${lead.email}
Company: ${lead.company || 'Not specified'}
Project Type: ${lead.projectType}
Budget: ${lead.budget}

Source: Website Chat Assistant`.trim()
    );
    window.open(`mailto:info@gax-global.com?subject=${subject}&body=${body}`, '_blank');
    toast.success('Opening email client with lead details...', { duration: 4000 });
  };

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text, sender, timestamp: new Date() },
    ]);
  };

  const handleSend = async () => {
    const userText = inputValue.trim();
    if (!userText || isLoading) return;

    setInputValue('');
    addMessage(userText, 'user');
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 350));
      const result = generateReply(userText, collectedLead);
      const updatedLead = mergeLead(collectedLead, result.leadData);

      addMessage(result.message, 'bot');
      setCollectedLead(updatedLead);

      if (result.leadComplete && !emailSent) {
        setEmailSent(true);
        setTimeout(() => sendLeadEmail(updatedLead), 700);
      }
    } catch (err) {
      console.error('Chat assistant error:', err);
      addMessage('Chat is temporarily unavailable. Please email us at info@gax-global.com.', 'bot');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickReply = (text: string) => {
    setInputValue(text);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  const quickReplies = [
    { label: 'Services', text: 'What services do you offer?' },
    { label: 'Pricing', text: 'How much does it typically cost?' },
    { label: 'Start project', text: 'I want to start a project' },
  ];

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-200 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline font-semibold text-sm">Need Help?</span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[580px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm">GAX Assistant</div>
                <div className="flex items-center gap-1.5 text-xs text-blue-100">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block" />
                  Fast help for DevSecOps, cloud, and AI infrastructure projects
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gray-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  msg.sender === 'bot'
                    ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {msg.sender === 'bot'
                    ? <Sparkles className="w-3.5 h-3.5" />
                    : <User className="w-3.5 h-3.5" />}
                </div>

                <div className={`max-w-[78%] flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'bot'
                      ? 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'
                      : 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-tr-none'
                  }`}>
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 px-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && !isLoading && (
            <div className="px-4 pb-2 flex-shrink-0 bg-gray-50/50">
              <p className="text-[11px] text-gray-400 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-1.5">
                {quickReplies.map((qr) => (
                  <button
                    key={qr.label}
                    onClick={() => handleQuickReply(qr.text)}
                    className="text-xs px-3 py-1.5 bg-white border border-blue-100 text-blue-700 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-colors shadow-sm"
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-gray-100 px-4 py-3 bg-white flex-shrink-0">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 outline-none transition-all disabled:opacity-50 placeholder:text-gray-400"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-full flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                aria-label="Send message"
              >
                {isLoading
                  ? <Loader2 className="w-4 h-4 animate-spin" />
                  : <Send className="w-4 h-4" />
                }
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
