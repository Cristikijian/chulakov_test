import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    location: document.querySelector('.location__city'),
    change_region_modal: document.querySelector('.change-region'),
    change_region_wrapper: document.querySelector('.overlay'),
    region_approve_button: document.querySelector('.change-region__button.approve'),
    change_region_button: document.querySelector('.change-region__button.change'),
    choose_city: document.querySelector('.choose-city'),
    cities: document.querySelector('.choose-city__cities'),
  };

  elements.location.addEventListener('click', () => {
    elements.change_region_modal.classList.add('show');
    elements.change_region_wrapper.classList.add('active');
  });

  elements.change_region_button.addEventListener('click', () => {
    elements.change_region_button.classList.remove('active');
    elements.change_region_modal.classList.remove('show');
    elements.choose_city.classList.add('show');
  });

  elements.region_approve_button.addEventListener('click', () => {
    elements.change_region_modal.classList.remove('show');
    elements.change_region_wrapper.classList.remove('active');
  });

  elements.cities.addEventListener('click', (e) => {
    elements.location.textContent = e.target.innerHTML;
    elements.change_region_modal.querySelector('.change-region__city').textContent = e.target.innerHTML;
    elements.choose_city.classList.remove('show');
    elements.change_region_wrapper.classList.remove('active');
  });
});
