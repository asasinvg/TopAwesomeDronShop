const { Telegraf } = require('telegraf');

const bot = new Telegraf(
	'1639107933:AAFC7mWiwLwv_ufCAVHuGG01vRXZ57XqqK4'
);

bot.start((ctx) => {
	ctx.reply('Приевет');
});
bot.on('sticker', (ctx) => ctx.reply(':thumbsup:'));
bot.hears('hi', (ctx) => ctx.reply('Ты приходишь и просишь что-то у меня, но ты просишь без должного уважения.'));


module.exports = bot;