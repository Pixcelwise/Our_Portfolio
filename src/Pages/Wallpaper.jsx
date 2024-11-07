
import styles from './Wallpaper.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from '../components/Wallpaper/Footer/Footer'
import Featured from '../components/Wallpaper/Featured_Collections/Featured';
import Tranding from '../components/Wallpaper/Tranding_Wallpaper/Tranding';
import Customize from '../components/Wallpaper/Customize_request/Customize';
import Banner from '../components/Wallpaper/Top_Banner/Banner';

import Background from "/Background4.png";

const LandingPage = () => {


    return (
        <>
            <div className={styles.Container} style={{ backgroundImage: `url(${Background})` }}>
                {/* Hero Section with Background Image */ }
                < Banner />

                {/* Featured Wallpapers */ }
                < Featured />

                {/* Trending Wallpapers */ }
                < Tranding />

                {/*Customize request */ }
                < Customize />

                <Footer />
            </div >
        </>

    );
};

export default LandingPage;
