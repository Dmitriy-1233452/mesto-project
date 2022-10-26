import { closePopup, openPopup } from "./modal";

const elementsTemplate = document.querySelector('.elements-template').content;
const popupImage = document.querySelector('.popup-images');
const imagesPopup = document.querySelector('.popup-images');
const imagesPopupName = imagesPopup.querySelector('.popup-images__title');
const imagesPopupLink = imagesPopup.querySelector('.popup-images__image');



function createCard (link, name) {

    const cardElement = elementsTemplate.querySelector('.elements__card').cloneNode(true);
    const elementsName = cardElement.querySelector('.elements__title');
    const elementsLink = cardElement.querySelector('.elements__images');
  
    elementsName.textContent = name;
    elementsLink.src = link;
    elementsLink.alt = name;
    cardElement.querySelector('.elements__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__button-like_active');
    });
    cardElement.querySelector('.elements__delete-icon').addEventListener('click', function () {
      const deleteElements = cardElement.closest('.elements__card');
      deleteElements.remove();
    });
  
    cardElement.querySelector('.elements__images').addEventListener('click', function () {
      imagesPopupName.textContent = name;
      imagesPopupLink.src = link;
      imagesPopupLink.alt = name;
      openPopup(popupImage);
    });
  
  return cardElement;
  }
  
  function addCard (container, card) {
    container.prepend(card);
  }

  export { createCard, addCard };