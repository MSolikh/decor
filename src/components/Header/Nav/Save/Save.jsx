import React, { useEffect, useState } from 'react';
import CardInfo from '../../../Card/CardInfo/CardInfo.jsx';
import { hideCardInfo, showCardInfo } from '../../../Utils/Utils.js';
import Product from './../../../Card/Products/Producs.jsx';
import './Save.css';


export default function Save() {
  const [savedProducts, setSavedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

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


  return (
    <div className="save-container">
      <h2 className='save-title'>Saved Products</h2>
      {selectedProduct ? (
        <CardInfo
          product={selectedProduct}
          onBack={() => hideCardInfo(setSelectedProduct)}
          onSave={handleSaveProduct}
          isSaved={savedProducts.some(p => p.id === selectedProduct.id)}
        />
      ) : (
        <div className="save-products">
          {savedProducts.length > 0 ? (
            savedProducts.map(product => (
              <div key={product.id} onClick={() => showCardInfo(setSelectedProduct, product)}>
                <Product product={product} />
              </div>
            ))
          ) : (
            <p className='save__title-p'>No saved products</p>
          )}
        </div>
      )}
    </div>
  );
}