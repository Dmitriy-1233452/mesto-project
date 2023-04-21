import { closePopup, openPopup } from "./modal";
import { cardDeleteServer, cardGet } from "./api";

const elementsTemplate = document.querySelector('.elements-template').content;
const imagesPopup = document.querySelector('.popup-images');
const imagesPopupName = imagesPopup.querySelector('.popup-images__title');
const imagesPopupLink = imagesPopup.querySelector('.popup-images__image');
const btnDeletCard = elementsTemplate.querySelector('.elements__delete-icon');

function createCard (link, name, likes, idCard) {

    const cardElement = elementsTemplate.querySelector('.elements__card').cloneNode(true);
    const elementsName = cardElement.querySelector('.elements__title');
    const elementsLink = cardElement.querySelector('.elements__images');
    const elementsLikes = cardElement.querySelector('.elements__like-counter');

    elementsName.textContent = name;
    elementsLink.src = link;
    elementsLink.alt = name;
    
    cardElement.querySelector('.elements__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__button-like_active');
    });

    cardElement.querySelector('.elements__images').addEventListener('click', function () {
      imagesPopupName.textContent = name;
      imagesPopupLink.src = link;
      imagesPopupLink.alt = name;
      openPopup(imagesPopup);
    });
  
  return cardElement;

  }

  function addCard(container, card) {
    container.prepend(card);
  }
  
  export { createCard, addCard };