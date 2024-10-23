import styles from "./Header.module.css";

function Header() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start" // Ensures it scrolls to the top of the section
            });
        }
    };

    return (
        <header className={styles.header}>
            <h4 className={styles.logo}>PxW</h4>
            <nav className={styles.navbar}>
                {/* Use onClick for smooth scroll */}
                <a
                    href="#Projects"
                    className={styles.navLink}
                    onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection("Projects"); // Scroll to the Projects section
                    }}
                >
                    Projects
                </a>
                <a
                    href="#Contact"
                    className={styles.navLink}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("Contact"); // Scroll to the Contact section
                    }}
                >
                    Contact
                </a>
            </nav>
        </header>
    );
}

export default Header;
