import {link} from "./link.js"
import {intro} from "./intro.js"
import {project} from "./project.js"
import {work} from "./work.js"
import {about} from "./about.js"
import {contact} from "./contact.js"
import {splide} from "./splide.js"
import { Gsap } from "./gsap.js";

window.addEventListener('load', function(){
  link()
  intro()
  splide()
  Gsap()
  project()
  work()
  about()
  contact()
})