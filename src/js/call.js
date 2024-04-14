const wrapper = document.querySelector('.wrapper')
const openButton = document.querySelector('.button-menu-feedback-call ')
const closeButton = document.querySelector('.call__button-close-active ')

openButton.addEventListener('click', () => {
  call.showModal()
  wrapper.classList.add('call__lock')
})

closeButton.addEventListener('click', () => {
  call.close()
  wrapper.classList.remove('call__lock')
})

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    wrapper.classList.remove('call__lock')
  }
})
