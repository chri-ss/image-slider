import { mainContainer, images } from './elements';

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

  export { addNavDots, colorDots }