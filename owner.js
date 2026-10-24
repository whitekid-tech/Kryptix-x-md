const settings = require('../settings');

async function ownerCommand(sock, from, msg) {
    const channel = settings.channelLink ? `\n🔗 *Channel:*\n> ${settings.channelLink}\n` : '';
    const ownerText =
`╭──〔 👑 *OWNER CARD* 〕──╮
│
│ 🏢 *Company:* ${settings.company}
│ 👤 *Owner:* ${settings.ownerName}
│ 📱 *Contact:* +${settings.ownerNumber}
│ 💬 *Chat:* wa.me/${settings.ownerNumber}
│
╰────────────────────╯${channel}
⚡ _${settings.botName} • ${settings.company}_`;
    await sock.sendMessage(from, { text: ownerText }, { quoted: msg });
}

module.exports = ownerCommand;
