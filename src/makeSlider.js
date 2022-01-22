import leftArrow from "./images/arrow_left_black_24dp.svg";
import rightArrow from "./images/arrow_right_black_24dp.svg";

const content = document.querySelector("#content");

const makeSlider = () => {
  const left = new Image();
  left.src = leftArrow;
  left.classList.add("left");

  const right = new Image();
  right.src = rightArrow;
  right.classList.add("right");

  const frame = document.createElement("div");
  frame.classList.add("frame");

  const slider = document.createElement("div");
  slider.classList.add("slider");
  slider.textContent = "qwertyuiopasdfghjklzxcvbnm";

  const images = [];

  frame.appendChild(slider);
  content.appendChild(left);
  content.appendChild(frame);
  content.appendChild(right);
};

const shiftSliderLeft = () => {
  const slider = document.querySelector(".slider");
  slider.style.transform = "translate(3rem)";
};

const shiftSliderRight = () => {
  const slider = document.querySelector(".slider");
  slider.style.transform = "translate(-3rem)";
};

const addArrowEvents = () => {
    content.addEventListener("click", (e) => {
      if (e.target.classList[0] === "left") {
        shiftSliderLeft();
      } else if (e.target.classList[0] === "right") {
        shiftSliderRight();
      }
    });
  };

export { makeSlider, addArrowEvents };
