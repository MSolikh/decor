import { Telegraf } from 'telegraf';
const TOKEN = '7230972282:AAEhIZSkgUvAZPa5CC7wHgkFkOcTqDiLbWg';
const bot = new Telegraf(TOKEN);

const web_link = 'https://decorhouse.netlify.app/';

bot.start(async (ctx) => {
    await ctx.reply("Assalomu aleykum ! Iltimos, telefon raqamingizni yuboring.", {
      reply_markup: {
        keyboard: [
          [{ text: "Telefon raqam", request_contact: true }]
        ],
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
});

bot.on('contact', (ctx) => {
    const clientData = {
      first_name: ctx.message.contact.first_name,
      phone_number: ctx.message.contact.phone_number,
      username: ctx.message.from.username || 'no_username',
    };


    const encodedFirstName = encodeURIComponent(clientData.first_name);
    const encodedPhoneNumber = encodeURIComponent(clientData.phone_number);
    const encodedUsername = encodeURIComponent(clientData.username);



    ctx.reply(`Raxmat, ${clientData.first_name}! MDF DECOR botiga xush kelibsiz.`, {
      reply_markup: {
        inline_keyboard: [[{ 
          text: "Kirish!", 
          web_app: { url: `${web_link}?first_name=${encodedFirstName}&phone_number=${encodedPhoneNumber}&username=${encodedUsername}`} 
        }]],
        remove_keyboard: true,
      },
    });
    console.log(clientData);
});

bot.launch();
