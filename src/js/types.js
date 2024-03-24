// core version + navigation, pagination modules:
import Swiper from 'swiper/swiper-bundle'
import 'swiper/modules/pagination.scss'
import 'swiper/swiper.scss'

// Get width on browser window
const widthTypes = window.innerWidth
// Initialize Swiper
if (widthTypes < 767.9999) {
  var swiperTypes = new Swiper('.swiper,.types__swiper', {
    slidesPerView: 11,
    oneWayMovement: true,
    observer: true,
    observeParents: true,
    setWrapperSize: true,
    pagination: {
      el: '.swiper-pagination,.types__swiper-pagination'
    }
  })
}

// Handle onclick expand button
export const typesExpandButton = document.querySelector('.types__button-expand')
export const typesWrapper = document.querySelector('.types__wrapper')
export const typesTextBtn = document.querySelector(
  '.types__button-expand > span'
)

typesExpandButton.addEventListener('click', () => {
  const typesExpand = typesExpandButton.classList.contains('types-expand')

  if (typesExpand) {
    typesExpandButton.classList.remove('types-expand')
    typesWrapper.classList.remove('types-expand')
    typesTextBtn.textContent = 'Показать все'
  } else {
    typesExpandButton.classList.add('types-expand') /
      typesWrapper.classList.add('types-expand')
    typesTextBtn.textContent = 'Скрыть'
  }
})
