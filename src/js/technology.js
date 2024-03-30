// core version + navigation, pagination modules:
import Swiper from 'swiper/swiper-bundle'
import 'swiper/modules/pagination.scss'
import 'swiper/swiper.scss'
// Get width on browser window
const widthTechnology = window.innerWidth
// Initialize Swiper
if (widthTechnology < 767.999) {
  var swiperTechnology = new Swiper('.swiper,.technology__swiper', {
    pagination: {
      el: '.swiper-pagination,.technology__swiper-pagination'
    }
  })
}

// // Handle onclick expand buttn
const technologyButtonExpand = document.querySelector(
  '.technology__button-open'
)
const technologyWrapper = document.querySelector('.technology__swiper-wrapper')
const technologyTextBtn = document.querySelector(
  '.technology__button-open > span'
)

technologyButtonExpand.addEventListener('click', () => {
  const technologyExpand = technologyButtonExpand.classList.contains('expand')

  if (technologyExpand) {
    technologyButtonExpand.classList.remove('expand')
    technologyWrapper.classList.remove('expand')
    technologyTextBtn.textContent = 'Показать все'
  } else {
    technologyButtonExpand.classList.add('expand')
    technologyWrapper.classList.add('expand')
    technologyTextBtn.textContent = 'Скрыть'
  }
})
