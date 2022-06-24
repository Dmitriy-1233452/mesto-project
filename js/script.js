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
const formElement = popupEdit.querySelector('.popup-edit__form');
const popupAdd = document.querySelector('.popup-add');
const formAddElement = popupAdd.querySelector('.popup-add__form');
const addClose = popupAdd.querySelector('.popup-add__button-close');
const cardsUsers = document.querySelector('.elements__cards');
const addSubmit = popupAdd.querySelector('.popup-add__form-button');
const imagesPopup = document.querySelector('.popup-images');




// Добавление карточек

function createCards(linkValue, placeValue) {

  const elementsTemplate = document.querySelector('.elements-template').content;
  const usersElement = elementsTemplate.querySelector('.elements__card').cloneNode(true);
  usersElement.querySelector('.elements__images').src = linkValue;
  usersElement.querySelector('.elements__title').textContent = placeValue;
  usersElement.querySelector('.elements__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__button-like_active');
  });
  usersElement.querySelector('.elements__delete-icon').addEventListener('click', function () {
    const deleteElements = usersElement.closest('.elements__card');
    deleteElements.remove();
  });


  // Открытие popup картинки

  usersElement.querySelector('.elements__images').addEventListener('click', function () {
    imagesPopup.querySelector('.popup-images__image').src = linkValue;
    imagesPopup.querySelector('.popup-images__title').textContent = placeValue;
    imagesPopup.classList.add('popup-images_opened');
  });


  function imagePopupClose(popupImager) {
    popupImager.classList.remove('popup-images_opened');
  }
  imageClose.addEventListener('click', function () {
    imagePopupClose(popupImage);
  });

  cardsUsers.prepend(usersElement);
}

addSubmit.addEventListener('click', function () {
  const link = document.querySelector('.popup__form-item_link');
  const place = document.querySelector('.popup__form-item_title');

  createCards(link.value, place.value);

  link.value = '';
  place.value = '';
});

function formSubmitAdd(evt) {
  evt.preventDefault();
}
formAddElement.addEventListener('submit', formSubmitAdd);

// Сброс события по умолчанию


function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = inputName.value;
  jobProfile.textContent = inputJob.value;

}
formElement.addEventListener('submit', formSubmitHandler);

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
addSubmit.addEventListener('click', function () {
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
  openPopup(popupEdit);
});

addButton.addEventListener('click', function () {
  openPopup(popupAdd);
});
