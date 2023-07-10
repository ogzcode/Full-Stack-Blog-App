export default function Contact() {
    return (
        <main className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <p className="fs-3 text-center">Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                        <div className="my-5">
                            <form id="contactForm">
                                <div className="form-floating mb-4">
                                    <input className="form-control" style={{ boxShadow: "none"}} id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                    <label>Name</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                <div className="form-floating mb-4">
                                    <input className="form-control" style={{ boxShadow: "none"}} id="email" type="email" placeholder="Enter your email..." data-sb-validations="required,email" />
                                    <label>Email address</label>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                <div className="form-floating mb-4">
                                    <textarea className="form-control" style={{ boxShadow: "none", height: "12rem"}} id="message" placeholder="Enter your message here..." data-sb-validations="required"></textarea>
                                    <label>Message</label>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary text-uppercase px-5" type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}