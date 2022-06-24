const cardsDefault = document.querySelector('.elements__cards');
const elementsTemplate = document.querySelector('.elements-template').content;
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

initialCards.forEach(function (element) {
  const usersElement = elementsTemplate.querySelector('.elements__card').cloneNode(true);

usersElement.querySelector('.elements__title').textContent = element.name;
usersElement.querySelector('.elements__images').src = element.link;
usersElement.querySelector('.elements__button-like').addEventListener('click', function (evt) {
  evt.target.classList.toggle('elements__button-like_active');
});
usersElement.querySelector('.elements__delete-icon').addEventListener('click', function () {
  const deleteElements = usersElement.closest('.elements__card');
  deleteElements.remove();
});

usersElement.querySelector('.elements__images').addEventListener('click', function () {
  imagesPopup.querySelector('.popup-images__image').src = element.link;
  imagesPopup.querySelector('.popup-images__title').textContent = element.name;
  imagesPopup.classList.add('popup-images_opened');
});

function imagePopupClose(popupImager) {
  popupImager.classList.remove('popup-images_opened');
}
imageClose.addEventListener('click', function () {
  imagePopupClose(popupImage);
});



cardsDefault.append(usersElement)
})



