import "../style/index.css";
import { enableValidation, configValidate, showInputError } from "./validate";
import { setSubmitButtonState } from "./utils";
import { closePopup, openPopup } from "./modal";
import { createCard, addCard } from "./card";
import { profileInformation, cardGet, profileEditServer, cardAddServer, cardDeleteServer } from "./api";

const containerCard = document.querySelector('.elements__cards');
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
const popupImage = document.querySelector('.popup-images');
const imageClose = document.querySelector('.popup-images__button');
const placeAddButton = popupAdd.querySelector('.popup-add__form-button');
const formAdd = document.forms.formAdd;
const formEdit = document.forms.formEdit;
const firstName = formEdit.querySelector('.popup__form-item_firstname');
const professionName = formEdit.querySelector('.popup__form-item_job');

// Загрузка инфо профиля

profileInformation(nameProfile, jobProfile)
.then((res) => {
  nameProfile.textContent = res.name;
  jobProfile.textContent = res.about;
})
.catch((err) => {
  console.error(err);
})


// Отрисовка карточек

cardGet()
.then((res) => {
  res.reverse().forEach(function(card) {
    addCard(containerCard, createCard(card.link, card.name, card.likes, card._id))
  });
})
.catch((err) => {
  console.error(err);
})

// Удаление карточки



// Сброс события по умолчанию
  
formAdd.addEventListener('submit', function(evt) {
  evt.preventDefault();
  cardAddServer(name.value, link.value);
  addCard(containerCard, createCard(link.value, name.value)); 
  closePopup(popupAdd)
})

formEdit.addEventListener('submit', function(evt) {
  evt.preventDefault();
  profileEditServer(firstName.value, professionName.value);
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
  name.value = '';
  link.value = '';
  openPopup(popupAdd);
  setSubmitButtonState(false, placeAddButton);
});

enableValidation(configValidate);






