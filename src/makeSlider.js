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

const frame = document.createElement("div");
frame.classList.add("frame");

const slide = document.createElement("div");
slide.classList.add("slide");

const images = [beach1, beach2, beach3, beach4, beach5];

let selected = 0;

const makeSlider = () => {
  images.forEach((image) => {
    const newImage = new Image();
    newImage.src = image;
    newImage.classList.add("image");
    newImage.setAttribute("data-image", `${images.indexOf(image)}`);
    if (newImage.getAttribute("data-image") == selected) {
      newImage.style.width = "100%";
      newImage.style.height = "100%";
    }
    slide.appendChild(newImage);
  });
  frame.appendChild(slide);
  content.appendChild(frame);
  content.appendChild(left);
  content.appendChild(frame);
  content.appendChild(right);
};

const updateSlider = (index) => {
  const divImages = Array.from(document.querySelectorAll(".image"));
  divImages.forEach((image) => {
    slide.removeChild(image);
  });
  selected = index;
  makeSlider();
};

const slideRight = () => {
  content.addEventListener("click", (e) => {
    if (e.target.classList[0] === "right") {
      selected += 1;
      if(selected > 4) {
        selected = 0;
      }
      updateSlider(selected);
    }
  });
};

const slideLeft = () => {
  content.addEventListener("click", (e) => {
    if (e.target.classList[0] === "left") {
      selected -= 1;
      if(selected < 0) {
        selected = 4;
      }
      updateSlider(selected);
    }
  });
};

export { makeSlider, slideRight, slideLeft, beach1 };
