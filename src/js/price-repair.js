import Swiper from 'swiper/swiper-bundle'
import 'swiper/modules/pagination.scss'
import 'swiper/swiper.scss'

// Get width on browser window
const widthPriseRepair = window.innerWidth
// Initialize Swiper
if (widthPriseRepair < 767.9999) {
  var priseRepair = new Swiper('.price-repair__swiper', {
    pagination: {
      el: '.swiper-pagination .price-repair__swiper__pagination'
    }
  })
}
