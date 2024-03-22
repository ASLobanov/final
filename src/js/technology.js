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

// Handle onclick expand buttn
const expandButton = document.querySelector('.expand-button')
const swiperWrapper = document.querySelector('.swiper-wrapper')
const btn = document.querySelector('.expand-button > span')

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
