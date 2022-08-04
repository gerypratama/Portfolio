import './style.css';
import GitHub from '../assets/ico/github.png'
import Instagram from '../assets/ico/instagram.png'
import Linkedin from '../assets/ico/linkedin.png'

const SocialIcons = () => (
    <div className="soc-med-bar">
        <a href='https://github.com/gerypratama' target='_blank' rel='noreferrer'>
            <img src={GitHub} alt="GitHub" />
        </a>
        <a href='https://www.instagram.com/gery.oktav/' target='_blank' rel='noreferrer'>
            <img src={Instagram} alt="Instagram" />
        </a>
        <a href='https://www.linkedin.com/in/gery-pratama-oktaviano/' target='_blank' rel='noreferrer'>
            <img src={Linkedin} alt="LinkedIn" />
        </a>
    </div>
)

export default SocialIcons
