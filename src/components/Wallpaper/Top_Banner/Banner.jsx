import styles from './Banner.module.css'
import heroBackground from '/Background2.png'
function Banner() {
    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${heroBackground})` }}>
            <div className={styles.overlay}>
                <h1>Your Source for Stunning Wallpapers</h1>
                <h2>Download High-Quality, Free Wallpapers for Any Screen</h2>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Search wallpapers..." aria-label="Search wallpapers" />
                    <button>Search</button>
                </div>
                <div className={styles.heroButtons}>
                    <button className={styles.exploreButton}>Explore Wallpapers</button>
                    <button className={styles.popularButton}>Popular Downloads</button>
                </div>
            </div>
        </section>
    )
}

export default Banner
