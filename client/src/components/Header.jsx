import { Container, Row, Col } from 'react-bootstrap';

export default function Header({ img, heading, subheading }) {
    return (
        <header className="masthead" style={{ backgroundImage: `url(${img})` }}>
            <Container className="position-relative px-4 px-lg-5">
                <Row className='gx-4 gx-lg-5 justify-content-center'>
                    <Col md={10} lg={8} xl={7}>
                        <div className="site-heading text-white text-center ">
                            <h1 className='fs-site-heading fw-bold'>{ heading}</h1>
                            <span className="fs-site-subheading">{subheading}</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}