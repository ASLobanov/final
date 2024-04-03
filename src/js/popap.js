const applicationPopap = document.querySelector('.button-menu-feedback')
const openApplicationPopap = document.querySelector('.feedback')
const closeButtonPopup = document.querySelector(
  '.feedback__button-close-active'
)

applicationPopap.addEventListener('click', () => {
  openApplicationPopap.classList.add('feedback-open')
})
closeButtonPopup.addEventListener('click', () => {
  openApplicationPopap.classList.remove('feedback-open')
})
