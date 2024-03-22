// core version + navigation, pagination modules:
import Swiper from 'swiper'
import 'swiper/modules/pagination.scss'
import 'swiper/swiper.scss'
//import { Navigation, Pagination } from 'swiper/modules'
// Get width on browser window
const width = window.innerWidth
// Initialize Swiper
if (width < 766) {
  var swiper = new Swiper('.swiper,.types__swiper', {
    slidesPerView: 11,
    oneWayMovement: true,
    pagination: {
      el: '.swiper-pagination,.types__swiper-pagination'
    }
  })
}

// Handle onclick expand buttn
export const expandButton = document.querySelector('.expand-button')
export const swiperWrapper = document.querySelector('.swiper-wrapper')
export const btn = document.querySelector('.expand-button > span')

expandButton.addEventListener('click', () => {
  const isExpand = expandButton.classList.contains('expand')

  if (isExpand) {
    expandButton.classList.remove('expand')
    swiperWrapper.classList.remove('expand')
    btn.textContent = 'Показать все'
  } else {
    expandButton.classList.add('expand')
    swiperWrapper.classList.add('expand')
    btn.textContent = 'Скрыть'
  }
})
