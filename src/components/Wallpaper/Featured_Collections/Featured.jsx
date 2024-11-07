import styles from "./Featured.module.css";
import Background from "/Background4.png"; 
import image_1 from "/Tranding_images/image_1.svg"
import image_2 from "/Tranding_images/image_2.svg"
import image_3 from "/Tranding_images/image_3.svg"

function Featured() {
    return (
        <section
            className={styles.featuredCollections}
            style={{ backgroundImage: `url(${Background})` }} // Apply background image
        >
            {/* <h3>Featured Collections</h3>
            <div className={styles.collectionGrid}>
               
                <div className={styles.collectionItem}>
                    <img src={image_1} alt="Nature" />
                    <p>Nature</p>
                </div>

                <div className={styles.collectionItem}>
                    <img src={image_2} alt="Abstract" />
                    <p>Abstract</p>
                </div>

                <div className={styles.collectionItem}>
                    <img src={image_3} alt="CityScapes" />
                    <p>CityScapes</p>
                </div>
            </div> */}
        </section>
    );
}

export default Featured;
