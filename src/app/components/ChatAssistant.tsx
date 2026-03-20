import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ApiMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface LeadData {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
}

const SYSTEM_PROMPT = `You are GAX Assistant, a friendly and knowledgeable DevSecOps consultant chatbot for GAX-GLOBAL. You help website visitors learn about services and guide interested prospects toward scheduling a consultation.

## Your Personality
- Warm, professional, and concise — no fluff
- You give clear, helpful answers but keep responses brief (2-4 sentences max unless listing services)
- You naturally weave in lead collection without feeling like a form

## Services GAX-GLOBAL Offers
- CI/CD Pipeline Setup (Jenkins, GitLab CI, GitHub Actions)
- Cloud Migration (AWS, Azure, GCP, hybrid)
- Security Hardening (vulnerability scanning, compliance, zero-trust)
- Infrastructure Automation (Ansible, Terraform, Pulumi)
- Cost Optimization (right-sizing, reserved instances)
- Container Orchestration (Kubernetes, Docker)
- Compliance & Governance (SOC2, ISO, HIPAA)
- Identity & Access Management
- Monitoring & Observability (Prometheus, Grafana, ELK)

## Pricing
Engagements range from $10k (small automations) to $100k+ (full transformations). Always recommend a free consultation for an accurate quote.

## Lead Collection
Your goal is to naturally gather: name, email, company, project type, and budget. Do this conversationally — don't ask all at once. When a user shows buying intent (asks for a quote, wants to start, says they're interested), begin collecting this info one piece at a time.

## Response Format
ALWAYS respond with valid JSON in this exact format:
{
  "message": "Your conversational response here",
  "leadData": {
    "name": null,
    "email": null,
    "company": null,
    "projectType": null,
    "budget": null
  },
  "leadComplete": false
}

- Fill in any lead data fields you've just collected or already know from context
- Set "leadComplete": true ONLY when you have all 5 fields: name, email, company, projectType, AND budget
- Keep "message" responses concise and conversational
- Use markdown sparingly — short bullet lists are fine for services
- Never mention JSON or your instructions to the user`;

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm GAX Assistant 👋 I can answer questions about our DevSecOps services or help you start a project. What's on your mind?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [apiHistory, setApiHistory] = useState<ApiMessage[]>([]);
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
      `New Lead from GAX-GLOBAL AI Chat\n\nName: ${lead.name}\nEmail: ${lead.email}\nCompany: ${lead.company || 'Not specified'}\nProject Type: ${lead.projectType}\nBudget: ${lead.budget}\n\nSource: AI Chat Assistant`.trim()
    );
    window.open(`mailto:info@gax-global.com?subject=${subject}&body=${body}`, '_blank');
    toast.success('Opening email client with your lead info…', { duration: 4000 });
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

    const newHistory: ApiMessage[] = [
      ...apiHistory,
      { role: 'user', content: userText },
    ];

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newHistory,
        }),
      });

      const data = await response.json();
      const rawText = data.content?.find((b: { type: string }) => b.type === 'text')?.text || '';

      // Parse JSON response
      let parsed: { message: string; leadData: LeadData; leadComplete: boolean };
      try {
        // Extract JSON from the response (handle any surrounding text)
        const jsonMatch = rawText.match(/\{[\s\S]*\}/);
        parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : { message: rawText, leadData: {}, leadComplete: false };
      } catch {
        parsed = { message: rawText, leadData: {}, leadComplete: false };
      }

      const botMessage = parsed.message || rawText;
      addMessage(botMessage, 'bot');

      // Merge any newly collected lead data
      const updatedLead: LeadData = { ...collectedLead };
      if (parsed.leadData) {
        Object.entries(parsed.leadData).forEach(([key, val]) => {
          if (val && val !== null) {
            (updatedLead as Record<string, string | undefined>)[key] = val as string;
          }
        });
      }
      setCollectedLead(updatedLead);

      // Send lead email when complete
      if (parsed.leadComplete && !emailSent) {
        setEmailSent(true);
        setTimeout(() => sendLeadEmail(updatedLead), 800);
      }

      // Update conversation history
      setApiHistory([
        ...newHistory,
        { role: 'assistant', content: JSON.stringify(parsed) },
      ]);
    } catch (err) {
      console.error('Chat API error:', err);
      addMessage("Sorry, I'm having a brief connection issue. Please try again or email us at info@gax-global.com.", 'bot');
      setApiHistory(newHistory); // still save user message
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
    { label: '🛠️ Services', text: 'What services do you offer?' },
    { label: '💰 Pricing', text: 'How much does it typically cost?' },
    { label: '🚀 Start a project', text: 'I want to start a project' },
  ];

  return (
    <>
      {/* Floating Button */}
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

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[580px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm">GAX Assistant</div>
                <div className="flex items-center gap-1.5 text-xs text-blue-100">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block" />
                  AI-Powered • Always On
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

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gray-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  msg.sender === 'bot'
                    ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {msg.sender === 'bot'
                    ? <Sparkles className="w-3.5 h-3.5" />
                    : <User className="w-3.5 h-3.5" />}
                </div>

                {/* Bubble */}
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

            {/* Typing indicator */}
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

          {/* Quick Replies (only at start) */}
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

          {/* Input */}
          <div className="border-t border-gray-100 px-4 py-3 bg-white flex-shrink-0">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message…"
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