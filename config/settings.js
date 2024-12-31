// Required Libraries
const fs = require('fs')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

// Global Configuration
global.owner = ['6285878774454'];
global.nameowner = 'Xiety';
global.namebot = 'XyPushV4';
global.author = 'Xiety';
global.packname = 'XyPushV4';
global.usePairingCode = true;
global.anticall = true;
global.prefix = '.';
global.thumb = fs.readFileSync('./src/image/thumb.jpg');

// Global Bot Menu
global.menu = `____
${readmore}

> 📜 *Perintah Tersedia:*
\`Save Menu\`
- *${prefix}savecontactid*
- *${prefix}savecontactgrup*
- *${prefix}save*
- *${prefix}sendcontact*

\`Pushkontak Menu\`
- *${prefix}pushkontakid*
- *${prefix}pushkontakgrup*
- *${prefix}pushkontaksave*
- *${prefix}listid*
- *${prefix}getidgc*

\`Broadcast/Jpm Grup Menu\`
- *${prefix}jpm*
- *${prefix}jpmhidetag*
- *${prefix}jpmstop*

\`Setting Filter\`
- *${prefix}setfilterkontak*
- *${prefix}setfiltergrup*

\`Post Status Menu\`
- *${prefix}postsw*
- *${prefix}postswimage*
- *${prefix}postswvideo*

\`Tools Menu\`
- *${prefix}creategroup*
- *${prefix}joingrup*
- *${prefix}sticker*
- *${prefix}brat*
- *${prefix}qc*
- *${prefix}toimg*
- *${prefix}tourl*
- *${prefix}toqr*

\`Other Menu\`
- *${prefix}public*
- *${prefix}self*
- *${prefix}restart*
- *${prefix}shutdown*
- *${prefix}owner*

_____
`;

// Messages
global.mess = {
    wait: "Mohon tunggu, sedang diproses...",
    success: "Berhasil!",
    on: "Aktif",
    off: "Nonaktif",
    text: "Mana teksnya?",
    link: "Mana linknya?",
    fitur: "Maaf, fitur ini rusak. Silakan hubungi pengembang bot untuk perbaikan.",
    group: "Maaf, fitur ini hanya bisa digunakan di grup.",
    private: "Maaf, fitur ini hanya bisa digunakan di chat pribadi.",
    owner: "Maaf, fitur ini hanya bisa digunakan oleh pemilik bot.",
    admin: "Maaf, fitur ini hanya bisa digunakan oleh pemilik bot.",
    badmin: "Maaf, sepertinya Anda tidak bisa menggunakan fitur ini karena bot bukan admin di grup.",
    premium: "Maaf, Anda bukan pengguna premium. Untuk menjadi pengguna premium, silakan hubungi pemilik bot dengan mengetik .owner"
};