# 📧 Email Setup Guide - Background Email Sending

## ✅ What's Been Done

Your website now has **background email sending** - no more Outlook/Gmail popup!

### Features:
- ✅ Contact form sends emails in the background
- ✅ AI chatbot sends lead info in the background
- ✅ Beautiful success/error notifications
- ✅ Loading states during submission
- ✅ Form validation

### What You Need:
- Free EmailJS account (no credit card required)
- 5 minutes to set up

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click **"Sign Up"** (top right)
3. Create a free account (allows 200 emails/month)
4. Verify your email address

---

### Step 2: Connect Your Email (Gmail Recommended)

1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (easiest option)
4. Click **"Connect Account"**
5. Sign in with your Gmail (info@gax-global.com)
6. Allow EmailJS to send emails
7. **Copy your Service ID** (looks like: `service_abc1234`)

**Important:** Keep this Service ID - you'll need it in Step 4!

---

### Step 3: Create Email Templates

You need **2 templates** (one for contact form, one for chatbot).

#### Template 1: Contact Form

1. Click **"Email Templates"** in EmailJS dashboard
2. Click **"Create New Template"**
3. Template Name: **"Contact Form"**
4. Subject: `New Project Request from {{from_name}}`
5. Content (copy this):

```
New Project Request from GAX-GLOBAL Website

FROM:
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}

PROJECT DETAILS:
Type: {{project_type}}
Budget: {{budget}}
Timeline: {{timeline}}

DESCRIPTION:
{{message}}

---
Sent via GAX-GLOBAL Contact Form
Reply to: {{from_email}}
```

6. In "Settings" tab:
   - **To Email:** info@gax-global.com
   - **From Name:** GAX-GLOBAL Website
   - **Reply To:** {{from_email}}

7. Click **"Save"**
8. **Copy your Template ID** (looks like: `template_xyz5678`)

#### Template 2: Chat Assistant

1. Click **"Create New Template"** again
2. Template Name: **"Chat Lead"**
3. Subject: `New Chat Lead: {{name}}`
4. Content (copy this):

```
New Lead from AI Chat Assistant

CONTACT INFO:
Name: {{name}}
Email: {{email}}
Company: {{company}}

PROJECT INTEREST:
Type: {{project_type}}
Budget: {{budget}}

SOURCE: Chat Assistant on GAX-GLOBAL Website

---
Reply to: {{email}}
```

5. In "Settings" tab:
   - **To Email:** info@gax-global.com
   - **From Name:** GAX Assistant
   - **Reply To:** {{email}}

6. Click **"Save"**
7. **Copy your Template ID** (looks like: `template_chat123`)

---

### Step 4: Get Your Public Key

1. Click **"Account"** (top right)
2. Go to **"General"** tab
3. Find **"Public Key"** section
4. **Copy your Public Key** (looks like: `user_abc123xyz`)

---

### Step 5: Update Your Code

Now update your website with the IDs you copied:

#### File: `/src/app/components/Contact.tsx`

Find line 21-23 and replace:

```tsx
// BEFORE:
const serviceID = 'YOUR_SERVICE_ID';
const templateID = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';

// AFTER (use your actual IDs):
const serviceID = 'service_abc1234';  // Your Service ID from Step 2
const templateID = 'template_xyz5678';  // Your Template ID from Step 3 (Contact Form)
const publicKey = 'user_abc123xyz';  // Your Public Key from Step 4
```

#### File: `/src/app/components/ChatAssistant.tsx`

Find line 139 and replace:

```tsx
// BEFORE:
emailjs.send('service_gax_global', 'template_chat_lead', {

// AFTER (use your actual IDs):
emailjs.send('service_abc1234', 'template_chat123', {
  // Replace service_abc1234 with your Service ID
  // Replace template_chat123 with your Chat Template ID
```

And on line 148, replace:

```tsx
// BEFORE:
}, 'user_gax_global')

// AFTER:
}, 'user_abc123xyz')  // Your Public Key
```

---

### Step 6: Deploy & Test!

1. **Save all changes**
2. **Commit to Git:**
   ```bash
   git add .
   git commit -m "Add EmailJS background email sending"
   git push origin main
   ```

3. **Wait for Cloudflare to deploy** (3-5 minutes)

4. **Test the contact form:**
   - Fill out the form
   - Click "Submit Project Request"
   - You should see a green success notification
   - Check info@gax-global.com inbox

5. **Test the chatbot:**
   - Click "Need Help?" button
   - Type "I want to start a project"
   - Complete the conversation
   - Check your email inbox

---

## 🎯 What Happens When User Submits

### Contact Form Flow:

1. User fills out form
2. Clicks "Submit Project Request"
3. Button shows "Sending..." with spinner
4. Email sent in background (no popup!)
5. Green notification: "Request sent successfully!"
6. Form clears automatically
7. Email arrives at info@gax-global.com

### Chatbot Flow:

1. User chats with bot
2. Bot collects: name, email, company, project, budget
3. Email sent in background
4. Green notification: "Your request has been sent!"
5. Conversation continues
6. Email arrives at info@gax-global.com

