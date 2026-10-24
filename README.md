# ⚡ KRYPTIX X-MD

WhatsApp multi-device bot by **Whitekid Tech**.

- **Owner:** Whitekid Tech — +263789846423
- **Pairing:** web panel or Telegram bot
- **Features:** downloaders (TikTok, Instagram, Facebook, YouTube, APK), AI chat, anti-link / anti-delete / anti-call, auto-status, group tools, and more. Send `.menu` to see everything.

## Setup

```bash
npm install
npm start          # or: npm run pm2
```

Open the panel at `http://localhost:22019` (see `PORT` in `.env`), choose a bot ID, enter your WhatsApp number and link with the pairing code
(WhatsApp → Linked Devices → Link with phone number).

## Configuration (`.env`)

| Variable | Purpose |
|---|---|
| `OWNER_NUMBER` | Owner number, digits only (default `263789846423`) |
| `TELEGRAM_BOT_TOKEN` | Token from @BotFather to enable Telegram pairing (optional) |
| `OPENAI_API_KEY`, `AI_BASE_URL`, `AI_MODEL` | Enables the `.ai` command (Groq / OpenRouter / OpenAI-compatible) |
| `CHANNEL_LINK`, `CHANNEL_JID` | Your own WhatsApp channel (optional) |

Branding lives in `settings.js`; the menu layout is in `lib/menu.js` and the menu image is `assets/kryptix-banner.png`.

© Whitekid Tech
