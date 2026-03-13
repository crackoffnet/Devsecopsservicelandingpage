import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface CollectedInfo {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm GAX Assistant. I'm here to help you get started with DevSecOps. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [conversationStep, setConversationStep] = useState(0);
  const [collectedInfo, setCollectedInfo] = useState<CollectedInfo>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Quick answers for common questions
    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return "Our pricing varies based on project scope. Typical engagements range from $10k-$100k+. I can collect some information and have our team send you a custom quote. Would you like that?";
    }
    
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you')) {
      return "We offer:\n\n✓ CI/CD Pipeline Setup\n✓ Cloud Migration (AWS, Azure, GCP)\n✓ Security Hardening\n✓ Infrastructure Automation\n✓ Cost Optimization\n✓ Kubernetes & Container Orchestration\n\nWhich service interests you most?";
    }

    if (lowerMessage.includes('time') || lowerMessage.includes('how long')) {
      return "Project timelines vary:\n• Small projects: 1-2 months\n• Medium projects: 3-6 months\n• Large transformations: 6-12 months\n\nWe can discuss your specific timeline after understanding your needs.";
    }

    if (lowerMessage.includes('cloud') || lowerMessage.includes('aws') || lowerMessage.includes('azure')) {
      return "We specialize in multi-cloud solutions across AWS, Azure, and GCP. We also handle hybrid and on-premises setups. What's your current infrastructure?";
    }

    if (lowerMessage.includes('security') || lowerMessage.includes('secure')) {
      return "Security is at the core of everything we do! We provide:\n• Security audits & hardening\n• Compliance (SOC2, ISO, HIPAA)\n• Vulnerability scanning\n• Zero-trust architecture\n• Secrets management\n\nNeed a security assessment?";
    }

    if (lowerMessage.includes('start') || lowerMessage.includes('begin') || lowerMessage.includes('quote')) {
      setConversationStep(1);
      return "Great! Let me collect some quick info to help our team understand your needs.\n\nFirst, what's your name?";
    }

    if (lowerMessage.includes('yes') || lowerMessage.includes('sure') || lowerMessage.includes('ok')) {
      if (conversationStep === 0) {
        setConversationStep(1);
        return "Perfect! Let's get started. What's your name?";
      }
    }

    // Default responses
    const responses = [
      "That's a great question! Our DevSecOps team can provide detailed answers. Would you like me to collect your contact info so they can reach out?",
      "I can help with that! Feel free to ask about our services, pricing, timelines, or start a project request.",
      "Interesting! To give you the best answer, would you like to chat with our team directly? I can arrange that."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleInfoCollection = (userMessage: string) => {
    const trimmedMessage = userMessage.trim();

    switch (conversationStep) {
      case 1: // Collecting name
        setCollectedInfo(prev => ({ ...prev, name: trimmedMessage }));
        setConversationStep(2);
        return `Nice to meet you, ${trimmedMessage}! What's your email address?`;

      case 2: // Collecting email
        if (!trimmedMessage.includes('@')) {
          return "Please provide a valid email address.";
        }
        setCollectedInfo(prev => ({ ...prev, email: trimmedMessage }));
        setConversationStep(3);
        return "Great! What company are you with? (Or type 'skip' if you prefer not to say)";

      case 3: // Collecting company
        setCollectedInfo(prev => ({ ...prev, company: trimmedMessage }));
        setConversationStep(4);
        return "What type of project are you interested in?\n\n1. CI/CD Pipeline\n2. Cloud Migration\n3. Security Hardening\n4. Full DevSecOps\n5. Other\n\nJust type the number or name.";

      case 4: // Collecting project type
        setCollectedInfo(prev => ({ ...prev, projectType: trimmedMessage }));
        setConversationStep(5);
        return "What's your approximate budget?\n\n1. Under $10k\n2. $10k-$50k\n3. $50k-$100k\n4. $100k+\n5. Not sure yet";

      case 5: // Collecting budget & finishing
        setCollectedInfo(prev => ({ ...prev, budget: trimmedMessage }));
        setConversationStep(0);
        
        // Send email with collected info
        const emailBody = `
New Chat Lead from GAX-GLOBAL Website

Name: ${collectedInfo.name}
Email: ${collectedInfo.email}
Company: ${collectedInfo.company}
Project Type: ${collectedInfo.projectType}
Budget: ${trimmedMessage}

Source: Chat Assistant
        `.trim();
        
        setTimeout(() => {
          window.location.href = `mailto:info@gax-global.com?subject=Chat Lead: ${collectedInfo.name}&body=${encodeURIComponent(emailBody)}`;
        }, 1000);

        return `Perfect! I've collected all the info:\n\n✓ Name: ${collectedInfo.name}\n✓ Email: ${collectedInfo.email}\n✓ Company: ${collectedInfo.company}\n✓ Project: ${collectedInfo.projectType}\n✓ Budget: ${trimmedMessage}\n\nOur team will review this and reach out within 24 hours. Opening your email client now to confirm the request!`;

      default:
        return getBotResponse(userMessage);
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    addMessage(inputValue, 'user');
    const userMessage = inputValue;
    setInputValue('');

    // Get bot response after a short delay
    setTimeout(() => {
      let botResponse: string;
      
      if (conversationStep > 0) {
        botResponse = handleInfoCollection(userMessage);
      } else {
        botResponse = getBotResponse(userMessage);
      }
      
      addMessage(botResponse, 'bot');
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all group"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline font-medium">Need Help?</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold">GAX Assistant</div>
                <div className="text-xs text-blue-100">Online • Instant replies</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'bot' 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' 
                    : 'bg-gray-300 text-gray-700'
                }`}>
                  {message.sender === 'bot' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>

                {/* Message Bubble */}
                <div className={`max-w-[75%] ${message.sender === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
                  <div className={`px-4 py-2 rounded-2xl whitespace-pre-line ${
                    message.sender === 'bot'
                      ? 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-200'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-tr-none'
                  }`}>
                    {message.text}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 px-2">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 space-y-2">
              <div className="text-xs text-gray-500 mb-2">Quick questions:</div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setInputValue('What services do you offer?');
                    setTimeout(() => handleSendMessage(), 100);
                  }}
                  className="text-xs px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    setInputValue('How much does it cost?');
                    setTimeout(() => handleSendMessage(), 100);
                  }}
                  className="text-xs px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors"
                >
                  Pricing
                </button>
                <button
                  onClick={() => {
                    setInputValue('I want to start a project');
                    setTimeout(() => handleSendMessage(), 100);
                  }}
                  className="text-xs px-3 py-1.5 bg-cyan-50 text-cyan-700 rounded-full hover:bg-cyan-100 transition-colors"
                >
                  Start Project
                </button>
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
