import './style.css'
import Photo from '../assets/img/profile.jpg'
import Mail from '../assets/ico/mail.png'

const Header = () => (
    <div className="profile-header">
        <img src={Photo} alt="Profile" />
        <h2 className="profile-name">Gery Pratama</h2>
        <p className="profile-title">Frontend Developer</p>
        <button
            type="button"
            id="email"
            onClick={(e) => {
                window.location.href = 'mailto:gerypratama.o@gmail.com';
                e.preventDefault();
            }}>
            <img src={Mail} alt="Email" />Email
        </button>
    </div>
)

export default Header