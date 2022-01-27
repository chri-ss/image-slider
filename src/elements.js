import leftArrow from "./images/arrow_left_black_24dp.svg";
import rightArrow from "./images/arrow_right_black_24dp.svg";
import beach1 from "./images/pexels-photo-62389.jpeg";
import beach2 from "./images/pexels-photo-1174732.jpeg";
import beach3 from "./images/pexels-photo-1710795.jpeg";
import beach4 from "./images/pexels-photo-3233371.jpeg";
import beach5 from "./images/pexels-photo-3601425.jpeg";

const content = document.querySelector("#content");

const images = [beach1, beach2, beach3, beach4, beach5];

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

export { content, left, right, mainContainer, frame, slide, images }