---

## 🎨 User Experience

### Before (Old Way):
❌ Click submit → Outlook opens → User must click send again  
❌ Clunky, requires 2 actions  
❌ Some users don't have email client configured  

### After (New Way):
✅ Click submit → Email sent instantly  
✅ Beautiful success notification  
✅ Single action, smooth experience  
✅ Works on all devices  

---

## 📊 EmailJS Free Tier

**Includes:**
- ✅ 200 emails/month (plenty for most sites)
- ✅ 2 email services (Gmail + backup)
- ✅ Unlimited templates
- ✅ Email logs & analytics
- ✅ No credit card required

**Need more emails?**
- Personal plan: $15/month (10,000 emails)
- Pro plan: $65/month (100,000 emails)

---

## 🔒 Security & Privacy

### Is EmailJS Secure?
✅ Yes! Industry-standard security  
✅ HTTPS encryption  
✅ No sensitive data stored  
✅ GDPR compliant  

### What Data is Sent?
- Contact form: name, email, company, project details
- Chatbot: name, email, company, project type, budget
- **NOT sent:** passwords, credit cards, SSNs

### Can Users See My Credentials?
❌ No! Your EmailJS keys are public-safe  
✅ Only allows sending from your domain  
✅ Cannot be used to read your emails  

---

## 🐛 Troubleshooting

### Emails Not Sending?

**1. Check Browser Console (F12)**
Look for errors. Common issues:
- "Service ID not found" → Wrong Service ID
- "Template ID not found" → Wrong Template ID  
- "Public Key invalid" → Wrong Public Key

**2. Check EmailJS Dashboard**
- Go to "Email Log" in EmailJS
- See if requests are arriving
- Check for error messages

**3. Check Spam Folder**
- Emails might go to spam initially
- Mark as "Not Spam" to train filter

**4. Verify EmailJS Service**
- Make sure Gmail is connected
- Check service is active (green dot)

### Success Message But No Email?

**Check EmailJS logs:**
1. EmailJS Dashboard → "Email Log"
2. Find your recent send attempt
3. Check status:
   - ✅ Green = Sent successfully
   - ⏳ Yellow = Processing
   - ❌ Red = Failed (click for details)

### Form Shows Error?

**Common fixes:**
- Check internet connection
- Verify all IDs are correct
- Make sure EmailJS service is active
- Check if you've hit monthly limit (200 emails)

---

## 🎯 Testing Checklist

After setup, test these:

### Contact Form:
- [ ] Fill all required fields
- [ ] Click submit
- [ ] See "Sending..." state
- [ ] See green success notification
- [ ] Form clears after submit
- [ ] Email arrives at info@gax-global.com
- [ ] Email contains all form data

### Chatbot:
- [ ] Open chat assistant
- [ ] Say "I want to start a project"
- [ ] Complete all questions
- [ ] See success notification
- [ ] Email arrives at info@gax-global.com
- [ ] Email contains collected info

---

## 💡 Alternative: Using Your Own SMTP

If you prefer not to use EmailJS, you can use:

### Option 1: Formspree
- https://formspree.io/
- Free tier: 50 submissions/month
- Very simple setup

### Option 2: Web3Forms
- https://web3forms.com/
- Free tier: 250 submissions/month
- No registration needed

### Option 3: Supabase Edge Functions
- Fully custom backend
- Requires more setup
- Complete control

**Recommendation:** Start with EmailJS (easiest), upgrade if needed.

---

## 📞 Need Help?

### EmailJS Support:
- Docs: https://www.emailjs.com/docs/
- FAQ: https://www.emailjs.com/faq/
- Support: support@emailjs.com

### Your Implementation:
- Check `/src/app/components/Contact.tsx` (contact form)
- Check `/src/app/components/ChatAssistant.tsx` (chatbot)
- Both files have detailed comments

---

## 📋 Quick Reference

### Your IDs (fill these in):

```
Service ID:  _________________ (from Step 2)
Template 1:  _________________ (Contact Form - Step 3)
Template 2:  _________________ (Chat Lead - Step 3)
Public Key:  _________________ (from Step 4)
```

### Where to Update:

| File | Line | What to Replace |
|------|------|----------------|
| Contact.tsx | 21 | Service ID |
| Contact.tsx | 22 | Template ID (contact) |
| Contact.tsx | 23 | Public Key |
| ChatAssistant.tsx | 139 | Service ID |
| ChatAssistant.tsx | 139 | Template ID (chat) |
| ChatAssistant.tsx | 148 | Public Key |

---

## ✅ Summary

**What you get:**
- ✅ Professional background email sending
- ✅ No Outlook/Gmail popups
- ✅ Beautiful notifications
- ✅ Works on all devices
- ✅ 200 free emails/month
- ✅ 5-minute setup

**Next steps:**
1. Create EmailJS account
2. Get your 3 IDs
3. Update the code
4. Deploy & test
5. Start receiving leads!

---

**Questions?** The AI chatbot on your site can help! Or email info@gax-global.com
