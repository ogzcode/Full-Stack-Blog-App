import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { removeToken } from "../redux/slice/postSlice";


export default function NavBar() {
    const token = useSelector((state) => state.post.token);
    const location = useLocation().pathname;
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const isActive = (path) => {
        if (path === location) {
            return "active"
        }
        return ""
    }

    const handleLogout = () => {
        dispatch(removeToken());
        navigate("/");
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light" id="mainNav">
            <div className="container-fluid px-3 px-lg-5">
                <Link to={"/"} className="navbar-brand text-uppercase font-open-sans-800 ls-1 fs-3 text-dark">Clean Blog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end align-items-center"
                    id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-3">
                            <Link to={"/"} className={`${isActive("/")} nav-link font-open-sans-700 text-cyan`} aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to={"/about"} className={`${isActive("/about")} nav-link font-open-sans-700 text-cyan`}>About</Link>
                        </li>
                        {
                            token ?
                                <>
                                    <li className="nav-item mx-3">
                                        <Link to={"/create"} className={`${isActive("/create")} nav-link font-open-sans-700 text-cyan`}>Create Post</Link>
                                    </li>
                                    <li className="btn-icon nav-item mx-3 text-cyan" onClick={handleLogout}><i className="bi bi-box-arrow-right mx-auto"></i></li>
                                </>
                                :
                                <li className="nav-item mx-3">
                                    <Link to={"/login"} className={`${isActive("/create")} nav-link font-open-sans-700 text-cyan`}>Login</Link>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>

    );
}