# ✅ Setup Checklist - Complete These in Order

## Phase 1: Deployment (Do This First!) ⏱️ 5 minutes

### Step 1: Commit & Push to GitHub

```bash
git add .
git commit -m "Add background email sending, AI chatbot, and Google Ads"
git push origin main
```

- [ ] All files committed
- [ ] Pushed to GitHub repository
- [ ] No git errors

### Step 2: Wait for Cloudflare Pages

- [ ] Go to Cloudflare Pages dashboard
- [ ] See new deployment starting
- [ ] Wait 3-5 minutes for build
- [ ] Build completes successfully (no errors)
- [ ] Deployment shows as "Success"

### Step 3: Verify Site is Live

- [ ] Visit your Cloudflare Pages URL
- [ ] Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- [ ] Hero section loads with data center background
- [ ] All sections visible (services, process, outcomes, contact)
- [ ] Footer shows correct info
- [ ] No console errors (press F12 to check)

**✅ If all checked, proceed to Phase 2!**

---

## Phase 2: Email Setup (Critical!) ⏱️ 5 minutes

### Step 1: Create EmailJS Account

- [ ] Go to https://www.emailjs.com/
- [ ] Click "Sign Up"
- [ ] Create free account (no credit card needed)
- [ ] Verify your email address
- [ ] Login to dashboard

### Step 2: Connect Email Service

- [ ] Click "Email Services"
- [ ] Click "Add New Service"
- [ ] Choose "Gmail"
- [ ] Sign in with info@gax-global.com
- [ ] Allow EmailJS permissions
- [ ] Copy your **Service ID** (save it!)
- [ ] Service shows as active (green)

**Service ID:** `________________` (write it here)

### Step 3: Create Contact Form Template

- [ ] Click "Email Templates"
- [ ] Click "Create New Template"
- [ ] Name: "Contact Form"
- [ ] Subject: `New Project Request from {{from_name}}`
- [ ] Copy content from EMAIL-SETUP-GUIDE.md
- [ ] Set "To Email": info@gax-global.com
- [ ] Set "Reply To": {{from_email}}
- [ ] Click "Save"
- [ ] Copy your **Template ID** (save it!)

**Template ID (Contact):** `________________` (write it here)

### Step 4: Create Chatbot Template

- [ ] Click "Create New Template" again
- [ ] Name: "Chat Lead"
- [ ] Subject: `New Chat Lead: {{name}}`
- [ ] Copy content from EMAIL-SETUP-GUIDE.md
- [ ] Set "To Email": info@gax-global.com
- [ ] Set "Reply To": {{email}}
- [ ] Click "Save"
- [ ] Copy your **Template ID** (save it!)

**Template ID (Chat):** `________________` (write it here)

### Step 5: Get Public Key

- [ ] Click your name (top right)
- [ ] Go to "General" tab
- [ ] Find "Public Key" section
- [ ] Copy your **Public Key** (save it!)

**Public Key:** `________________` (write it here)

### Step 6: Update Contact.tsx

- [ ] Open `/src/app/components/Contact.tsx`
- [ ] Find lines 21-23
- [ ] Replace `YOUR_SERVICE_ID` with your Service ID
- [ ] Replace `YOUR_TEMPLATE_ID` with your Contact Template ID
- [ ] Replace `YOUR_PUBLIC_KEY` with your Public Key
- [ ] Save file

### Step 7: Update ChatAssistant.tsx

- [ ] Open `/src/app/components/ChatAssistant.tsx`
- [ ] Find line 139
- [ ] Replace `service_gax_global` with your Service ID
- [ ] Replace `template_chat_lead` with your Chat Template ID
- [ ] Find line 148
- [ ] Replace `user_gax_global` with your Public Key
- [ ] Save file

### Step 8: Deploy Updated Code

```bash
git add .
git commit -m "Add EmailJS credentials"
git push origin main
```

- [ ] Committed changes
- [ ] Pushed to GitHub
- [ ] Wait for Cloudflare rebuild (3-5 min)
- [ ] Hard refresh your site

