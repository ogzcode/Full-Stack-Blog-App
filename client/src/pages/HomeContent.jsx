import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { redirect, Link } from "react-router-dom";

import { getPostPreviewAsyncThunk } from "../redux/slice/postSlice";
import PostPreview from "../components/PostPreview";

import Spinner from "../components/Spinner";

export default function HomeContent() {
    const { postList, loading, error, page, pageCount } = useSelector(state => state.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostPreviewAsyncThunk(page));
    }, [dispatch]);


    let content;

    if (error) {
        redirect("/error");
    }
    else if (loading) {
        content = <Spinner />;
    }
    else if (postList.length !== 0) {
        content = postList.map((post) => <PostPreview key={post._id} post={post} />);
    }

    const handleNextPage = () => {
        dispatch(getPostPreviewAsyncThunk(page < pageCount ? page + 1 : pageCount));
    }

    const handlePrevPage = () => {
        dispatch(getPostPreviewAsyncThunk(page > 1 ? page - 1 : 1));
    }

    return (
        <Container className="px-4 px-lg-5">
            <Row className="gx-4 gx-lg-5 justify-content-center">
                <Col md={10} lg={8} xl={7}>
                    {
                        content ? content : (
                            <div className="alert alert-warning" role="alert">
                                <h4 className="alert-heading">No Post</h4>
                                <p>There is no post.</p>
                            </div>
                        )
                    }
                </Col>
            </Row>
        </Container>
    );
}