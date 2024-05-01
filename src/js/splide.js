import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export function splide() {

    const menu_btn = document.querySelector('.menu_btn')
    const menu = document.querySelector('section#menu')
    menu_btn.addEventListener('click', function () {
        menu.classList.toggle('on')
        menu_btn.classList.toggle('on')
    })

    Splide.defaults = {
        type: 'loop',
        arrows: false,
        autoWidth: true,
        pagination: false,
        gap: 30,
        focus: 'center',
        autoScroll: {
            speed: 1.5,
            pauseOnHover: false,
        }
    }
    new Splide('#slider1', {}).mount({ AutoScroll });
    new Splide('#slider2', {
        direction: 'rtl'
    }).mount({ AutoScroll });
}