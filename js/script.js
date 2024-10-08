$(".referenceCarousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots:false,
  responsive: {
    0: {
      items: 3,
    },
    400: {
      items: 4,
    },
    600: {
      items: 6,
    },
    1000: {
      items: 8,
    },
  },
});
const accordions = document.querySelectorAll(".accordion");
const accordionHeader = document.querySelector(".accordionHeader");
const accordionBody = document.querySelector(".accordionBody");
const fullHeight = accordionBody.scrollHeight + "px";
accordions.forEach((accordion) => {
  const header = accordion.querySelector(".accordionHeader");
  const body = accordion.querySelector(".accordionBody");

  header.addEventListener("click", () => {
    header.classList.toggle("active");
    if (header.classList.contains("active")) {
      header.classList.add("active");
    }

    if (header.classList.contains("active")) {
      body.style.height = fullHeight;
    } else {
      body.style.height = 0;
    }
  });
});
