import "../style/index.css";
import { initialCards} from "./cards";
import { enableValidation, configValidate } from "./validate";
import { setSubmitButtonState } from "./utils";
import { closePopup, openPopup } from "./modal";
import { createCard, addCard } from "./card";

const profile = document.querySelector('.profile');
const profileButton = profile.querySelector('.profile__button-edit');
const buttonAdd = profile.querySelector('.profile__button-add');
const nameProfile = profile.querySelector('.profile__name');
const jobProfile = profile.querySelector('.profile__description');
const popupEdit = document.querySelector('.popup-edit');
const profileClose = popupEdit.querySelector('.popup__button-close');
const profileSave = popupEdit.querySelector('.popup-edit__form-button');
const popupAdd = document.querySelector('.popup-add');
const addClose = popupAdd.querySelector('.popup-add__button-close');
const link = document.querySelector('.popup__form-item_link');
const name = document.querySelector('.popup__form-item_title');
const containerCard = document.querySelector('.elements__cards');
const popupImage = document.querySelector('.popup-images');
const imageClose = document.querySelector('.popup-images__button');
const placeAddButton = popupAdd.querySelector('.popup-add__form-button');
const formAdd = document.forms.formAdd;
const formEdit = document.forms.formEdit;
const firstName = formEdit.querySelector('.popup__form-item_firstname');
const professionName = formEdit.querySelector('.popup__form-item_job');






// Сброс события по умолчанию

formAdd.addEventListener('submit', function(evt) {
  evt.preventDefault();
  addCard(containerCard, createCard(link.value, name.value)); 
  closePopup(popupAdd)
  
})

formEdit.addEventListener('submit', function(evt) {
  evt.preventDefault();
  nameProfile.textContent = firstName.value;
  jobProfile.textContent = professionName.value;
  closePopup(popupEdit);
})

// Закрытие модальных окон

addClose.addEventListener('click', function () {
  closePopup(popupAdd);
});

profileClose.addEventListener('click', function () {
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
  setSubmitButtonState(false, profileSave);
});

buttonAdd.addEventListener('click', function () {
openPopup(popupAdd);
 formAdd.reset();
 setSubmitButtonState(false, placeAddButton);
 
});

initialCards.forEach(function(card) {
  addCard(containerCard, createCard(card.link, card.name))
});