**✅ If all checked, email sending is now active!**

---

## Phase 3: Testing (Essential!) ⏱️ 10 minutes

### Test Contact Form

- [ ] Visit your live site
- [ ] Scroll to contact section
- [ ] Fill out all required fields:
  - [ ] Name: "Test User"
  - [ ] Email: your email
  - [ ] Company: "Test Company"
  - [ ] Project Type: "CI/CD Pipeline"
  - [ ] Budget: "$10k - $50k"
  - [ ] Timeline: "1-3 months"
  - [ ] Description: "This is a test"
- [ ] Click "Submit Project Request"
- [ ] Button shows "Sending..."
- [ ] Green notification appears: "Request sent successfully!"
- [ ] Form clears automatically
- [ ] Check info@gax-global.com inbox
- [ ] Email received with all form data
- [ ] Reply-to is set to your email

**✅ Contact form working!**

### Test AI Chatbot

- [ ] Click "Need Help?" button (bottom-right)
- [ ] Chat window opens
- [ ] See welcome message from GAX Assistant
- [ ] Click "Services" quick button
- [ ] Bot responds with services list
- [ ] Type "How much does it cost?"
- [ ] Bot responds with pricing info
- [ ] Type "I want to start a project"
- [ ] Bot asks for name - enter: "Test Lead"
- [ ] Bot asks for email - enter: your email
- [ ] Bot asks for company - enter: "Test Co"
- [ ] Bot asks for project - enter: "1"
- [ ] Bot asks for budget - enter: "2"
- [ ] Bot confirms info collected
- [ ] Green notification appears
- [ ] Check info@gax-global.com inbox
- [ ] Email received with chat lead info

**✅ Chatbot working!**

### Test on Mobile

- [ ] Open site on phone/tablet
- [ ] Hero displays correctly
- [ ] Can scroll through all sections
- [ ] Contact form is usable
- [ ] "Need Help?" button visible
- [ ] Chat opens full-width
- [ ] Can type and send messages
- [ ] Form submission works
- [ ] Notifications appear

**✅ Mobile responsive!**

### Test Other Features

- [ ] All service cards load
- [ ] Process timeline visible
- [ ] Outcomes section displays
- [ ] Ad placeholders show (gray boxes)
- [ ] Footer has correct email (info@gax-global.com)
- [ ] LinkedIn link works
- [ ] No broken images
- [ ] No console errors

**✅ All features working!**

---

## Phase 4: Google AdSense (Optional) ⏱️ 1-2 weeks

### Apply for AdSense

- [ ] Go to https://www.google.com/adsense
- [ ] Sign in with Google account
- [ ] Submit application
- [ ] Add site URL
- [ ] Wait for approval (1-2 weeks)

### After Approval

- [ ] Get Publisher ID (ca-pub-XXXXXXXX)
- [ ] Create 3 ad units in AdSense
- [ ] Update `/index.html` with Publisher ID
- [ ] Update `/src/app/App.tsx` with ad slot IDs
- [ ] Replace `GoogleAdPlaceholder` with `GoogleAd`
- [ ] Deploy changes
- [ ] Verify ads showing

**See `GOOGLE-ADS-SETUP.md` for detailed instructions**

---

## Phase 5: Monitoring ⏱️ Ongoing

### Daily Checks (First Week)

- [ ] Check info@gax-global.com for submissions
- [ ] Verify emails are arriving
- [ ] Reply to leads within 24 hours
- [ ] Test chatbot still working
- [ ] Monitor EmailJS dashboard

### Weekly Checks

- [ ] Review EmailJS email log
- [ ] Check for failed emails
- [ ] Verify within free tier limits (200/month)
- [ ] Test form still working
- [ ] Check site performance

### Monthly Checks

- [ ] Review total submissions
- [ ] Calculate conversion rate
- [ ] Check EmailJS quota usage
- [ ] Consider upgrading if needed
- [ ] Review Google Ads revenue (if active)

---

## 🐛 Troubleshooting Checklist

### Site Not Loading?

