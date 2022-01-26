import './style.css';
import './reset.css';
import { makeFrame, makeSlide, slideLeft, slideRight, addContainers, addNavDots } from './makeSlider';

addContainers();
makeFrame();
makeSlide();
addNavDots();
slideLeft();
slideRight();