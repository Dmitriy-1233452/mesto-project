const profile = document.querySelector('.profile');
const profileButton = profile.querySelector('.profile__button-edit');
const addButton = profile.querySelector('.profile__button-add');
const nameProfile = profile.querySelector('.profile__name');
const jobProfile = profile.querySelector('.profile__description');
const popupEdit = document.querySelector('.popup-edit');
const editClose = popupEdit.querySelector('.popup__button-close');
const editSave = popupEdit.querySelector('.popup-edit__form-button');
const inputName = popupEdit.querySelector('.popup__form-item_firstname');
const inputJob = popupEdit.querySelector('.popup__form-item_job');
const formProfileElement = popupEdit.querySelector('.popup-edit__form');
const popupAdd = document.querySelector('.popup-add');
const formAddElement = popupAdd.querySelector('.popup-add__form');
const addClose = popupAdd.querySelector('.popup-add__button-close');
const cardsUsers = document.querySelector('.elements__cards');
const buttonAddCard = popupAdd.querySelector('.popup-add__form-button');
const link = document.querySelector('.popup__form-item_link');
const name = document.querySelector('.popup__form-item_title');
const containerCard = document.querySelector('.elements__cards');
const popupImage = document.querySelector('.popup-images');
const imageClose = document.querySelector('.popup-images__button');
const imagesPopup = document.querySelector('.popup-images');
const elementsTemplate = document.querySelector('.elements-template').content;
const imagesPopupName = imagesPopup.querySelector('.popup-images__title');
const imagesPopupLink = imagesPopup.querySelector('.popup-images__image');

// Сброс события по умолчанию

function formSubmitAdd(evt) {
  evt.preventDefault();

    addCard(containerCard, createCard(link.value, name.value));

    closePopup(popupAdd)
    link.value = '';
    name.value = '';
}
formAddElement.addEventListener('submit', formSubmitAdd);

function submitProfileForm(evt) {
  evt.preventDefault();
  nameProfile.textContent = inputName.value;
  jobProfile.textContent = inputJob.value;

  closePopup(popupEdit);

}
formProfileElement.addEventListener('submit', submitProfileForm);

// Закрытие модальных окон
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

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
function openPopup(popupElement) { 
  popupElement.classList.add('popup_opened');
}

profileButton.addEventListener('click', function () {
  inputName.value = nameProfile.textContent;
  inputJob.value = jobProfile.textContent;
  openPopup(popupEdit);
});

addButton.addEventListener('click', function () {
  openPopup(popupAdd);
  link.value = '';
  name.value = '';
});

initialCards.forEach(function(card) {
  addCard(containerCard, createCard(card.link, card.name))
});

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
