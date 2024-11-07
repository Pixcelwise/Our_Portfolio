
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Projects from '../components/Portfolio/Projects/Projects'
import Heading from '../components/Portfolio/Heading/Heading'
import Headline from '../components/Portfolio/Headline/Headline'
import ContactForm from '../components/Portfolio/Contact/Contact'
import Skills from '../components/Portfolio/Skills/Skills'
import pictify from '/picctify.png'
import tastytales from '/tastytales.png';
import KickingAnimation from '../components/Animation/Animation'
const projectsData = [
    {
        title: 'Pictify',
        description: '“Pictify” is a revolutionary social media platform designed specifically for photographers. Through meticulous development and leveraging Full Stack technologies... By integrating portfolio management features and live showcases... ',
        imageUrl: pictify,
        url: 'https://pictifyfinal.vercel.app/'

    },
    {
        title: 'Tasty Tales',
        description: " Tasty Tales is a dynamic recipe website designed to provide users with an immersive culinary experience.Tasty Tales aims to simplify the process of discovering, sharing, and exploring delectable recipes.",
        imageUrl: tastytales,
        url: 'https://spotify-visualizer.com'
    },

];
function Portfolio() {
    return (

        <>
            <Header />
            <Headline />
            <Heading text={"PixcelWise"} />
            <Skills />
            <Projects projects={projectsData} />
            <KickingAnimation />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Portfolio
