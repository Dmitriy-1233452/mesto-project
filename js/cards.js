const containerCard = document.querySelector('.elements__cards');
const popupImage = document.querySelector('.popup-images');
const imageClose = document.querySelector('.popup-images__button');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


initialCards.forEach(function (card) {
  addCard(containerCard, createCard(card.link, card.name))
});

function createCard(link, name) {

  const elementsTemplate = document.querySelector('.elements-template').content;
  const cardElement = elementsTemplate.querySelector('.elements__card').cloneNode(true);

  cardElement.querySelector('.elements__title').textContent = name;
  cardElement.querySelector('.elements__images').src = link;
  cardElement.querySelector('.elements__images').alt = name;
  cardElement.querySelector('.elements__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__button-like_active');
  });
  cardElement.querySelector('.elements__delete-icon').addEventListener('click', function () {
    const deleteElements = cardElement.closest('.elements__card');
    deleteElements.remove();
  });

  cardElement.querySelector('.elements__images').addEventListener('click', function () {
    imagesPopup.querySelector('.popup-images__image').src = link;
    imagesPopup.querySelector('.popup-images__title').textContent = name;
    imagesPopup.classList.add('popup-images_opened');
  });

  function imagePopupClose(popupImager) {
    popupImager.classList.remove('popup-images_opened');
  }
  imageClose.addEventListener('click', function () {
    imagePopupClose(popupImage);
  });

  return cardElement;
}


function addCard(container, card) {
  container.prepend(card);
}
