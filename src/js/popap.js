const applicationPopap = document.querySelector('.button-menu-feedback')
const openApplicationPopap = document.querySelector('.feedback')
const closeButtonPopup = document.querySelector(
  '.feedback__button-close-active'
)
const opasityMain = document.querySelector('.main')
const opasityFooter = document.querySelector('.footer')
const wrapperBody = document.querySelector('.wrapper')

applicationPopap.addEventListener('click', () => {
  opasityMain.classList.add('feedback-open')
  openApplicationPopap.classList.add('feedback-open')
  opasityFooter.classList.add('feedback-open')
  wrapperBody.classList.add('feedback-open')
})

closeButtonPopup.addEventListener('click', () => {
  openApplicationPopap.classList.remove('feedback-open')
  opasityMain.classList.remove('feedback-open')
  opasityFooter.classList.remove('feedback-open')
  wrapperBody.classList.remove('feedback-open')
})
