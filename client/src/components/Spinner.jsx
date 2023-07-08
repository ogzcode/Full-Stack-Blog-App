export default function Spinner({ size = "spinner-sm" }) {
    return (
        <div className="d-flex bg-transparent justify-content-center align-items-center flex-column"
            style={{ height: "30rem" }}>
            <p className="fs-2 font-open-sans-800 text-uppercase mb-4">Loading...</p>
            <div className={`spinner-border text-info ${size}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}