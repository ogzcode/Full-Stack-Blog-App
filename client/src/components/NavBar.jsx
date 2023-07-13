import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slice/postSlice";

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
        dispatch(logout());
        navigate("/");
    }

    return (
        <nav className="navbar navbar-expand-lg py-4" style={{ backgroundColor: "rgba(255,255,255,.8)"}} id="mainNav">
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
                            <Link to={"/"} className={`${isActive("/home")} nav-link font-open-sans-700 text-cyan`} aria-current="page">Anasayfa</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to={"/about"} className={`${isActive("/about")} nav-link font-open-sans-700 text-cyan`}>Hakkımda</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to={"/contact"} className={`${isActive("/contact")} nav-link font-open-sans-700 text-cyan`}>İletişim</Link>
                        </li>
                        {
                            token ?
                                <>
                                    <li className="nav-item mx-3">
                                        <Link to={"/create"} className={`${isActive("/create")} nav-link font-open-sans-700 text-cyan`}>Yeni Blog</Link>
                                    </li>
                                    <li className="nav-item mx-3">
                                        <Link to={"/messages"} className={`${isActive("/messages")} nav-link font-open-sans-700 text-cyan`}>Mesajlarım</Link>
                                    </li>
                                    <li className="btn-icon nav-item mx-3 text-cyan" onClick={handleLogout}><i className="bi bi-box-arrow-right mx-auto"></i></li>
                                </>
                                :
                                <li className="nav-item mx-3">
                                    <Link to={"/login"} className={`nav-link font-open-sans-700 text-cyan`}>Giriş</Link>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>

    );
}