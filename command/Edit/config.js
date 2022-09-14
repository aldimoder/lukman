const { modul } = require('../Edit/module');
const { chalk, fs, proces } = modul;

global.ownerNumber = ["6285697175057@s.whatsapp.net"]
global.namabotnya = 'ALDI-SADBOY'
global.namaownernya = 'AldiModer'
global.packname = '\n\n\n\n\n\n\n\n\n\n© YT ALDI MODER\n\n\n\n\n\n\n\n\n\n'
global.author = '\n\n\n\n\n\n\n\n\n\nALDI-SADBOY\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'CyberExe'
global.lolkey = 'Atakbotz'
global.dapkey = 'Kirbotz123'
global.kirkey = 'KirBotz'
global.email = 'aldimoder2@gmail.com'
global.group = 'https://chat.whatsapp.com/IPEeyM9eAggEeGsRwZb7Yi'
global.youtube = 'https://youtube.com/channel/UChFZKTnCKkzqkaCZQYsyDQg'
global.website = 'https://youtube.com/channel/UChFZKTnCKkzqkaCZQYsyDQg'
global.github = 'https://bit.ly/3FqVBj8'
global.noown = 'https://wa.me/6285697175057'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','�?']
global.api = 
{
    success: 'SUKSES DEK',
    admin: '```Fitur Khusus Admin Group!!!```',
    botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
    owner: '```Fitur Khusus Owner Bot!!!```',
    group: '```Fitur Digunakan Hanya Untuk Group!!!```',
    private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
    bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
    error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
    wait: 'Tunggu Sebentar YT ALDI MODER',
    ban: '_Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya_',
    verif: '_Maaf Kak Kakak Belum Jadi User CΨβΣR ΣXΣCUTΣD Silahkan Register Terlebih Dahulu Click Di Bawah_'
}

global.thumb = fs.readFileSync('./command/Image/thumb.jpg')
global.vidkir = { url: 'https://i.top4top.io/m_20346wtuk5.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
proces.on('uncaughtException', console.error);
