import {intro} from "./intro.js"
import {link} from "./link.js"
import {project} from "./project.js"
import {work} from "./work.js"
import {about} from "./about.js"
import {contact} from "./contact.js"
import {splide} from "./splide.js"
import { Gsap } from "./gsap.js";
import { swiper } from "./swiper.js";

window.addEventListener('load', function(){
  intro()
  link()
  splide()
  Gsap()
  project()
  work()
  about()
  contact()
  swiper()
})