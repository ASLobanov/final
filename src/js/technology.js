import Swiper from 'swiper/swiper-bundle'
import 'swiper/modules/pagination.scss'
import 'swiper/swiper.scss'
// Get width on browser window
const width = window.innerWidth
// Initialize Swiper
if (width < 766) {
  var swiper = new Swiper('.swiper,.technology__swiper', {
    pagination: {
      el: '.swiper-pagination,.technology__swiper-pagination'
    }
  })
}

// // Handle onclick expand buttn
const technologyButtonExpand = document.querySelector(
  '.technology__button-expand'
)
const technologyWrapper = document.querySelector('.technology__swiper-wrapper')
const technologyTextBtn = document.querySelector(
  '.technology__button-expand > span'
)

technologyButtonExpand.addEventListener('click', () => {
  const Expand = technologyButtonExpand.classList.contains('technology-expand')

  if (Expand) {
    technologyButtonExpand.classList.remove('technology-expand')
    technologyWrapper.classList.remove('technology-expand')
    technologyTextBtn.textContent = 'Показать все'
  } else {
    technologyButtonExpand.classList.add('technology-expand')
    technologyWrapper.classList.add('technology-expand')
    technologyTextBtn.textContent = 'Скрыть'
  }
})
