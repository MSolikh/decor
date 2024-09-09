import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { apklat_decor, nalich_decor, panel_decor, qosh_decor } from '../../db/db.js';
import { hideCardInfo } from '../Utils/Utils.js';
import './Card.css';
import CardInfo from './CardInfo/CardInfo';
import Product from './Products/Producs.jsx';

const nalichDecor = nalich_decor();
const apklatDecor = apklat_decor();
const panelDecor = panel_decor();
const qoshDecor = qosh_decor();

export default function Card() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [savedProducts, setSavedProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProducts, setModalProducts] = useState([]);
  const [modalTitle, setModalTitle] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedProducts')) || [];
    setSavedProducts(saved);
  }, []);

  const handleSaveProduct = (product) => {
    const isSaved = savedProducts.some(p => p.id === product.id);
    const updatedSavedProducts = isSaved 
      ? savedProducts.filter(p => p.id !== product.id) 
      : [...savedProducts, product];

    setSavedProducts(updatedSavedProducts);
    localStorage.setItem('savedProducts', JSON.stringify(updatedSavedProducts));
  };

  const handleOpenModal = (products, title) => {
    setModalProducts(products);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    handleCloseModal();
    setTimeout(() => {
      document.querySelector('.cardInfo__wrapper').classList.add('show');
      document.querySelector('.cardInfo').classList.add('show');
    }, 10);
  };

  return (
    <div className="container card">
      {selectedProduct ? (
        <CardInfo
          product={selectedProduct}
          onBack={() => hideCardInfo(setSelectedProduct)}
          onSave={handleSaveProduct}
          isSaved={savedProducts.some(p => p.id === selectedProduct.id)}
        />
      ) : (
        <>
          <div className="products">
            <div className="products__title">
              <h2>Nalichka</h2>
              <button className='btn__products' onClick={() => handleOpenModal(nalichDecor, 'Decor')}>
                Yana
                <FontAwesomeIcon icon={faRightLong} />
              </button>
            </div>
            <div className="cards__container">
              {nalichDecor.map(product => (
                <div key={product.id} onClick={() => handleCardClick(product)}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
          <div className="products">
            <div className="products__title">
              <h2>Apklat</h2>
              <button className='btn__products' onClick={() => handleOpenModal(apklatDecor, 'Profil')}>
                Yana
                <FontAwesomeIcon icon={faRightLong} />
              </button>
            </div>
            <div className="cards__container">
              {apklatDecor.map(product => (
                <div key={product.id} onClick={() => handleCardClick(product)}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
          <div className="products">
            <div className="products__title">
              <h2>Qosh</h2>
              <button className='btn__products' onClick={() => handleOpenModal(qoshDecor, 'Products')}>
                Yana
                <FontAwesomeIcon icon={faRightLong} />
              </button>
            </div>
            <div className="cards__container">
              {qoshDecor.map(product => (
                <div key={product.id} onClick={() => handleCardClick(product)}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
          <div className="products">
            <div className="products__title">
              <h2>Panel</h2>
              <button className='btn__products' onClick={() => handleOpenModal(panelDecor, 'Products')}>
                Yana
                <FontAwesomeIcon icon={faRightLong} />
              </button>
            </div>
            <div className="cards__container">
              {panelDecor.map(product => (
                <div key={product.id} onClick={() => handleCardClick(product)}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {isModalOpen && (
        <div className={`modal ${isModalOpen ? 'show' : ''}`}>
          <div className="modal__content">
            <div className="modal__box">
              <div className="modal__close" onClick={handleCloseModal}>
              <FontAwesomeIcon className='backIcon' icon={faLeftLong} />
              </div>
              <h2>{modalTitle}</h2>
            </div>
            <div className="cards__container modal__cards__container">
              {modalProducts.map(products => (
                <div key={products.id} onClick={() => handleCardClick(products)}>
                  <Product product={products} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
