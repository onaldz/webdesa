// fungtion navbar highlight scroll mouse
$(document).ready(function() {
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    
    // toggle menu/navbar script
     $('.menu-btn').click(function() {
         $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
     });

     // owl carousel script
     $('.carousel').owlCarousel({
         margin: 10,
         loop: true,
         autoplayTimeOut: 2000,
         autoplayHoverPause: true,
         responsive: {
             0:{
                 items: 1,
                 nav: false
             },
             600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
         }
     });
});

const slides=document.querySelector(".slider").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const indicator=document.querySelector(".indicator")
let index=0;

    prev.addEventListener("click",function(){
        prevSlide()
        updateCircleIndicator()
    
    })

    next.addEventListener("click",function(){
        nextSlide()
        updateCircleIndicator()
    
    })

    //create circle indicators
    // function circleIndicator(){
    //     for(let i=0; i< slides.length; i++){
    //         const div=document.createElement("div");
    //               div.innerHTML=i+1;
    //             div.setAttribute("onclick","indicateSlide(this)")
    //             div.id=i;
    //             if(i==0){
    //                 div.className="active";
    //             }
    //             indicator.appendChild(div);

    //     }
    // }
    // circleIndicator();

    // function indicateSlide(element){
    //     index=element.id;
    //     changeSlide();
    //     updateCircleIndicator();
    // }

    // function updateCircleIndicator(){
    //     for(let i=0; i<indicator.children.length; i++){
    //         indicator.children[i].classList.remove('active');
    //     }
    //     indicator.children[index].classList.add("active");
    // }

    function prevSlide(){
        if(index==0){
            index=slides.length-1;
        }
        else{
            index--;
        }
        changeSlide();
    }
    
    function nextSlide(){
        if(index==slides.length-1){
            index=0;
        }
        else{
            index++;
        }
        changeSlide();
    }

    function changeSlide(){
            for(let i=0; i<slides.length; i++){
                slides[i].classList.remove("active");
            }
        slides[index].classList.add("active");
    }

    //swiper js
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });