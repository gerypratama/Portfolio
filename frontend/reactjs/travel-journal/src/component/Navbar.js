import './style.css';

const Navbar = () =>
    <section className="navbar">
        <img src={process.env.PUBLIC_URL + 'globe.png'} alt="globe" />
        <h5>my travel journal.</h5>
    </section>

export default Navbar