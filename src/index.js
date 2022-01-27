import './style.css';
import './reset.css';
import { makeFrame, makeSlide, addContainers } from './makeSlider';
import { slideLeft, slideRight, dotClick} from './events';
import { addNavDots, colorDots } from './navDots';

addContainers();
makeFrame();
makeSlide();
addNavDots();
colorDots();
dotClick();
slideLeft();
slideRight();