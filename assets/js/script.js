
// input menu
const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");
const quantityInput = document.querySelector("#quantity");

if(quantityInput){
  incrementButton.addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });
  decrementButton.addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  });
}

// banner
$('.vm-banner__outer').slick({
  lazyLoad: 'ondemand',
  dots: true,
  infinite: false,
  speed: 1300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});