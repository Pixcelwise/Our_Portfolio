
import styles from './Wallpaper.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from '../components/Footer/Footer'
import Featured from '../components/Wallpaper/Featured_Collections/Featured';
import Tranding from '../components/Wallpaper/Tranding_Wallpaper/Tranding';
import Customize from '../components/Wallpaper/Customize_request/Customize';
import Banner from '../components/Wallpaper/Top_Banner/Banner';


const LandingPage = () => {


    return (
        <>
            <div className={styles.Container}>
                {/* Hero Section with Background Image */}
                <Banner />

                {/* Featured Wallpapers */}
                <Featured />

                {/* Trending Wallpapers */}
                <Tranding />

                {/*Customize request */}
                <Customize />

                <Footer />
            </div>
        </>

    );
};

export default LandingPage;
