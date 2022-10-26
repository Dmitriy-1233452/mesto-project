function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened'); 

    popupElement.removeEventListener('click', overleyClose);
    document.removeEventListener('keydown', closeByEsc)
}

function openPopup(popupElement) { 
    popupElement.classList.add('popup_opened');
    popupElement.addEventListener('click', overleyClose)
    document.addEventListener('keydown', closeByEsc);
}


function overleyClose (e) {
  if (!e.target.closest('.popup__content')) {
    closePopup(e.target.closest('.popup'));
  }
}

function closeByEsc (e) {
  if (e.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  }
}

export { closePopup, openPopup };