const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', (qr) => {
    console.log('QR RECEIVED, امسحه بالموبايل عشان تربط الواتساب:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('البوت شغال ! ✅');
});

client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong 🏓');
    }
});

client.initialize();
