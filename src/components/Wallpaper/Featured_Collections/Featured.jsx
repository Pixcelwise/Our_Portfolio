import heroBackground from '/Background2.png'
import styles from "./Featured.module.css"
function Featured() {
    return (
        <section className={styles.featuredCollections}>
            {/* Featured Collections */}
            <h3>Featured Collections</h3>
            <div className={styles.collectionGrid}>
                {/* Example categories */}
                <div className={styles.collectionItem}>
                    <img src={heroBackground} alt="Nature" />
                    <p>Nature</p>
                </div>
                <div className={styles.collectionItem}>
                    <img src={heroBackground} alt="Abstract" />
                    <p>Abstract</p>
                </div>
            </div>
        </section>
    )
}

export default Featured
