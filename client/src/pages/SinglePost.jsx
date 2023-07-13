import { useSelector, useDispatch } from "react-redux";
import { useMatch, useNavigate, redirect } from "react-router-dom";
import { deletePostAsyncThunk, getPostByIdAsyncThunk } from "../redux/slice/postSlice.js";
import { useEffect } from "react";

export default function SinglePost() {
    const { singlePost } = useSelector((state) => state.post);
    let match = useMatch("/post/:id");
    const { token, error, loading } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let content;

    useEffect(() => {
        dispatch(getPostByIdAsyncThunk(match.params.id));
    }, [])

    if (error) {
        redirect("/error");
    }
    else if (singlePost) {
        content = (
            <div className="col-md-10 col-lg-8 col-xl-7 article ">
                <p className="fs-6">{singlePost.time}</p>
                <div dangerouslySetInnerHTML={{ __html: singlePost.content }}>
                </div>
            </div>
        )
    }

    const deletePostId = async () => {
        const confirm = window.confirm("Bu bloğu silmek istediğinizden emin misiniz?");

        if (!confirm) return;

        try {
            await dispatch(deletePostAsyncThunk(match.params.id));
            navigate("/");
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
                        <div className="d-flex justify-content-start mb-4">
                            <button onClick={() => deletePostId()} className="btn btn-danger" style={{ width: "10%"}}>Sil</button>
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