const applicationPopap = document.querySelector('.brand__button-application')
const openApplicationPopap = document.querySelector('.feedback')

applicationPopap.addEventListener('click', () => {
  applicationPopap.classList.toggle('open')
  openApplicationPopap.classList.toggle('feedback-open')
})
