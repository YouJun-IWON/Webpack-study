import getRandomAddress from './randomAddress';
import { nanoid } from 'nanoid';
import './styles/main.scss';
import mainImage from './assets/webpack.jpg';

console.log(nanoid());
console.log(getRandomAddress());
console.log(getRandomAddress());

const img = document.getElementById('mainImage');
img.src = mainImage;
