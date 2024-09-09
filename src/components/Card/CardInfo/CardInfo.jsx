import { faChevronLeft, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { sendProductToTelegram } from '../../Utils/telegram';
import './CardInfo.css';

export default function CardInfo({ product, onBack, onSave, isSaved }) {  
  const [count, setCount] = useState(0);

  const handleSendToTelegram = () => {
    const clientData = JSON.parse(localStorage.getItem('clientData'));
    
    if (clientData) {
      try {
        sendProductToTelegram(clientData, product, count);
        alert("Arizangiz yuborildi!");
      } catch (error) {
        alert('Ariza qoldirishda xatolik: ' + error.message);
      }
    } else {
      alert('Client haqidegi ma`lumotlarni to`ldiring.');
    }
  };

  // Обработчик изменения инпута
  const handleInputChange = (e) => {
    const value = e.target.value;
 
    if (value === '') {
      setCount(0);
    } else {
      const number = parseInt(value, 10); 
      if (!isNaN(number)) {
        setCount(number);
      }
    }
  };
    
  return (
    <div className="cardInfo__wrapper">
      <div className="cardInfo">
        <div className="cardInfo__btns">
          <button className="backButton" onClick={onBack}>
            <FontAwesomeIcon className='backIcon' icon={faChevronLeft} />
          </button>
          <button className='saveButton' onClick={() => onSave(product)}>
            <FontAwesomeIcon
              className='saveIcon'
              icon={faHeart}
              style={{ color: isSaved ? 'red' : 'black' }}
            />
          </button>
        </div>
        <div className="cardInfo__img">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="cardInfo__text">
          <span className="cardInfo__price">{product.price}</span>
          <h2>{product.title}</h2>
        </div>
        <div className="cardInfo__description">
          <h2>Description</h2>    
          <p>{product.description}</p>
        </div>
        <div className="cardInfo__btn">
          <div className="cardInfo_inp">
            <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
            <input
              type="number"
              value={count === 0 ? '' : count} 
              onChange={handleInputChange}
            />
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <button className='cardInfo_send' onClick={handleSendToTelegram}>Ariza Qoldirish</button>
        </div>
      </div>
    </div>
  );
}
