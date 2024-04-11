const wrapper = document.querySelector('.wrapper')
const openButton = document.querySelector('.button-menu-feedback-call ')
const closeButton = document.querySelector('.call__button-close-active ')
const closeMenuCall = document.querySelector('.menu')
const closeHeaderMenuCall = document.querySelector('.header__nav,.open-menu')

openButton.addEventListener('click', () => {
  call.showModal()
  wrapper.classList.add('call__lock')
  closeMenuCall.classList.remove('open-menu')
  closeHeaderMenuCall.classList.add('opacity-header')
})

closeButton.addEventListener('click', () => {
  call.close()
  wrapper.classList.remove('call__lock')
  closeHeaderMenuCall.classList.remove('opacity-header')
  closeMenuCall.classList.add('open-menu')
})

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    wrapper.classList.remove('call__lock')
  }
})
