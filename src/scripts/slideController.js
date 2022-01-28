import {
  content,
  left,
  right,
  mainContainer,
  frame,
  slide,
  images,
} from "./elements";
import clearContainers from "./clearContainers";
import { colorDots } from "./navDots";

let selected = 0;

const makeSlide = () => {
  images.forEach((image) => {
    const container = document.querySelector(
      `[data-image="${images.indexOf(image)}"]`
    );
    const newImage = new Image();
    newImage.classList.add("image");
    newImage.src = image;
    container.appendChild(newImage);
    if (container.getAttribute("data-image") == selected) {
      container.classList.toggle("visible");
    }
  });
};

const addContainers = () => {
  images.forEach((image) => {
    const container = document.createElement("div");
    container.classList.add("container");
    container.setAttribute("data-image", `${images.indexOf(image)}`);
    slide.appendChild(container);
  });
};

const makeFrame = () => {
  const frameContainer = document.createElement("div");
  frameContainer.classList.add("frame-container");
  frame.appendChild(slide);
  frameContainer.appendChild(left);
  frameContainer.appendChild(frame);
  frameContainer.appendChild(right);
  mainContainer.appendChild(frameContainer);
  content.appendChild(mainContainer);
};

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

export { makeSlide, makeFrame, addContainers, slideLeft, slideRight, dotClick };
