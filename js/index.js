const hamberguer = document.querySelector(".header__hamburger");
const navmenu = document.querySelector(".header__navmenu");
// console.log(navmenu);
hamberguer.addEventListener("click", () => {
  hamberguer.classList.toggle("active");
  navmenu.classList.toggle("active");
});

document.querySelectorAll(".header__navlink").forEach((n) =>
  n.addEventListener("click", () => {
    hamberguer.classList.remove("active");
    navmenu.classList.remove("active");
  })
);

// navbar color changes

$(document).ready(function () {
  $(window).on("scroll", function () {
    $("body").toggleClass("scrolled", $(this).scrollTop() > 100);
  });
});

// filter images

document.addEventListener("DOMContentLoaded", function () {
  let filterMenu = document.querySelectorAll(".listitemBox");
  let items = document.querySelectorAll(".itemBox");

  filterMenu.forEach((menu) => {
    menu.addEventListener("click", function () {
      filterMenu.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");

      let filterValue = this.getAttribute("data-filter");

      items.forEach((item) => {
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
document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  function changeTestimonial(index) {
    testimonials[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");

    currentIndex = index;

    testimonials[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  function nextTestimonial() {
    let nextIndex = (currentIndex + 1) % testimonials.length;
    changeTestimonial(nextIndex);
  }

  function prevTestimonial() {
    let prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    changeTestimonial(prevIndex);
  }

  prevBtn.addEventListener("click", prevTestimonial);
  nextBtn.addEventListener("click", nextTestimonial);

  setInterval(nextTestimonial, 3000);
});

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

// signup
document.getElementById("signupBtn").addEventListener("click", function () {
  window.location.href = "Reg.html";
});



// blog 

 
let carocusel = document.querySelector(".abcdcarousel");
let btnjhdfs = document.querySelectorAll(".wrapperClassforBlog i");
let carocuselChildren = [...carocusel.children];
let Dwrapper = document.querySelector(".wrapperClassforBlog");

let newCardWidth = carocusel.querySelector(".slidingxyzcards").offsetWidth;
let isOnDragging = false,
  StartX,
  startedScrollLeft,
  isAutoPlayy = true,
  tymeOutiD;

let cArdsPerView = Math.round(carocusel.offsetWidth / newCardWidth);

carocuselChildren
  .slice(-cArdsPerView)
  .reverse()
  .forEach((crd) => {
    carocusel.insertAdjacentHTML("afterbegin", crd.outerHTML);
  });

carocuselChildren.slice(0, cArdsPerView).forEach((crd) => {
  carocusel.insertAdjacentHTML("beforeend", crd.outerHTML);
});

let dragsterStart = (e) => {
  isOnDragging = true;

  carocusel.classList.add("drakgging");

  StartX = e.pageX;
  startedScrollLeft = carocusel.scrollLeft;
};


let drakgging = (e) => {
  if (!isOnDragging) return;

  carocusel.scrollLeft = startedScrollLeft - (e.pageX - StartX);
};


let drakgStop = () => {
  isOnDragging = false;

  carocusel.classList.remove("drakgging");
};


let infinituScroll = () => {
  if (carocusel.scrollLeft === 0) {
    carocusel.classList.add("no-transition");
    carocusel.scrollLeft = carocusel.scrollWidth - 2 * carocusel.offsetWidth;
    carocusel.classList.remove("no-transition");
  } else if (
    Math.ceil(carocusel.scrollLeft) ===
    carocusel.scrollWidth - carocusel.offsetWidth
  ) {
    carocusel.classList.add("no-transition");
    carocusel.scrollLeft = carocusel.offsetWidth;
    carocusel.classList.remove("no-transition");
  }

  clearTimeout(tymeOutiD);
  if (!Dwrapper.matches(":hover")) autooPlay();
};


let autooPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlayy) return;  

  tymeOutiD = setTimeout(() => {
    carocusel.scrollLeft += newCardWidth;
  }, 2500);
};
autooPlay();
carocusel.addEventListener("mousedown", dragsterStart);
carocusel.addEventListener("mousemove", drakgging);
document.addEventListener("mouseup", drakgStop);
carocusel.addEventListener("scroll", infinituScroll);
//auto play will be active only when there is no hover on carocusel
Dwrapper.addEventListener("mouseenter", () => clearTimeout(tymeOutiD));
Dwrapper.addEventListener("mouseleave", autooPlay);

