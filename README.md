# Makesworth Accountants Website

## 🚀 Deploy to Vercel
1. Add your 4 images to the `images/` folder (see below)
2. Push to GitHub or drag the folder into Vercel
3. Done!

## 🖼️ Images — Drop Your 4 Files Here

| # | Filename | Location on Site | Recommended Size | Notes |
|---|----------|-----------------|-----------------|-------|
| 1 | `images/hero-bg.jpg` | Hero section background | 1920×1080px | Office building, cityscape, or professional setting. A dark overlay is applied automatically so it can be any image. |
| 2 | `images/advisory.jpg` | "More Than Accountants" section | 800×600px | Team meeting, consultation, or professional working photo. |
| 3 | `images/tools-banner.jpg` | Free Tools section header | 700×200px (wide banner) | Calculator, laptop with charts, or finance-related visual. |
| 4 | `images/cta-bg.jpg` | "Ready to Keep More?" CTA section | 1920×600px | Office, handshake, team celebration. A gold overlay is applied automatically. |

### How to add:
Just drop the 4 images into the `images/` folder with the exact filenames above. The HTML already references them.

## 📁 Folder Structure
```
makesworth-site/
├── index.html          ← Main website (single file, all CSS/JS inline)
├── README.md           ← This file
└── images/
    ├── hero-bg.jpg     ← IMAGE 1: Hero background
    ├── advisory.jpg    ← IMAGE 2: Advisory section
    ├── tools-banner.jpg← IMAGE 3: Tools section banner
    └── cta-bg.jpg      ← IMAGE 4: CTA section background
```

## ✨ Features
- **4 Interactive Tax Tools**: Take-Home Pay Calculator, Sole Trader vs Ltd, VAT Checker, Dividend Optimiser
- **AI Chatbot**: Powered by Claude API (needs API key in production)
- **Client Portal Mockup**: Shows branded portal experience
- **Outcome-driven messaging**: Leads with client benefits, not services
- **Fully responsive**: Mobile, tablet, desktop
- **Zero dependencies**: Pure HTML/CSS/JS (only Google Fonts external)

## 🤖 AI Chatbot Setup
The chatbot calls `https://api.anthropic.com/v1/messages`. In production on Vercel:
- The API key is handled automatically if deploying through Claude artifacts
- For custom deployment, you'll need to proxy through a serverless function to keep the API key secure
- If the API is unavailable, the chatbot falls back to showing the phone number

## 📞 Contact Info (already configured)
- Phone: 020 7993 8850
- Email: info@makesworth.co.uk
- Harrow: Unit 101, Cervantes House, 5-9 Headstone Rd, HA1 1PD
- Milton Keynes: 29 Linford Forum, 18 Rockingham Dr, MK14 6LY
