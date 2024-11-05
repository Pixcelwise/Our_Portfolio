import React from 'react';
import styles from './Wallpaper.module.css';

const LandingPage = () => {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.overlay}>
                    <h1>Your Source for Stunning Wallpapers</h1>
                    <h2>Download High-Quality, Free Wallpapers for Any Screen</h2>
                    <div className={styles.searchBar}>
                        <input type="text" placeholder="Search wallpapers..." />
                        <button>Search</button>
                    </div>
                    <div className={styles.heroButtons}>
                        <button className={styles.exploreButton}>Explore Wallpapers</button>
                        <button className={styles.popularButton}>Popular Downloads</button>
                    </div>
                </div>
            </section>

            {/* Featured Collections */}
            <section className={styles.featuredCollections}>
                <h3>Featured Collections</h3>
                <div className={styles.collectionGrid}>
                    {/* Example categories, you can add more */}
                    <div className={styles.collectionItem}>
                        <img src="/path-to-nature.jpg" alt="Nature" />
                        <p>Nature</p>
                    </div>
                    <div className={styles.collectionItem}>
                        <img src="/path-to-abstract.jpg" alt="Abstract" />
                        <p>Abstract</p>
                    </div>
                    {/* Add more items as needed */}
                </div>
            </section>

            {/* Trending Wallpapers */}
            <section className={styles.trendingWallpapers}>
                <h3>Trending Wallpapers</h3>
                <div className={styles.wallpaperGrid}>
                    {/* Example wallpapers, you can add more */}
                    <div className={styles.wallpaperItem}>
                        <img src="/path-to-wallpaper.jpg" alt="Wallpaper 1" />
                        <button>Download</button>
                    </div>
                    {/* Add more wallpaper items as needed */}
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className={styles.newsletter}>
                <h3>Get New Wallpapers in Your Inbox</h3>
                <form className={styles.newsletterForm}>
                    <input type="email" placeholder="Your email" />
                    <button type="submit">Subscribe</button>
                </form>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>© 2024 Wallpaper Haven. All rights reserved.</p>
                <div className={styles.footerLinks}>
                    <a href="#terms">Terms of Service</a>
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#about">About</a>
                </div>
                <div className={styles.socialIcons}>
                    {/* Social Media Icons */}
                    <a href="#facebook">FB</a>
                    <a href="#twitter">TW</a>
                    <a href="#instagram">IG</a>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
