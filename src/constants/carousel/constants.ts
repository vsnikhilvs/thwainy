export const carouselConfig = {
  additionalTransfrom: 0,
  autoPlaySpeed: 3000,
  centerMode: false,
  arrows: true,
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  keyBoardControl: true,
  minimumTouchDrag: 80,
  pauseOnHover: true,
  renderArrowsWhenDisabled: false,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 640,
      },
      items: 1,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 639,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 480,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
  },
  rewind: false,
  rewindWithAnimation: false,
  rtl: false,
  shouldResetAutoplay: true,
  showDots: false,
  slidesToSlide: 1,
  swipeable: true,
};
