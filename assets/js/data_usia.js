// chartjs implementation
// script chartjs
var ctx = document.getElementById('myChart').getContext('2d');
var earning = document.getElementById('earning').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['1-4 Tahun', '5-12 Tahun', '13-16 Tahun', '17-22 Tahun', '23-30 Tahun', '31-40 Tahun', '41-50 Tahun', '51-60 Tahun', '61-70 Tahun', '71-80 Tahun', '81-85 Tahun', '86-95 Tahun'],
        datasets: [{
            label: 'Pie Chart Usia Penduduk',
            data: [500, 1000, 1200, 1700, 800, 1000, 700, 400, 200, 50, 20, 10, ],
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

// myEarning Chart
var myChart = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['1-4 Tahun', '5-12 Tahun', '13-16 Tahun', '17-22 Tahun', '23-30 Tahun', '31-40 Tahun', '41-50 Tahun', '51-60 Tahun', '61-70 Tahun', '71-80 Tahun', '81-85 Tahun', '86-95 Tahun'],
        datasets: [{
            label: 'Bar Chart Usia Penduduk',
            data: [500, 1000, 1200, 1700, 800, 1000, 700, 400, 200, 50, 20, 10, ],
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

// myEarning Chart
var myChart = new Chart(linechart, {
    type: 'radar',
    data: {
        labels: ['1-4 Tahun', '5-12 Tahun', '13-16 Tahun', '17-22 Tahun', '23-30 Tahun', '31-40 Tahun', '41-50 Tahun', '51-60 Tahun', '61-70 Tahun', '71-80 Tahun', '81-85 Tahun', '86-95 Tahun'],
        datasets: [{
            label: 'Perempuam',
            data: [500, 1000, 1200, 1700, 800, 1000, 700, 400, 200, 50, 20, 10, ],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
          }, {
            label: 'Laki-laki',
            data: [10, 20, 50, 200, 400, 700, 1000, 800, 1700, 1300, 1000, 500, ],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
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

