// core version + navigation, pagination modules:
import Swiper from 'swiper'
import 'swiper/swiper.scss'
import { Navigation, Pagination } from 'swiper/modules'
// Get width on browser window
const width = window.innerWidth
// Initialize Swiper
if (width < 766) {
  const swiper = new Swiper('.types__swiper', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true
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
