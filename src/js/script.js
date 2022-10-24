import "../style/index.css";
import { initialCards } from "./cards";
import { showInputError, hideInputError, checkInputValidity, setEventListeners, enableValidation } from "./validate";
import { setSubmitButtonState } from "./utils.js";
import { closePopup, openPopup } from "./modal";

const elementsTemplate = document.querySelector('.elements-template').content;
const profile = document.querySelector('.profile');
const profileButton = profile.querySelector('.profile__button-edit');
const addButton = profile.querySelector('.profile__button-add');
const nameProfile = profile.querySelector('.profile__name');
const jobProfile = profile.querySelector('.profile__description');
const popupEdit = document.querySelector('.popup-edit');
const editClose = popupEdit.querySelector('.popup__button-close');
const editSave = popupEdit.querySelector('.popup-edit__form-button');
const popupAdd = document.querySelector('.popup-add');
const addClose = popupAdd.querySelector('.popup-add__button-close');
const link = document.querySelector('.popup__form-item_link');
const name = document.querySelector('.popup__form-item_title');
const containerCard = document.querySelector('.elements__cards');
const popupImage = document.querySelector('.popup-images');
const imageClose = document.querySelector('.popup-images__button');
const imagesPopup = document.querySelector('.popup-images');
const imagesPopupName = imagesPopup.querySelector('.popup-images__title');
const imagesPopupLink = imagesPopup.querySelector('.popup-images__image');
const placeAddButton = popupAdd.querySelector('.popup-add__form-button');
const formAdd = document.forms.formAdd;
const placeName = formAdd.querySelector('.popup__form-item_title');
const placeLink = formAdd.querySelector('.popup__form-item_link');
const formEdit = document.forms.formEdit;
const firstName = formEdit.querySelector('.popup__form-item_firstname');
const professionName = formEdit.querySelector('.popup__form-item_job');


// Сброс события по умолчанию

formAdd.addEventListener('submit', function(evt) {
  evt.preventDefault();
  addCard(containerCard, createCard(link.value, name.value)); 
  closePopup(popupAdd)
  
  setSubmitButtonState(false, placeAddButton);
})

formEdit.addEventListener('submit', function(evt) {
  evt.preventDefault();
  nameProfile.textContent = firstName.value;
  jobProfile.textContent = professionName.value;
  closePopup(popupEdit);
  setSubmitButtonState(false, editSave);
})

// Закрытие модальных окон

addClose.addEventListener('click', function () {
  closePopup(popupAdd);
});

editClose.addEventListener('click', function () {
  closePopup(popupEdit);
});

imageClose.addEventListener('click', function () {
  closePopup(popupImage);
})

// Открытие модальных окон

profileButton.addEventListener('click', function () {
  firstName.value = nameProfile.textContent;
  professionName.value = jobProfile.textContent;
  openPopup(popupEdit);
  setSubmitButtonState(false, editSave);
});

addButton.addEventListener('click', function () {
openPopup(popupAdd);
 formAdd.reset();
 setSubmitButtonState(false, placeAddButton);
 
});

initialCards.forEach(function(card) {
  addCard(containerCard, createCard(card.link, card.name))
});

// Создание карточек

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

// Закрытие попапа клавишей Esc

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  }
})

//Активация кнопок

formAdd.addEventListener('input', function (evt) {
  const isValid = placeName.checkValidity(false) && placeLink.value.match(/(?:https?|file|ftp):\/\/([^\/\s]+)[^\s]*/ig, '$1');
  setSubmitButtonState(isValid, placeAddButton);
})

formEdit.addEventListener('input', function (evt) {
  const isValid = firstName.checkValidity(false) && professionName.checkValidity(false);
  setSubmitButtonState(isValid, editSave);
})
