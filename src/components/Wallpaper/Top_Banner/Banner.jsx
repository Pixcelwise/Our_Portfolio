import Navbar from '../Navbar/Navbar'
import styles from './Banner.module.css'
import img1 from "/Top_Banner/Top_image_1.svg"
import img2 from "/Top_Banner/Top_image_2.svg"
import img3 from "/Top_Banner/Top_image_3.svg"
function Banner() {
    return (
        <section className={styles.Top_Banner_Container}>
            <Navbar />
            <h1>Discover New Places and Create Unforgettable Memories</h1>
            <div className={styles.img_container}>
                <div className={styles.Top_Banner_img}>
                    <img src={img1} alt="top_banner_img" />
                    <p>Why you should reconsider The Inca Trail, Peru Trip <a href="#">→</a></p>
                </div>
                <div className={styles.Top_Banner_img}>
                    <img src={img2} alt="top_banner_img" />
                    <p>Why you should reconsider The Inca Trail, Peru Trip <a href="#">→</a></p>
                </div>
                <div className={styles.Top_Banner_img}>
                    <img src={img3} alt="top_banner_img" />
                    <p>Why you should reconsider The Inca Trail, Peru Trip <a href="#">→</a></p>
                </div>
            </div>
        </section>

    )
}

export default Banner
