const arrowSlider = document.querySelectorAll(".slider-arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrowSlider.forEach((arrow, index) => {
  const itemNumber = movieLists[index].querySelectorAll("img").length;
  let clickCounter = 0;
  console.log(index, arrow, itemNumber);
  arrow.addEventListener("click", () => {
    clickCounter++;
    // Value 4 is the number of images that are visible at the same time. It is not dynamic in case if you have larger screen.
    if (itemNumber - (4 + clickCounter) >= 0) {
      movieLists[index].style.transform = `translateX(${
        movieLists[index].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[index].style.transform = `translateX(0)`;
      clickCounter = 0;
    }
  });
});

const toggleBall = document.querySelector(".toggle-ball");
const themeItems = document.querySelectorAll(
  ".container, .movie-list-title, .navbar-container, .sidebar, .sidebar-icons, .toggle"
);

toggleBall.addEventListener("click", () => {
  themeItems.forEach((item) => {
    item.classList.toggle("active");
  });
  toggleBall.classList.toggle("active");
});
