import { Container, Row, Col } from 'react-bootstrap';

import homebg from '../assets/img/home-bg.jpg';
import create from '../assets/img/create-blog-page.jpg';
import aboutbg from '../assets/img/about-bg.jpg'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Spinner from './Spinner';

const headerContent = {
    "home": {
        "img": homebg,
        "heading": "Clean Blog",
        "subheading": "A Blog Theme by Start Bootstrap"
    },
    "about": {
        "img": aboutbg,
        "heading": "About Me",
        "subheading": "This is what I do."
    },
    "create": {
        "img": create,
        "heading": "Create blog",
        "subheading": "A Blog Theme by Start Bootstrap"
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