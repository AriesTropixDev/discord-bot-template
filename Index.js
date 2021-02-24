const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('ODE0MTMzMjM4NDYwMzE3NzI3.YDZaqQ.E2LlNST4F8PxvOuMl0QOt2dlufk');

bot.on('message', message => {
if (message.content === 'ping') {
        message.channel.send("Pong!");
    }
if (message.content === 'ding') {
        message.channel.send("Dong!");
    }
});
