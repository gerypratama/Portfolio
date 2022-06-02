import './style.css';
import Facebook from '../assets/ico/facebook.png'
import GitHub from '../assets/ico/github.png'
import Instagram from '../assets/ico/instagram.png'

const SocialIcons = () => (
    <div className="soc-med-bar">
        <img src={Facebook} alt="Facebook" />
        <img src={GitHub} alt="Facebook" />
        <img src={Instagram} alt="Facebook" />
    </div>
)

export default SocialIcons
