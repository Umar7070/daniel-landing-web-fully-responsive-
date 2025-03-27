const hamberguer = document.querySelector(".header__hamburger")
const navmenu = document.querySelector(".header__navmenu")
// console.log(navmenu);
hamberguer.addEventListener("click", () => {
  hamberguer.classList.toggle("active");
  navmenu.classList.toggle("active");
})


document.querySelectorAll(".header__navlink").forEach((n) => n.addEventListener("click", () => {
  hamberguer.classList.remove("active");
  navmenu.classList.remove("active");
}))


// navbar color changes 


$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".logo").css("color", "black");
      $(".header__navlink").css("color", "black");
      $(".header__navbar").css("background-color", "lightgray");
    } else {
      $(".logo").css("color", "");
      $(".header__navlink").css("color", "");
      $(".header__navbar").css("background-color", "black");
    }
  });
});



// navbar color changes 


$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".logo").css("color", "black");
      $(".header__navlink").css("color", "black");
      $(".header__navbar").css("background-color", "lightgray");
    } else {
      $(".logo").css("color", "");
      $(".header__navlink").css("color", "");
      $(".header__navbar").css("background-color", "transparent");
    }
  });
});

// filter images 


document.addEventListener("DOMContentLoaded", function () {
  let filterMenu = document.querySelectorAll(".listitemBox");
  let items = document.querySelectorAll(".itemBox");

  filterMenu.forEach(menu => {
      menu.addEventListener("click", function () {
          filterMenu.forEach(item => item.classList.remove("active"));
          this.classList.add("active");

          let filterValue = this.getAttribute("data-filter");

          items.forEach(item => {
              let itemValue = item.getAttribute("data-item");

              if (filterValue === "all" || itemValue === filterValue) {
                  item.style.display = "block";
              } else {
                  item.style.display = "none";
              }
          });
      });
  });
});



// testi monial 
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function changeTestimonial(index) {
    testimonials[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex = index;
    testimonials[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

function nextTestimonial() {
    let nextIndex = (currentIndex + 1) % testimonials.length;
    changeTestimonial(nextIndex);
}

function prevTestimonial() {
    let prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    changeTestimonial(prevIndex);
}

prevBtn.addEventListener('click', prevTestimonial);
nextBtn.addEventListener('click', nextTestimonial);

setInterval(nextTestimonial, 3000);
// counting number 
document.addEventListener("DOMContentLoaded", function () {
  const animateCounter = (id, target) => {
      let count = 0;
      let speed = 50;
      let interval = setInterval(() => {
          if (count >= target) {
              clearInterval(interval);
          } else {
              count += Math.ceil(target / speed);
              document.getElementById(id).innerText = count;
          }
      }, 50);
  };

  animateCounter("customers-count", 850);
  animateCounter("projects-count", 230);
  animateCounter("code-lines-count", 9450);
  animateCounter("downloads-count", 780);
});

// blog slider 


// const slider = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slide');
// const dots = document.querySelectorAll('.dot');
// let index = 0;

// function updateSlider() {
//     slider.style.transform = `translateX(-${index * 100}%)`;
//     dots.forEach((dot, i) => {
//         dot.classList.remove('active');
//         if (i === index) {
//             dot.classList.add('active');
//         }
//     });
// }

// function nextSlide() {
//     index = (index + 1) % slides.length;
//     updateSlider();
// }

// function prevSlide() {
//     index = (index - 1 + slides.length) % slides.length;
//     updateSlider();
// }

// dots.forEach((dot, i) => {
//     dot.addEventListener('click', () => {
//         index = i;
//         updateSlider();
//     });
// });

// setInterval(nextSlide, 5000);