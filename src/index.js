import './index.html'
import './index.scss'
import {sum} from './modules/calc'
import logo from './images/logo.svg'


console.log(sum(2,5));
// let a = [1, 2, 3]
// let b = a.map(el => el === 5)
// console.log(b);
const div = document.querySelector('div')
let img = new Image()
img.src = logo
div.append(img)