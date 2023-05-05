// Карусель
const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false
});

document.querySelector('.prev').onclick = function () {
  slider.goTo('prev');
};
document.querySelector('.next').onclick = function () {
  slider.goTo('next');
};

// Переключатели
$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__content').removeClass('catalog__content-active').eq($(this).index()).addClass('catalog__content-active');
});


// Подробнее
function toogleSlide(item) {
  $(item).each(function(i) {
    $(this).on('click', function(e){
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content-active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list-active')
    })
  }); 
};
toogleSlide('.catalog-item__link');
toogleSlide('.catalog-item__list_link');

// Модальные окна
$('[data-modal = consultation]').on('click', function() {
  $('.overlay, #consulting').fadeIn('slow');
})
$('.modal__close').on('click', function(){
  $('.overlay, #consulting, #thanks, #order').fadeOut('slow')
})
$('.button_buy').each(function(i){
  $(this).on('click', function() {
    $('#order .modal__subtitle').text($('.catalog-item__subtitle').eq(i).text())
    $('.overlay, #order').fadeIn('slow')
  })
})
$('.feed_form').validate();
$('#consulting form').validate();
$('#order form').validate();
$('#consulting_form form').validate();