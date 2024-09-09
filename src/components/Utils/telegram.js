import axios from 'axios';

const TOKEN = "7478015749:AAElcDrUjhcJZUSYJzk2uJvIvzrWeC3Q4BQ";
const CHAT_ID = "-1002227364474";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

export const sendProductToTelegram = async ( clientData, product, count) => {

  const message = `
    <b>Client: </b>${clientData.first_name} ${clientData.phone_number}
    <b>Product:</b> ${product.title}
    <b>Narxi:</b> ${product.price}
    <b>Miqdori:</b> ${count} ta
    `;
    // <b>Описание:</b> ${product.description}
    
  try {
    const response = await axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'HTML',
      text: message
    });
    console.log('Ответ от Telegram API: ' + JSON.stringify(response.data));
  } catch (error) {
    alert('Ошибка отправки информации о продукте: ' + error.message); 
  }
};

