# Google reCAPTCHA v3 Setup Instructions

## ✅ What's Already Done

The code is ready! I've implemented:
- ✅ Frontend integration with automatic token generation
- ✅ Backend verification API endpoint
- ✅ Form handling with loading states
- ✅ Error handling and user feedback
- ✅ reCAPTCHA badge and privacy notices

---

## 🔑 What Client Needs to Provide

### 1. Get reCAPTCHA Credentials

**Steps:**
1. Go to: https://www.google.com/recaptcha/admin/create
2. Sign in with Google account
3. Fill in the form:
   - **Label:** RODOPI Contact Form (or any name)
   - **reCAPTCHA Type:** Select **reCAPTCHA v3**
   - **Domains:** Add:
     - `localhost` (for development)
     - `rodopi.de`
     - `www.rodopi.de`
     - Any other domains/subdomains
4. Accept terms and click **Submit**
5. You'll receive:
   - **Site Key** (starts with `6L...`)
   - **Secret Key** (starts with `6L...`)

---

## 🛠️ Setup Steps (After Getting Keys)

### Step 1: Create `.env.local` file

Create a file named `.env.local` in the root directory:

```bash
# Root directory: d:\Fiver Project\2025\Rodopi\rodopi-local\.env.local
```

Add these lines (replace with actual keys):

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
RECAPTCHA_SECRET_KEY=6Lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Important:** 
- The Site Key is prefixed with `NEXT_PUBLIC_` (visible in browser)
- The Secret Key is NOT prefixed (server-only)

### Step 2: Add to `.gitignore`

Make sure `.env.local` is in your `.gitignore` file:

```gitignore
# Environment variables
.env.local
.env.*.local
```

### Step 3: Restart Development Server

```bash
npm run dev
```

---

## 📧 Email Integration (Optional Next Step)

The API currently logs submissions. To send actual emails, you need:

### Option 1: Nodemailer (SMTP)
```bash
npm install nodemailer
```

Add to `.env.local`:
```env
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-email@rodopi.de
SMTP_PASS=your-password
```

### Option 2: SendGrid
```bash
npm install @sendgrid/mail
```

Add to `.env.local`:
```env
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxx
```

### Option 3: Resend (Modern Email API)
```bash
npm install resend
```

Add to `.env.local`:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx
```

---

## 🧪 Testing

### Development Testing
reCAPTCHA v3 works on `localhost` automatically.

### Production Testing
After deploying:
1. Test form submission
2. Check reCAPTCHA admin console for analytics
3. Verify score threshold (default: 0.5)

### Score Interpretation
- **0.0 - 0.3:** Likely bot
- **0.3 - 0.7:** Suspicious
- **0.7 - 1.0:** Likely human

Current threshold: **0.5** (adjust in `/src/app/api/contact/route.js` if needed)

---

## 🎯 reCAPTCHA v3 Features

✅ **Invisible** - No user interaction required
✅ **Score-based** - Returns 0.0 to 1.0 score
✅ **Action tracking** - Monitors different form actions
✅ **Analytics** - Dashboard in reCAPTCHA admin

---

## ❓ Troubleshooting

### "reCAPTCHA is not configured"
- Check if `.env.local` exists
- Verify keys are correctly copied
- Restart dev server

### Low scores (false positives)
- Lower threshold in API route (e.g., 0.3)
- Add more domains to reCAPTCHA admin
- Test in production (scores are more accurate)

### reCAPTCHA badge not showing
- Badge appears automatically in bottom-right
- Can be hidden with CSS if needed (after showing notice)

---

## 📞 Support

If client has issues:
1. Share this document
2. Ask for screenshots of reCAPTCHA admin
3. Test keys in reCAPTCHA admin console

---

## 🚀 Production Deployment

Before deploying:
1. Add production domains to reCAPTCHA admin
2. Set environment variables in hosting platform:
   - Vercel: Settings → Environment Variables
   - Netlify: Site settings → Build & deploy → Environment
   - Other: Check platform documentation
3. Test thoroughly after deployment
