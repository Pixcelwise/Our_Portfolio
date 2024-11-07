import styles from './Navbar.module.css';
import logo from '/logo.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="Travel Pulse Logo" />
            </div>
            <ul className={styles.navLinks}>
                <li><a href="#destination">Destination</a></li>
                <li><a href="#stories">Stories</a></li>
                <li><a href="#reviews">Reviews</a></li>
            </ul>
            <div className={styles.authButtons}>
                <button className={styles.signUp}>Sign Up</button>
                <button className={styles.login}>Login</button>
            </div>
        </nav>
    );
}

export default Navbar;
