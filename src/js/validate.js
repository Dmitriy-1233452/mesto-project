const configValidate = {
  inputError: ".popup__form-item_active",
  inputErrorMessage: ".popup__form-error",
  inputForm: ".form__input",
  documentForm: ".form",
  buttonSubmit: ".popup__form-button",
  buttonDisabled: "buttons_disabled",
};

//Валидация Форм


const showInputError = (formElement, inputElement, errorMessage, configValidate) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(configValidate.inputError);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(configValidate.inputErrorMessage);
  };
  
const hideInputError = (formElement, inputElement, configValidate) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    
    inputElement.classList.remove(configValidate.inputError);
    errorElement.textContent = '';
    errorElement.classList.remove(configValidate.inputErrorMessage);
    
  };
  
  const checkInputValidity = (formElement, inputElement, configValidate) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, configValidate);
    } else {
      hideInputError(formElement, inputElement, configValidate);
    }

    if (inputElement.validity.patternMismatch) {
      showInputError(formElement, inputElement, inputElement.validationMessage, configValidate);
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity('');
    }
  };

  
  const setEventListeners = (formElement, configValidate) => {
    const inputList = Array.from(formElement.querySelectorAll(configValidate.inputForm));
    const buttonElement = formElement.querySelector(configValidate.buttonSubmit);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, configValidate);
        toggleButtonState(inputList, buttonElement, configValidate);
      });
    });
  };
  
  const enableValidation = (configValidate) => {
    const formList = Array.from(document.querySelectorAll(configValidate.documentForm));
    formList.forEach((formElement) => {
    setEventListeners(formElement, configValidate);
      });
      
    }

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

 const toggleButtonState = (inputList, buttonElement, configValidate) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(configValidate.buttonDisabled);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(configValidate.buttonDisabled); 
    }
  };

export { enableValidation, configValidate };