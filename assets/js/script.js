
// input menu
const incrementButton = document.querySelectorAll(".increment");
const decrementButton = document.querySelectorAll(".decrement");
const quantityInput = document.querySelectorAll(".quantity");

if(quantityInput){
  incrementButton.forEach((e,index)=>{
    e.addEventListener("click", () => {
      console.log(quantityInput[index]);
      quantityInput[index].value = parseInt(quantityInput[index].value) + 1;
    });
  })
  decrementButton.forEach((e,index)=>{
    e.addEventListener("click", () => {
      console.log(quantityInput[index]);
      quantityInput[index].value = parseInt(quantityInput[index].value) - 1;
    });
  })
}

// banner
$('.vm-banner__outer').slick({
  lazyLoad: 'ondemand',
  dots: true,
  infinite: false,
  speed: 1300,
  autoplay: true,
  autoplaySpeed: 5000,
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