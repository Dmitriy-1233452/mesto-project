function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened'); 
}

function openPopup(popupElement) { 
    popupElement.classList.add('popup_opened');
  
    popupElement.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        closePopup(e.target.closest('.popup'));
      }
    })
}

export { closePopup, openPopup };