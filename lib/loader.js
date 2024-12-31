const fs = require('fs');
const chalk = require('chalk');
const moment = require('moment');
const time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY');

// Fungsi untuk menghapus cache file
function uncache(module = '.') {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

// Fungsi untuk memantau file dan otomatis reload jika ada perubahan
function nocache(module, cb = () => {}) {
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}

// Memuat file yang ingin dipantau
const filesToWatch = [
  '../index',
  '../config/handler',
  '../config/settings', // Tambahkan file lainnya di sini
];

// Memulai pemantauan untuk setiap file
filesToWatch.forEach((file) => {
  require(file); // Memuat file
  nocache(file, (module) =>
    console.log(
      chalk.greenBright('[ AUTO-RELOAD ]') +
        ` ${time} ` +
        chalk.cyanBright(`"${module}" telah diperbarui!`)
    )
  );
});

module.exports = { nocache, uncache };