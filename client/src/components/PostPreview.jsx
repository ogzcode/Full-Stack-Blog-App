import { Link } from "react-router-dom";

export default function PostPreview({ post }) {
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