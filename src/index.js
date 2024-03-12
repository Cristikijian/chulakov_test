import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    location: document.querySelector('.location__city'),
    changRegionModal: document.querySelector('.change-region'),
    changeRegionWrapper: document.querySelector('.overlay'),
    regionApproveButton: document.querySelector('.change-region__button.approve'),
    changeRegionButton: document.querySelector('.change-region__button.change'),
    chooseCity: document.querySelector('.choose-city'),
    cities: document.querySelector('.choose-city__cities'),
    phoneNumber: document.getElementById('tel').value,
    checkBox: document.getElementById('checkbox'),
    submitButton: document.querySelector('.get-promocode__button'),

  };

  elements.location.addEventListener('click', () => {
    elements.changRegionModal.classList.add('show');
    elements.changeRegionWrapper.classList.add('active');
  });

  elements.changeRegionButton.addEventListener('click', () => {
    elements.changeRegionButton.classList.remove('active');
    elements.cchangRegionModal.classList.remove('show');
    elements.chooseCity.classList.add('show');
  });

  elements.regionApproveButton.addEventListener('click', () => {
    elements.changRegionModal.classList.remove('show');
    elements.changeRegionWrapper.classList.remove('active');
  });

  elements.cities.addEventListener('click', (e) => {
    elements.location.textContent = e.target.innerHTML;
    elements.changRegionModal.querySelector('.change-region__city').textContent = e.target.innerHTML;
    elements.chooseCity.classList.remove('show');
    elements.changeRegionWrapper.classList.remove('active');
  });

  let errorType = '';
  const submitMessage = '';

  function validatePhoneNumber() {
    const checkBox = document.getElementById('checkbox');

    if (checkBox.checked) {
      if (!/^8\(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(elements.phoneNumber)) {
        alert('Пожалуйста, введите номер телефона в формате 8(950)567-67-78');
        errorType = 'wrongPhoneFormat';
        return false;
      }
    } else {
      return true;
    }
    if (!checkBox.checked) {
      errorType = 'mustBeAgree';
    }
  }

  elements.submitButton.addEventListener('click', () => {
    try {
      validatePhoneNumber();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  });

  switch (errorType) {
    case 'mustBeAgree':

      break;

    case 'wrongPhoneFormat':

      break;

    case 'phoneNumberDidUse':
  }
});
