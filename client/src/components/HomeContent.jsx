import { Container, Row, Col } from "react-bootstrap";
import { redirect, Link } from "react-router-dom";

import { useGetPostsPreviewQuery } from "../redux/services/authApi";
import Spinner from "./Spinner";

function PostPreview({ post }) {
    return (
        <div className="post-preview">
            <Link to={`/post/${post._id}`} className="text-decoration-none text-dark">
                <h2 className="fw-bold fs-1 mt-5 mb-2">{ post.heading }</h2>
                <h3 className="fw-light fs-4 mb-2">{ post.subheading }</h3>
            </Link>
            <p className="fs-6 fst-italic" style={{ color: "#6c757d" }}>
                Posted by
                <a href="#!" className="text-decoration-none mx-1">Admin</a>
                on { post.time }
            </p>
            <hr />
        </div>
    ); 
}

export default function HomeContent() {
    const { data: posts, error, isLoading, isSuccess } = useGetPostsPreviewQuery();
    
    let content;

    if (error) {
        redirect("/error");
    }
    else if (isLoading) {
        content = <Spinner />;
    }
    else if (isSuccess) {
        content = posts.posts.map((post) => <PostPreview key={post._id} post={post}/>);
    }

    return (
        <Container className="px-4 px-lg-5">
            <Row className="gx-4 gx-lg-5 justify-content-center">
                <Col md={10} lg={8} xl={7}>
                    {
                        content
                    }
                    <div
                        className="d-flex justify-content-end my-5">
                        <a className="btn-next-post text-white text-decoration-none text-uppercase py-3 px-4" href="#!">Older Posts →</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}