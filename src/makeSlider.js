const makeSlider = () => {
  const content = document.querySelector("#content");
  console.log(content);

  const frame = document.createElement("div");
  frame.classList.add("frame");

  const slider = document.createElement("div");
  slider.classList.add("slider");
  slider.textContent = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

  const images = [];

  frame.appendChild(slider);
  content.appendChild(frame);
};

export default makeSlider;
