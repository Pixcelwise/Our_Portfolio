import styles from "./Tranding.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import heroBackground from '/Background2.png'
function Tranding() {
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
    )
}

export default Tranding
