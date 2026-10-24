// ─────────────────────────────────────────────
//  KRYPTIX X-MD  •  by Whitekid Tech
//  Central brand + owner configuration
// ─────────────────────────────────────────────
module.exports = {
    giphyApiKey: process.env.GIPHY_API_KEY || 'dc6zaTOxFJmzC',

    // Owner
    ownerNumber: process.env.OWNER_NUMBER || '263789846423',
    ownerName: 'Whitekid Tech',

    // Brand
    botName: 'KRYPTIX X-MD',
    company: 'WHITEKID TECH',
    tagline: 'Fast • Smart • Reliable',
    version: '1.0.0',

    // Optional: your own WhatsApp channel (set in .env)
    channelLink: process.env.CHANNEL_LINK || '',
    channelJid: process.env.CHANNEL_JID || ''
};
