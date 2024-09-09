// Utils.js
export const showCardInfo = (setSelectedProduct, product) => {
  setSelectedProduct(product);
  setTimeout(() => {
    document.querySelector('.cardInfo__wrapper').classList.add('show');
    document.querySelector('.cardInfo').classList.add('show');
  }, 10);
};

export const hideCardInfo = (setSelectedProduct) => {
  document.querySelector('.cardInfo__wrapper').classList.remove('show');
  document.querySelector('.cardInfo').classList.remove('show');
  setTimeout(() => {
    setSelectedProduct(null);
  }, 300);
};
