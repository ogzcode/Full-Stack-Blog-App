import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="error-page min-vh-100 bg-danger d-flex justify-content-center align-items-center flex-column">
            <h1 className="fw-bold text-white">404</h1>
            <h3 className="fw-light text-white mb-5">Sorry, the page you tried cannot be found</h3>
            <Link to="/" className="bg-white text-decoration-none px-5 py-3 rounded-pill text-uppercase fw-bold"> Back Home </Link>
        </div>
    );
}