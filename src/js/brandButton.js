const openTextBrandSection = document.querySelector(
  '.brand__block-third-button'
)
const openText = document.querySelector('.brand__block-third-text')

openTextBrandSection.addEventListener('click', () => {
  openText.classList.toggle('.read-more')
})
