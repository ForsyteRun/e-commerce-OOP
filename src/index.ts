import App from './modules/app';
import './sass/main.scss';

new App();

const isHTML = (el: HTMLElement | null): boolean => {
  return Boolean(el instanceof HTMLBodyElement && el instanceof HTMLElement);
};

const body = document.querySelector('body');
const head = document.querySelector('head');

console.log(isHTML(body), isHTML(head));
console.log(288787);
