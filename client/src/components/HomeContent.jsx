import { Container, Row, Col } from "react-bootstrap";

function PostPreview() {
    return (
        <div className="post-preview">
            <a href="post.html" className="text-decoration-none text-dark">
                <h2 className="fw-bold fs-1 mt-5 mb-2">Man must explore, and this is exploration at its greatest</h2>
                <h3 className="fw-light fs-4 mb-2">Problems look mighty small from 150 miles up</h3>
            </a>
            <p className="fs-6 fst-italic" style={{ color: "#6c757d"}}>
                Posted by
                <a href="#!" className="text-decoration-none mx-1">Author</a>
                on September 24, 2023
            </p>
        </div>
    ); İ
}

export default function HomeContent() {
    return (
        <Container className="px-4 px-lg-5">
            <Row className="gx-4 gx-lg-5 justify-content-center">
                <Col md={10} lg={8} xl={7}>
                    {
                        [...Array(5)].map((_, index) => (
                            <>
                                <PostPreview key={index} />
                                <hr />
                            </>
                        ))
                    }
                    <div 
                        className="d-flex justify-content-end my-5">
                            <a class="btn-next-post text-white text-decoration-none text-uppercase py-3 px-4" href="#!">Older Posts →</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}