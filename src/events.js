import clearContainers from "./clearContainers";
import { makeSlide } from './makeSlider';
import { content } from './elements';
import { colorDots } from './navDots';

let selected = 0;

const slideLeft = () => {
  content.addEventListener("click", (e) => {
    if (e.target.classList[0] === "left") {
      selected -= 1;
      if (selected < 0) {
        selected = 4;
      }
      clearContainers();
      makeSlide();
      colorDots();
    }
  });
};

const slideRight = () => {
  content.addEventListener("click", (e) => {
    if (e.target.classList[0] === "right") {
      selected += 1;
      if (selected > 4) {
        selected = 0;
      }
      clearContainers();
      makeSlide();
      colorDots();
    }
  });
};

const dotClick = () => {
  const dotsContainer = document.querySelector(".dots-container");
  dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList[0] === "new-dot") {
      // eslint-disable-next-line radix
      selected = parseInt(e.target.getAttribute("data-dot"));
      clearContainers();
      makeSlide();
      colorDots();
    }
  });
};

export { slideLeft, slideRight, dotClick, selected }
