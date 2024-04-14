const wrapperBody = document.querySelector('.wrapper')
const openButtonPopup = document.querySelector('.button-menu-feedback')
const closeButtonPopup = document.querySelector(
  '.feedback__button-close-active'
)

openButtonPopup.addEventListener('click', () => {
  feedback.showModal()
  wrapperBody.classList.add('feedback__lock')
})

closeButtonPopup.addEventListener('click', () => {
  feedback.close()
  wrapperBody.classList.remove('feedback__lock')
})

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    wrapperBody.classList.remove('feedback__lock')
  }
})

const form = document.querySelector('.feedback__form')
const nameInput = form.querySelector('.feedback__input-name')
const emailInput = form.querySelector('.feedback__input-email')
const telInput = form.querySelector('.feedback__input-phone')
const namePattern = /^[А-Я][а-яё]*$/
const emailPattern = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w)$/
const telPattern = /7 ([0-9]{3}) [0-9]{3}-[0-9]{2}-[0-9]{2}/

form.addEventListener('submit', (evt) => {
  // Отменяем действие по умолчанию
  evt.preventDefault()

  // Получаем значения полей формы
  var name = nameInput.value
  var email = emailInput.value
  var tel = telInput.value

  // Проверяем, что поля заполнены
  if (!name || !email || !tel) {
    alert('Пожалуйста, заполните все поля')
    return
  }
  if (!namePattern.test(nameInput.value)) {
    alert(
      'Введённое имя содержит только буквы кирилицы и начинается с заглавной '
    )
    return
  }
  if (!emailPattern.test(emailInput.value)) {
    alert('«username@domain.com» почта должна иметь следюущий формат')
    return
  }
  if (!telPattern.test(telInput.value)) {
    alert('формат телефона должен быть таким 7 (___) ___-__-__')
    return
  }
})
