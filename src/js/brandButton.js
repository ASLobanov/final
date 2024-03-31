const openTextBrandSection = document.querySelector(
  '.brand__block-third-button'
)
const openText = document.querySelector('.brand__block-third-text')
const textBtn = document.querySelector('.brand__block-third-button > span')

openTextBrandSection.addEventListener('click', () => {
  openText.classList.toggle('text-read-more')
  openTextBrandSection.classList.toggle('more')
  textBtn.classList.toggle('close')
  textBtn.textContent =
    textBtn.textContent === 'Читать далее' ? 'Скрыть' : 'Читать далее'
})
