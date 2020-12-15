// Sidenav
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, { edge: "right", draggable: true });
});

// Slider
// var instance = M.Carousel.init({
//   fullWidth: true,
// });
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, {});
});

// Glider JavaScript
new Glider(document.querySelector(".glider"), {
  slidesToShow: 1,
  draggable: true,
  dots: "#dots",
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
});
