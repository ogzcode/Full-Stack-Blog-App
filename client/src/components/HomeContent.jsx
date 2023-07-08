import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { redirect, Link } from "react-router-dom";

import { getPostPreviewAsyncThunk } from "../redux/slice/postSlice";
import PostPreview from "./PostPreview";

import Spinner from "./Spinner";

export default function HomeContent() {   
    const { postList, loading, error } = useSelector(state => state.post); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostPreviewAsyncThunk());
    }, [dispatch]);


    let content;

    if (error) {
        redirect("/error");
    }
    else if (loading) {
        content = <Spinner />;
    }
    else if (postList.length !== 0) {
        content = postList.map((post) => <PostPreview key={post._id} post={post}/>);
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