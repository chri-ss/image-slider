import './style.css';
import './reset.css';
import { makeFrame, makeSlide, slideLeft, slideRight, addContainers, addNavDots, colorDots, dotClick } from './makeSlider';

addContainers();
makeFrame();
makeSlide();
addNavDots();
colorDots();
dotClick();
slideLeft();
slideRight();