- [ ] Hard refresh (Ctrl+Shift+R)
- [ ] Try incognito/private mode
- [ ] Clear browser cache
- [ ] Check different browser
- [ ] Wait 60 seconds (CDN propagation)
- [ ] Check Cloudflare deployment status

### Emails Not Sending?

- [ ] Open browser console (F12)
- [ ] Look for error messages
- [ ] Verify EmailJS Service ID is correct
- [ ] Verify Template IDs are correct
- [ ] Verify Public Key is correct
- [ ] Check EmailJS dashboard → Email Log
- [ ] Check spam folder
- [ ] Verify EmailJS service is active

### Chatbot Not Showing?

- [ ] Hard refresh browser
- [ ] Check browser console for errors
- [ ] Verify `/src/app/components/ChatAssistant.tsx` exists
- [ ] Verify imported in App.tsx
- [ ] Check if hidden behind other elements
- [ ] Try different device/browser

### Build Failing?

- [ ] Check Cloudflare build logs
- [ ] Look for specific error message
- [ ] Verify all imports are correct
- [ ] Check no syntax errors
- [ ] Make sure all dependencies installed
- [ ] Try: `npm install` locally

---

## 📊 Success Metrics to Track

### Week 1 Targets

- [ ] 0 deployment errors
- [ ] 100% email delivery rate
- [ ] At least 1 test submission works
- [ ] Site loads in under 3 seconds
- [ ] Mobile responsive working

### Month 1 Targets

- [ ] 5+ form submissions
- [ ] 10+ chatbot engagements
- [ ] 50+ site visits
- [ ] 2+ qualified leads
- [ ] EmailJS under 200 email limit

### Month 3 Targets

- [ ] 20+ submissions/month
- [ ] 40+ chatbot engagements
- [ ] 200+ site visits
- [ ] 8+ qualified leads/month
- [ ] Consider EmailJS paid plan if needed
- [ ] Google AdSense approved & active

---

## ✅ Final Verification

Before marking as complete:

### Technical

- [x] Code deployed to Cloudflare
- [ ] EmailJS configured correctly
- [ ] All forms tested and working
- [ ] Chatbot tested and working
- [ ] Mobile tested
- [ ] No console errors

### Content

- [x] Email is info@gax-global.com everywhere
- [x] LinkedIn is linkedin.com/company/gax-global
- [x] All service descriptions accurate
- [x] Hero text compelling
- [x] No typos

### Business

- [ ] Email inbox monitored
- [ ] Response process defined
- [ ] Lead qualification criteria set
- [ ] Follow-up timeline (24 hours)
- [ ] Proposal templates ready

### Documentation

- [x] README.md reviewed
- [x] EMAIL-SETUP-GUIDE.md understood
- [x] HOW-TO-USE-CHATBOT.md read
- [x] All credentials recorded
- [x] Backup plan if EmailJS down

---

## 🎉 Completion

When everything is checked:

- [ ] **Phase 1 complete:** Site deployed ✅
- [ ] **Phase 2 complete:** Email sending works ✅
- [ ] **Phase 3 complete:** All tests passed ✅
- [ ] **Phase 4 in progress:** AdSense (optional)
- [ ] **Phase 5 started:** Monitoring active ✅

---

## 📞 If You Get Stuck

**Check these in order:**

1. **Browser console (F12)** - Look for red errors
2. **Cloudflare build logs** - Check deployment status
3. **EmailJS dashboard** - Verify service active
4. **Documentation files** - Re-read relevant guide
5. **This checklist** - Did you skip a step?

**Still stuck?**

- Email: info@gax-global.com
- Re-read: `EMAIL-SETUP-GUIDE.md`
- Check: `FINAL-SETUP-SUMMARY.md`

---

## 🚀 You're Done When...

✅ Site is live  
✅ Contact form sends emails  
✅ Chatbot collects leads  
✅ All emails arrive at info@gax-global.com  
✅ Mobile works perfectly  
✅ No errors anywhere  

**Congratulations! Your GAX-GLOBAL website is live!** 🎉

Now start collecting leads and growing your business! 💼
