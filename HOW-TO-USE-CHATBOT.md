# 🤖 AI Chatbot - Complete Guide

## ✅ Your AI Chatbot is Already Installed!

The chatbot is **already working** on your website. You just need to set up email delivery (see EMAIL-SETUP-GUIDE.md).

---

## 🎯 What the Chatbot Does

### 1. Answers Questions Instantly

The chatbot can answer common visitor questions about:

- **Services:** "What services do you offer?"
- **Pricing:** "How much does it cost?"
- **Timelines:** "How long does a project take?"
- **Cloud platforms:** "Do you support AWS?"
- **Security:** "What security services do you provide?"

### 2. Collects Lead Information

When a visitor wants to start a project, the chatbot:

1. Asks for their **name**
2. Asks for their **email**
3. Asks for their **company**
4. Asks about **project type**
5. Asks about **budget range**
6. **Sends all info** to info@gax-global.com

### 3. Provides Instant Engagement

- Available **24/7** (no human needed)
- **Instant responses** (no waiting)
- **Friendly conversation** flow
- **Quick reply buttons** for common questions

---

## 🖥️ Where to Find It

### On Desktop:
- Look at the **bottom-right corner** of your website
- You'll see a blue button that says **"Need Help?"**
- It has a pulsing green dot (shows it's "online")

### On Mobile:
- Same location (bottom-right)
- Button shows just an icon on small screens
- Opens full-screen chat window

---

## 💬 How to Use It (As a Visitor)

### Option 1: Quick Questions

1. Click the **"Need Help?"** button
2. You'll see 3 quick buttons:
   - **Services** - Shows all services offered
   - **Pricing** - Explains pricing structure
   - **Start Project** - Begins lead collection
3. Click any button for instant answer

### Option 2: Type Your Question

1. Click the **"Need Help?"** button
2. Type your question in the chat box
3. Press **Enter** or click **Send**
4. Get instant response

### Option 3: Start a Project

1. Click **"Start Project"** button (or type "I want to start a project")
2. Answer the bot's questions:
   - What's your name?
   - What's your email?
   - What company?
   - What type of project?
   - What's your budget?
3. Your info is **sent automatically** to info@gax-global.com
4. You get confirmation message
5. GAX-GLOBAL team contacts you within 24 hours

---

## 🎨 What It Looks Like

### Closed State:
```
┌──────────────────┐
│ 💬 Need Help? 🟢 │  ← Floating button
└──────────────────┘
```

### Open State:
```
┌─────────────────────────────┐
│ 🤖 GAX Assistant            │ ← Header
│ Online • Instant replies    │
├─────────────────────────────┤
│                             │
│  Bot: Hi! I'm GAX Assistant │
│      How can I help?        │
│                             │
│          You: What services │
│              do you offer?  │
│                             │
│  Bot: We offer:             │
│      ✓ CI/CD Pipeline       │
│      ✓ Cloud Migration      │
│      ...                    │
│                             │
├─────────────────────────────┤
│ [Type your message...] [→] │ ← Input
└─────────────────────────────┘
```

---

## 🧠 Sample Conversations

### Example 1: Asking About Services

**You:** What services do you offer?

**Bot:** We offer:
- ✓ CI/CD Pipeline Setup
- ✓ Cloud Migration (AWS, Azure, GCP)
- ✓ Security Hardening
- ✓ Infrastructure Automation
- ✓ Cost Optimization
- ✓ Kubernetes & Container Orchestration

Which service interests you most?

---

### Example 2: Asking About Pricing

**You:** How much does it cost?

**Bot:** Our pricing varies based on project scope. Typical engagements range from $10k-$100k+. I can collect some information and have our team send you a custom quote. Would you like that?

**You:** Yes

**Bot:** Perfect! Let's get started. What's your name?

**You:** John Smith

**Bot:** Nice to meet you, John Smith! What's your email address?

...and so on.

---

### Example 3: Starting a Project

**You:** I want to start a project

**Bot:** Great! Let me collect some quick info to help our team understand your needs.

First, what's your name?

**You:** Sarah Johnson

**Bot:** Nice to meet you, Sarah Johnson! What's your email address?

**You:** sarah@techcorp.com

**Bot:** Great! What company are you with?

**You:** TechCorp Inc

**Bot:** What type of project are you interested in?

1. CI/CD Pipeline
2. Cloud Migration
3. Security Hardening
4. Full DevSecOps
5. Other

**You:** 2

**Bot:** What's your approximate budget?

1. Under $10k
2. $10k-$50k
3. $50k-$100k
4. $100k+
5. Not sure yet

**You:** 3

**Bot:** Perfect! I've collected all the info:
- ✓ Name: Sarah Johnson
- ✓ Email: sarah@techcorp.com
- ✓ Company: TechCorp Inc
- ✓ Project: 2
- ✓ Budget: 3

Our team will review this and reach out within 24 hours.

---

## ⚙️ Customizing Responses

Want to change what the bot says? Edit `/src/app/components/ChatAssistant.tsx`:

### Add New Question Response:

Find the `getBotResponse` function (around line 48) and add:

```tsx
if (lowerMessage.includes('your keyword')) {
  return "Your custom response here";
}
```

### Change Existing Response:

Search for the text you want to change and edit it directly.

**Example:** Change pricing message:

```tsx
// Find this:
if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
  return "Our pricing varies based on project scope...";
}

// Change to:
if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
  return "Contact us for custom pricing!";
}
```

---

## 🎯 Smart Features

### 1. Keyword Detection
The bot recognizes keywords like:
- "price", "cost" → Pricing info
- "service", "what do you" → Services list
- "time", "how long" → Timeline info
- "cloud", "AWS", "Azure" → Cloud services
- "security", "secure" → Security features
- "start", "begin", "quote" → Lead collection

### 2. Context Awareness
- Remembers conversation stage
- Validates email format
- Handles "yes/no" responses
- Provides helpful fallbacks

### 3. Quick Reply Buttons
- Shows on first open
- Pre-fills common questions
- One-click answers

---

## 📧 Email Integration

When a lead is collected, you receive:

**Subject:** New Chat Lead: [Name]

**Body:**
```
New Lead from AI Chat Assistant

CONTACT INFO:
Name: Sarah Johnson
Email: sarah@techcorp.com
Company: TechCorp Inc

PROJECT INTEREST:
Type: 2 (Cloud Migration)
Budget: 3 ($50k-$100k)

SOURCE: Chat Assistant on GAX-GLOBAL Website
```

**Setup required:** See EMAIL-SETUP-GUIDE.md

---

## 📊 Analytics & Tracking

Want to track chatbot usage? Add to the code:

### Google Analytics Example:

```tsx
// In handleSendMessage function, add:
if (window.gtag) {
  window.gtag('event', 'chatbot_message', {
    'message_type': conversationStep > 0 ? 'lead_collection' : 'question'
  });
}
```

### Track Lead Submissions:

```tsx
// In handleInfoCollection function, when lead is complete, add:
if (window.gtag) {
  window.gtag('event', 'chatbot_lead_submitted', {
    'project_type': collectedInfo.projectType,
    'budget': trimmedMessage
  });
}
```

---

## 🎨 Customizing Appearance

### Change Colors:

In `/src/app/components/ChatAssistant.tsx`, find these classes:

**Button Color:**
```tsx
className="bg-gradient-to-r from-blue-600 to-cyan-600"
// Change to your brand colors:
className="bg-gradient-to-r from-purple-600 to-pink-600"
```

**Bot Message Bubble:**
```tsx
className="bg-white text-gray-800"
// Change to:
className="bg-blue-50 text-blue-900"
```

### Change Position:

**Current:** Bottom-right corner
```tsx
className="fixed bottom-6 right-6"
```

**Bottom-left:**
```tsx
className="fixed bottom-6 left-6"
```

**Top-right:**
```tsx
className="fixed top-20 right-6"
```

---

## 🚀 Advanced Features You Can Add

### 1. File Attachments
Allow users to upload files (requires backend)

### 2. Image Responses
Show images in chat responses

### 3. Typing Indicator
Show "Bot is typing..." animation

### 4. Chat History
Save conversation in browser

### 5. Appointment Booking
Integrate with Calendly or similar

### 6. Live Chat Handoff
Switch to human agent when needed

---

## ⚠️ Important Notes

### What the Bot CAN Do:
✅ Answer pre-programmed questions  
✅ Collect lead information  
✅ Send emails automatically  
✅ Provide instant responses  
✅ Work 24/7 without human input  

### What the Bot CANNOT Do:
❌ Learn from conversations (not true AI)  
❌ Answer completely unique questions  
❌ Access real-time data  
❌ Make decisions or promises  
❌ Replace human consultation  

**This is a rule-based chatbot**, not ChatGPT. It follows pre-written scripts.

For true AI (ChatGPT-like), you'd need:
- OpenAI API key ($$$)
- Backend server
- Different implementation

---

## 🔧 Troubleshooting

### Bot Button Not Showing?

**Check:**
1. Did you deploy the latest code?
2. Hard refresh browser (Ctrl+Shift+R)
3. Check browser console for errors (F12)

### Bot Not Responding?

**Check:**
1. Make sure you pressed Enter or clicked Send
2. Check internet connection
3. Look for JavaScript errors in console

### Emails Not Arriving?

**Check:**
1. Did you set up EmailJS? (see EMAIL-SETUP-GUIDE.md)
2. Check spam folder
3. Verify EmailJS dashboard shows sent emails
4. Check EmailJS quotas (200/month on free tier)

---

## 📱 Mobile Experience

The chatbot is **fully mobile-responsive**:

- ✅ Opens full-width on mobile
- ✅ Keyboard doesn't cover input
- ✅ Touch-friendly buttons
- ✅ Smooth scrolling
- ✅ Easy to close

---

## 🎯 Best Practices

### For Best Results:

1. **Keep responses short** - Mobile users have small screens
2. **Use bullet points** - Easier to scan
3. **Provide options** - Give numbered choices
4. **Quick replies** - Add more quick-reply buttons
5. **Test regularly** - Try different questions
6. **Monitor emails** - See what users are asking

### Don't:

- ❌ Make responses too long
- ❌ Use technical jargon
- ❌ Promise specific deliverables
- ❌ Share pricing without context
- ❌ Collect sensitive information

---

## ✅ Final Checklist

Setup complete when:

- [ ] ChatbotButton shows on website
- [ ] Can open/close chat window
- [ ] Quick reply buttons work
- [ ] Can type and send messages
- [ ] Bot responds to questions
- [ ] Can complete lead collection flow
- [ ] EmailJS is configured (see EMAIL-SETUP-GUIDE.md)
- [ ] Test email arrives at info@gax-global.com
- [ ] Success notification appears
- [ ] Works on mobile devices

---

## 📞 Support

**Files to check:**
- `/src/app/components/ChatAssistant.tsx` - Main chatbot code
- `/EMAIL-SETUP-GUIDE.md` - Email setup instructions

**Need help?**
- Check browser console (F12) for errors
- Review this guide
- Test on different devices
- Email: info@gax-global.com

---

**Your chatbot is ready to engage visitors 24/7!** 🎉
