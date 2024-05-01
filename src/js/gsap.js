import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

export function Gsap() {
    const mainSect = document.querySelector('section#main')
    function addClass() {
        document.querySelector('.main_wrap').classList.add('on')
    }
    setTimeout(addClass, 5000);
    setTimeout(function(){
        gsap.registerPlugin(ScrollTrigger)
        const ani1 = gsap.timeline()
    
    
        ani1.to('.menu_btn', { opacity: 0 }, 'first')
            .to('.side_box', { opacity: 0 }, 'first')
            .to('#main .main_wrap .title', { opacity: 0 }, 'first')
            .to('#main .chess_piece_box', { opacity: 0 }, 'first')
            .to('#main .scroll_down', { opacity: 0 }, 'first')
            .to('#main .chess_box', {
                rotate: 0,
                duration: 1,
            })
            .to('#main .chess_box', {
                x: -1000,
                y: 500,
                scale: 50,
                delay: .5,
                duration: 1,
            })
    
        ScrollTrigger.create({
            animation: ani1,
            trigger: '#main',
            start: 'top top',
            end: '+=4000',
            anticipatePin: 1,
            scrub: true,
            markers: 1,
            pin: true,
        })
    }, 4000)
        
    }