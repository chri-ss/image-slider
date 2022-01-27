import leftArrow from "./images/arrow_left_black_24dp.svg";
import rightArrow from "./images/arrow_right_black_24dp.svg";

import beach1 from "./images/pexels-photo-62389.jpeg";
import beach2 from "./images/pexels-photo-1174732.jpeg";
import beach3 from "./images/pexels-photo-1710795.jpeg";
import beach4 from "./images/pexels-photo-3233371.jpeg";
import beach5 from "./images/pexels-photo-3601425.jpeg";

const content = document.querySelector("#content");

const left = new Image();
left.src = leftArrow;
left.classList.add("left");

const right = new Image();
right.src = rightArrow;
right.classList.add("right");

const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

const frame = document.createElement("div");
frame.classList.add("frame");

const slide = document.createElement("div");
slide.classList.add("slide");

const images = [beach1, beach2, beach3, beach4, beach5];

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

const addNavDots = () => {
  const dotsContainer = document.createElement("div");
  dotsContainer.classList.add("dots-container");
  images.forEach((image) => {
    const newDot = document.createElement("a");
    newDot.classList.add("new-dot");
    newDot.setAttribute("data-dot", images.indexOf(image));
    dotsContainer.appendChild(newDot);
    mainContainer.appendChild(dotsContainer);
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

const clearContainers = () => {
  const containers = Array.from(document.querySelectorAll(".container"));
  containers.forEach((container) => {
    container.removeChild(container.lastChild);
    container.classList.remove("visible");
  });
};

const colorDots = () => {
  const dots = Array.from(document.querySelectorAll(".new-dot"));
  const selectedImage = document.querySelector(".visible");
  dots.forEach((dot) => {
    if (
      dot.getAttribute("data-dot") === selectedImage.getAttribute("data-image")
    ) {
      dot.classList.add("dot-selected");
    } else {
      dot.classList.remove("dot-selected");
    }
  });
};

const dotClick = () => {
  const dotsContainer = document.querySelector(".dots-container");
  dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList[0] === "new-dot") {
      selected = e.target.getAttribute("data-dot");
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

export {
  makeSlide,
  slideRight,
  slideLeft,
  makeFrame,
  addContainers,
  addNavDots,
  colorDots,
  dotClick
};
