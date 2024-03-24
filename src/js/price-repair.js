import Swiper from 'swiper/swiper-bundle'
import 'swiper/modules/pagination.scss'
import 'swiper/modules/grid.scss'
import 'swiper/swiper.scss'

// Get width on browser window
const widthPriseRepair = window.innerWidth
// Initialize Swiper
if (widthPriseRepair < 767.9999) {
  var priseRepair = new Swiper('.price-repair__swiper', {
    slidesPerView: 5,
    //oneWayMovement: true,
    //observer: true,
    //observeParents: true,
    //setWrapperSize: true,
    // fill: 'column',
    //fill: 'row',
    // rows: 6,
    //HTMLElement: 'price-repair__swiper-slide-one',

    grid: {
      fill: 'column',
      rows: 5
    },
    pagination: {
      el: '.swiper-pagination,.price-repair__swiper__pagination'
    }
  })
}
