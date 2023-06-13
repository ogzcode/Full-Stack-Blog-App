import NavBar from '../components/NavBar'
import Header from '../components/Header'
import HomeContent from '../components/HomeContent';
import Footer from '../components/Footer';

import homebg from '../assets/img/home-bg.jpg';

export default function Home() {
    return (
        <div>
            <NavBar />
            <Header img={homebg} heading="Clean Blog" subheading="A Blog Theme by Start Bootstrap"/>
            <HomeContent />
            <Footer />
        </div>
    );
}