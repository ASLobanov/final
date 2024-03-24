import Swiper from 'swiper/swiper-bundle'
import 'swiper/modules/pagination.scss'
import 'swiper/modules/grid.scss'
// Get width on browser window
const widthPriseRepair = window.innerWidth
// Initialize Swiper
if (widthPriseRepair < 767.9999) {
  var PriseRepair = new Swiper('.price-repair__swiper', {
    // slidesPerView: 11,
    //oneWayMovement: true,
    // observer: true,
    // observeParents: true,
    // setWrapperSize: true,
    pagination: {
      el: '.swiper-pagination,.price-repair__swiper__pagination'
    }
  })
}
