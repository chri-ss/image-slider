import "./style.css";
import "./reset.css";
import {
  makeFrame,
  makeSlide,
  addContainers,
  slideLeft,
  slideRight,
  dotClick,
} from "./scripts/slideController";
import { addNavDots, colorDots } from "./scripts/navDots";
import slideInterval from "./scripts/timer";

addContainers();
makeFrame();
makeSlide();
addNavDots();
colorDots();
dotClick();
slideLeft();
slideRight();
slideInterval();
