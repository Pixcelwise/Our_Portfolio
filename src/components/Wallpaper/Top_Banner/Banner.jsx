import Navbar from '../Navbar/Navbar'
import styles from './Banner.module.css'
import img1 from "/Top_Banner/Top_image_1.svg"
import img2 from "/Top_Banner/Top_image_2.svg"
import img3 from "/Top_Banner/Top_image_3.svg"
function Banner() {
    return (
        <section className={styles.Top_Banner_Container} >
            <Navbar />
            <div className={styles.img_container}>
                <img src={img1} className={styles.Top_Banner_img} alt="top_banner_img" />
            </div>
            <div className={styles.img_container}>
                <img src={img2} className={styles.Top_Banner_img} alt="top_banner_img" />
            </div>
            <div className={styles.img_container}>
                <img src={img3} className={styles.Top_Banner_img} alt="top_banner_img" />
            </div>

        </section>
    )
}

export default Banner
