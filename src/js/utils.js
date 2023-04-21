function setSubmitButtonState(isFormValid, validButton) {
    if (isFormValid) {
      validButton.removeAttribute('disabled');
      validButton.classList.remove('buttons_disabled');
    } else {
      validButton.setAttribute('disabled', true);
      validButton.classList.add('buttons_disabled'); 
    }
  }
  
  export { setSubmitButtonState };