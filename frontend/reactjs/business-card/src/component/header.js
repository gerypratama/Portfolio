import './style.css'
import Photo from '../assets/img/profile.jpg'

const Header = () => (
    <div className="profile-header">
        <img src={Photo} alt="Profile" />
        <h2 className="profile-name">Gery Pratama</h2>
        <p className="profile-title">Frontend Developer</p>
        <div className="buttons-container">
            <button type="button" id="email">Email</button>
            <button type="button" id="linkedin">LinkedIn</button>
        </div>
    </div>
)

export default Header