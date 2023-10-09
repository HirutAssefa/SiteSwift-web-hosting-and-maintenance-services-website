const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});


/* TESTIMONIAL */

const testimonials = [
  {
    name: "Tom Moss",
    job: "Software Engineer",
    image: "/assets/images/client-1.jpg",
    testimonial:
      "SiteSwift has been a reliable partner in hosting and maintaining our website.Their support is outstanding, and our website performance has improved significantly.",
  },
  {
    name: "Jane Smith",
    job: "QA, Team Manager",
    image: "/assets/images/client2.jpg",
    testimonial:
      "I can't thank SiteSwift enough for their exceptional hosting and maintenance services. Our website has never been more secure, and the team's responsiveness is truly commendable.",
  },
  {
    name: "Lara Johnson",
    job: "UI/UX Designer, Safety Agency",
    image: "/assets/images/client3.jpg",
    testimonial:
      "SiteSwift's hosting and maintenance have been a game-changer for our business. The website runs smoothly, and their support team is always there when we need them.",
  }
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};

window.onload = displayTestimonial;