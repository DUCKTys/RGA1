var handler = async m => m.reply(`
╭─「 Donasi 」
│ • TELKOMSEL [08211499086]
│ • DANA [08211499086]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281359053674
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
