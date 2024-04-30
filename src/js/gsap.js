import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

export function Gsap(){
    gsap.registerPlugin(ScrollTrigger)
    const ani1 = gsap.timeline()

    ani1.to('.menu_btn',{
        opacity:0
    })
    .to('.side_box',{
        opacity:0
    })
    .to('#main .main_wrap h1',{
        opacity:0
    })
    .to('#main .chess_piece_box',{
        opacity:0
    })
    .to('#main .chess_box',{
        rotate:0,
        duration:2,
    } )
    .to('#main .chess_box',{
        x:-1000,
        y:500,
        scale:50,
        duration:2
    })

    ScrollTrigger.create({
        animation:ani1,
        trigger: '#main',
        start: 'top top',
        end: '+=4000',
        anticipatePin:1,
        scrub:true,
        markers:true,
        pin:true,
    })
}