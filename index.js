const Discord = require('discord.js');
const bot = new Discord.Client();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

bot.on('ready', function () {
    console.log("Je suis connecté !")
    client.user.setActivity('Pokemon GO', {type: 'WATCHING'});
});

bot.login(process.env.DISCORD_TOKEN);

bot.on('message', message => {
    console.log(message.content);
    if (message.content === 'ping') {
        message.reply('pong !');
        console.log("Pong?");
    }
});