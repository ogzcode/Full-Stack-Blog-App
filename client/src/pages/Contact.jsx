import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createMessageAsyncThunk } from "../redux/slice/messageSlice";

export default function Contact() {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                setShow(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [show]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && email && message) {
            dispatch(createMessageAsyncThunk({ name, email, message }));
            setShow(true);
            setName("");
            setEmail("");
            setMessage("");
        }
    }

    return (
        <main className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <p className="fs-3 text-center">İletişime geçmek ister misiniz? Bana mesaj göndermek için aşağıdaki formu doldurun, size en kısa sürede geri döneceğim!</p>
                        {
                            show && <div className="alert alert-success alert-dismissible fade show" role="alert">Mesajınız gönderildi!</div>
                        }
                        <div className="my-5">
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-4">
                                    <input value={name} onChange={e => setName(e.target.value)} className="form-control" style={{ boxShadow: "none" }} id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                    <label>Name</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" style={{ boxShadow: "none" }} id="email" type="email" placeholder="Enter your email..." data-sb-validations="required,email" />
                                    <label>Email address</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <textarea value={message} onChange={e => setMessage(e.target.value)} className="form-control" style={{ boxShadow: "none", height: "12rem" }} id="message" placeholder="Enter your message here..." data-sb-validations="required"></textarea>
                                    <label>Message</label>
                                </div>
                                <div className="text-center">
                                    <button className="btn-next-post text-white text-uppercase px-5 py-2" type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}