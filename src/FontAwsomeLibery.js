import { library } from "@fortawesome/fontawesome-svg-core"
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub, faStackOverflow, faGoogle, faMedium, faHtml5, faCss3Alt, faSass, faJs, faReact, faSwift, faNpm, faNodeJs} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faFire } from "@fortawesome/free-solid-svg-icons";

const initFontAwsome = () => {
    library.add(fab , faTwitterSquare , faFacebook , faLinkedin ,faGithub , faStackOverflow , faGoogle , faMedium,
        faHtml5 , faCss3Alt , faSass , faJs , faReact , faNodeJs , faSwift ,
        faNpm , faDatabase , faFire 
        );
}
export default initFontAwsome