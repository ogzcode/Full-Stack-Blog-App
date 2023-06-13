import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

import aboutbg from '../assets/img/about-bg.jpg'

export default function About() {
    return (
        <div>
            <NavBar />
            <Header img={aboutbg} heading="About Me" subheading="This is what ı do" />
            <main class="mb-4">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <p className='fs-3 fw-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
                            <p className='fs-3 fw-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
                            <p className='fs-3 fw-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}