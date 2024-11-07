import React from 'react';
import styles from './Wallpaper.module.css';
import heroBackground from '/Background2.png'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from 'react-slick'; 
import Footer from '../components/Footer/Footer'


const LandingPage = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const trendingImages = [
        heroBackground,
        heroBackground,
        heroBackground
    ];


    return (
        <>
            <div className={styles.container}>
                {/* Hero Section with Background Image */}
                <section
                    className={styles.hero}
                    style={{ backgroundImage: `url(${heroBackground})` }}
                >
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

                {/* Featured Collections */}
                <section className={styles.featuredCollections}>
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

                {/* Trending Wallpapers */}
                <section className={styles.trendingWallpapers}>
                    <h3>Trending Wallpapers</h3>
                    <Slider {...settings} className={styles.wallpaperCarousel}>
                        {trendingImages.map((image, index) => (
                            <div key={index} className={styles.wallpaperItem}>
                                <img src={image} alt={`Wallpaper ${index + 1}`} />
                                <button>Download</button>
                            </div>
                        ))}
                    </Slider>
                </section>

                {/*Customize request */}
                <section className={styles.newsletter}>
                    <h3>Get Your Customized Wallpaper</h3>
                    <form className={styles.newsletterForm}>
                        <input type="email" placeholder="Your email" aria-label="Email" />
                        <input type="text" placeholder="Your requirement" aria-label="Email" />
                        <button type="submit">submit</button>
                    </form>
                </section>

                <Footer />
            </div>
        </>
       
    );
};

export default LandingPage;
