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
const imagesPopup = document.querySelector('.popup-images');






buttonAddCard.addEventListener('click', function () {
  const link = document.querySelector('.popup__form-item_link');
  const name = document.querySelector('.popup__form-item_title');

  addCard(containerCard, createCard(link.value, name.value));
  link.value = '';
  name.value = '';
});


// Сброс события по умолчанию


function formSubmitAdd(evt) {
  evt.preventDefault();
}
formAddElement.addEventListener('submit', formSubmitAdd);

function submitProfileForm(evt) {
  evt.preventDefault();
  nameProfile.textContent = inputName.value;
  jobProfile.textContent = inputJob.value;

}
formProfileElement.addEventListener('submit', submitProfileForm);

// Удаление карточек

const deleteButton = document.querySelectorAll('.elements__button-delete');
function handleClick(e) {
  const currentButton = e.currentTarget;
  currentButton.closest('.elements__card').remove();
}
deleteButton.forEach(button => {
  button.addEventListener('click', handleClick)
});



// Закрытие модальных окон

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

addClose.addEventListener('click', function () {
  closePopup(popupAdd);
});
buttonAddCard.addEventListener('click', function () {
  closePopup(popupAdd)
});
editClose.addEventListener('click', function () {
  closePopup(popupEdit);
});
editSave.addEventListener('click', function () {
  closePopup(popupEdit);
});


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
});
