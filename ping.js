const settings = require('../settings');

async function pingCommand(sock, from, msg) {
    const start = Date.now();
    const { key } = await sock.sendMessage(from, { text: '🛰 _Scanning network..._' }, { quoted: msg });
    const ms = Date.now() - start;
    const grade = ms < 300 ? '🟢 Excellent' : ms < 800 ? '🟡 Good' : '🔴 Slow';
    await sock.sendMessage(from, {
        text: `⚡ *${settings.botName}*\n━━━━━━━━━━━━━━\n🏓 *Latency:* ${ms}ms\n📶 *Signal:* ${grade}\n━━━━━━━━━━━━━━\n_${settings.company}_`,
        edit: key
    });
}

module.exports = pingCommand;
