/* let answer = confirm("Вам есть 18?")
console.log(answer)

if (answer == true){
    console.log('Есть 18')
}
else {
 console.log('Нет 18и')
};

for(let i = 0;i <= 10; i++){
    console.log(i);
}; */
$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src = "../icon/arrow_previous.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src = "../icon/arrow_next.svg"></button>',
        responsive: [
                {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
            }
        ]
      });
  });