import {content, left, right, mainContainer, frame, slide, images } from './elements';
import { selected } from './events';

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

export {
  makeSlide,
  makeFrame,
  addContainers,
};
