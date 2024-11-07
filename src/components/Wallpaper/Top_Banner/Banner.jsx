import Navbar from '../Navbar/Navbar';
import styles from './Banner.module.css';
import img1 from '/Top_Banner/Top_image_1.svg';
import img2 from '/Top_Banner/Top_image_2.svg';
import img3 from '/Top_Banner/Top_image_3.svg';

function Banner() {
    return (
        <section className={styles.Top_Banner_Container}>
            <Navbar />
            <div className={styles.overlay}>
                <h1>Discover New Places and Create Unforgettable Memories</h1>
            </div>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <img src={img1} className={styles.image} alt="Inca Trail, Peru" />
                    <p>Why you should reconsider The Inca Trail, Peru Trip</p>
                </div>
                <div className={styles.column}>
                    <img src={img2} className={styles.image} alt="Northern Lights, Iceland" />
                    <p>The Hidden Powers of The Northern Lights, Iceland</p>
                </div>
                <div className={styles.column}>
                    <img src={img3} className={styles.image} alt="Blue Hole, Belize" />
                    <p>10 Facts you didn’t know about The Blue Hole, Belize</p>
                </div>
            </div>
        </section>
    );
}

export default Banner;
