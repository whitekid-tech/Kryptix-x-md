const settings = require('../settings');

// Only attach "forwarded from channel" info when a channel JID is configured in .env
const channelInfo = settings.channelJid
    ? {
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: settings.channelJid,
                newsletterName: settings.botName,
                serverMessageId: -1
            }
        }
    }
    : { contextInfo: {} };

module.exports = { channelInfo };
