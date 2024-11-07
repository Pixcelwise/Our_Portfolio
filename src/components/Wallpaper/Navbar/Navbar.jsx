import styles from './Navbar.module.css';
import logo from '/logo.png';  // Path to your logo

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="Pixcelwise Logo" />
            </div>
            <ul className={styles.navLinks}>
                <li><a href="/">Home</a></li>
                
            </ul>
        </nav>
    );
}

export default Navbar;
