const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('TOKEN');

bot.on('message', message => {
if (message.content === 'ping') {
        message.channel.send("Pong!");
    }
if (message.content === 'ding') {
        message.channel.send("Dong!");
    }
});
