import "../assets/css/modal.css";

export const Modal = ({ children, modalTitle, show, onClose }) => {
    if (!show) return null;

    const handleClickModal = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal__box" tabIndex={-1} onClick={handleClickModal}>
            <div className="modal__dialog modal__center">
                <div className="modal__content">
                    <div className="modal__header">
                        <h3 className="modal__title">{ modalTitle }</h3>
                        <button type="button" className="modal__btn-close" onClick={onClose}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill=""
                                className="bi bi-x-lg"
                                viewBox="0 0 16 16"
                            >
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="modal__body">{children}</div>
                    <div className="modal__footer">
                        <button
                            type="button"
                            className="modal__footer-btn footer__btn-secondary"
                            onClick={onClose}
                        >
                            Kapat
                        </button>
                        <button type="button" className="modal__footer-btn footer__btn-primary" disabled>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};