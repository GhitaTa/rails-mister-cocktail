import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Try our cocktails", "Add yours ;)"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
