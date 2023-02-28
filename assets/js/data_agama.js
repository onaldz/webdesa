// chartjs implementation
// script chartjs
var ctx = document.getElementById('myChart').getContext('2d');
var earning = document.getElementById('earning').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Pria', 'Wanita', 'Lain-lain'],
        datasets: [{
            label: 'Traffic Source',
            data: [1200, 1900, 3000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
                
            ],
        }]
    },
    options: {
        responsive: true,
    }
});

// myEarning Chart
var myChart = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'Juni', 'Juli', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Penduduk',
            data: [1200, 1900, 300, 500, 2000, 3000, 1900, 3000, 5000, 2000, 3000, 3220, ],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    },
    options: {
        responsive: true,
    }
});

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

