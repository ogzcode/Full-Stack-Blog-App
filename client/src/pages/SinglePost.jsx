import { useGetPostByIdQuery, useDeletePostMutation } from "../redux/services/authApi";
import { useSelector, useDispatch } from "react-redux";
import { useMatch, useNavigate, redirect } from "react-router-dom";
import { setPost, deletePost } from "../redux/slice/postSlice.js";
import { useEffect } from "react";
import Spinner from "../components/Spinner";

export default function SinglePost() {
    let match = useMatch("/post/:id");
    const { token } = useSelector((state) => state.post);
    const { data, error, isLoading, isSuccess } = useGetPostByIdQuery(match.params.id);
    const [deletePostById] = useDeletePostMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let content;

    useEffect(() => {
        if (isSuccess) {
            dispatch(setPost(data.post));
        }
    }, [dispatch, data])

    if (error) {
        redirect("/error");
    }
    else if (isLoading) {
        content = <Spinner />
    }
    else if (isSuccess) {
        content = (
            <div className="col-md-10 col-lg-8 col-xl-7 article ">
                <p className="fs-6">{data.post.time}</p>
                <div dangerouslySetInnerHTML={{ __html: data.post.content }}>
                </div>
            </div>
        )
    }

    const deletePostId = async () => {
        try {
            console.log(match.params.id);
            navigate("/");
            await deletePostById({ id: match.params.id}).unwrap();
            await dispatch(deletePost(match.params.id));
            //redirect("/");

        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <article className="mb-4">
            <div className="container px-4 px-lg-5">
                {
                    token && (
                        <div className="d-flex justify-content-end mb-4">
                            <button className="btn btn-outline-primary me-3">Update Post</button>
                            <button onClick={() => deletePostId()} className="btn btn-outline-danger">Delete Post </button>
                        </div>
                    )
                }
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    {
                        content
                    }
                </div>
            </div>
        </article>
    );
}