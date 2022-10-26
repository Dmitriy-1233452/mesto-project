const configValidate = {
  inputError: ".popup__form-item_active",
  inputErrorMessage: ".popup__form-error",
  inputForm: ".form__input",
  documentForm: ".form",
  buttonSubmit: ".popup__form-button",
  buttonDisabled: "buttons_disabled"
};

//Валидация Форм

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(configValidate.inputError);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(configValidate.inputErrorMessage);
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(configValidate.inputError);
    errorElement.classList.remove(configValidate.inputErrorMessage);
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement) => {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity("");
    }

    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(configValidate.inputForm));
    const buttonElement = formElement.querySelector(configValidate.buttonSubmit);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(configValidate.documentForm));
    formList.forEach((formElement) => {
    setEventListeners(formElement);
      });
      
    }

  enableValidation();

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

 const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(configValidate.buttonDisabled);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(configValidate.buttonDisabled); 
    }
  };

export { enableValidation };