import { Container, Row, Col } from 'react-bootstrap';

import homebg from '../assets/img/home-bg.jpg';
import create from '../assets/img/create-blog-page.jpg';
import aboutbg from '../assets/img/about-bg.jpg'
import contactbg from '../assets/img/contact-bg.jpg'
import messageBg from '../assets/img/messages-bg.jpg'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';

const headerContent = {
    "home": {
        "img": homebg,
        "heading": "Clean Blog",
        "subheading": "Kişisel blog sayfası"
    },
    "about": {
        "img": aboutbg,
        "heading": "Hakkımda",
        "subheading": "Kim olduğum ve neler yaptığıma dair bilgiler."
    },
    "contact": {
        "img": contactbg,
        "heading": "İletişim",
        "subheading": "Sorularınızı ve önerilerinizi bana iletebilirsiniz."
    },
    "create": {
        "img": create,
        "heading": "Yeni blog oluştur",
        "subheading": "Yeni bir blog yazısı oluşturun."
    },
    "messages": {
        "img": messageBg,
        "heading": "Mesajlar",
        "subheading": "Bana iletilen mesajlar."
    },
    "post": {

    }
};

export default function Header({ img, heading, subheading }) {
    const location = useLocation().pathname.split('/')[1];
    const {loading, singlePost} = useSelector(state => state.post);

    if (Object.keys(singlePost).length !== 0) {
        headerContent.post.heading = singlePost.heading;
        headerContent.post.subheading = singlePost.subheading;
        headerContent.post.img = `http://localhost:3000/${singlePost.mainImage}`;
    }
    else if (loading) {
        return <Spinner />
    }

    return (
        <header className="masthead" style={{ backgroundImage: `url(${headerContent[location].img})` }}>
            <Container className="position-relative px-4 px-lg-5">
                <Row className='gx-4 gx-lg-5 justify-content-center'>
                    <Col md={10} lg={8} xl={7}>
                        <div className="site-heading text-white text-center">
                            <h1 className='fs-site-heading fw-bold'>{headerContent[location].heading}</h1>
                            <span className="fs-site-subheading">{headerContent[location].subheading}</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}