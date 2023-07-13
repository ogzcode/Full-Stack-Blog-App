import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="border-top py-4">
            <Container className="px-4 px-lg-5">
                <Row className="gx-4 gx-lg-5 justify-content-center">
                    <Col md={10} lg={8} xl={7}>
                        <div className="py-3 text-center text-secondary-emphasis">
                            <a href="#!" className="social-icon text-secondary-emphasis text-decoration-none">
                                <i className="bi-facebook fs-1"></i>
                            </a>
                            <a href="#!" className="social-icon text-secondary-emphasis text-decoration-none mx-5">
                                <i className="bi-twitter fs-1"></i>
                            </a>
                            <a href="#!" className="social-icon text-secondary-emphasis text-decoration-none">
                                <i className="bi-github fs-1"></i>
                            </a>
                        </div>
                        <div className="text-center text-muted fst-italic">Copyright &copy; Your Website 2023 
                            <a className="text-success ms-2" href="https://startbootstrap.com/theme/clean-blog">Clean Blog Theme</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}