$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
var windowObjectReference;

function openRequestedPopup() {
  windowObjectReference = window.open(
    "https://surprise.ly/v/?CyiiEJRZjSU:0:0:0:100",
    "DescriptiveWindowName",
    "left=100,top=100,width=750, height=485"
  );
}
var windowObject;

function openPopup() {
  windowObject = window.open(
    "https://www.rottentomatoes.com/m/spider_man_no_way_home",
    "DescriptiveWindowName",
    "left=100,top=100,width=750, height=485"
  );
}