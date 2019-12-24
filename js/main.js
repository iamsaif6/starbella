$(document).ready(function(){
    
   $(".owl-carousel-bottom").owlCarousel({
       
       loop:true,
       items:4,
       autoplay:true,
       responsive:{
        0:{
            items:1
        },
           400:{
              items:2 
           },
        600:{
            items:3
        },
           
           768:{
              items:4 
           },
        1000:{
            items:5
        }
    }
       
       
   }); 
    
});