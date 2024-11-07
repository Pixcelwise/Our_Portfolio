import Navbar from '../Navbar/Navbar';
import styles from './Banner.module.css';
import img1 from '/Top_Banner/Top_image_1.svg';
import img2 from '/Top_Banner/Top_image_2.svg';
import Wall3 from '/Wall3.jpg';
import Wall2 from '/Wall2.jpg';
import Wall1 from '/Wall1.jpg';

// Importing React Icons
import { FaArrowRight } from 'react-icons/fa'; // Right arrow icon from React Icons

function Banner() {
    return (
        <section className={styles.Top_Banner_Container}>
            <Navbar />
            <div className={styles.overlay}>
                <h1>Discover New Places and Create Unforgettable Memories</h1>
            </div>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <img src={Wall3} className={styles.image} alt="Inca Trail, Peru" />
                    <p>
                        Art beyond boundaries, for your screen.
                        <FaArrowRight className={styles.arrowIcon} />
                    </p>
                </div>
                <div className={styles.column}>
                    <img src={Wall1} className={styles.image} alt="Northern Lights, Iceland" />
                    <p>
                        Breathe in the beauty of nature, one wallpaper at a time.
                        <FaArrowRight className={styles.arrowIcon} />
                    </p>
                </div>
                <div className={styles.column}>
                    <img src={Wall2} className={styles.image} alt="Blue Hole, Belize" />
                    <p>
                        The city never sleeps—now, neither does your screen.
                        <FaArrowRight className={styles.arrowIcon} />
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Banner;
