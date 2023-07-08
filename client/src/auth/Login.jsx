import { Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginAsyncThunk } from "../redux/slice/postSlice";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const { loading } = useSelector((state) => state.post);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        try {
            dispatch(loginAsyncThunk({ email, password }));
            navigate("/home");
            setValidated(true);
        }
        catch (err) {
            setValidated(false);
            setEmail("");
            setPassword("");
            navigate("/error");
        }
    };

    return (
        <div className="login-page d-flex justify-content-center align-items-center">
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="bg-white rounded shadow" style={{ width: "32rem", padding: "4rem" }}>
                <h1 className="text-center mb-5">Login</h1>
                <Form.Group controlId="validationCustom01">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        type="email"
                        placeholder="Enter admin email"
                    />
                    <Form.Control.Feedback type="invalid">Incorrect email!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mt-2" controlId="validationCustom02">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        type="password"
                        placeholder="Enter admin password"
                    />
                    <Form.Control.Feedback type="invalid">Incorrect password!</Form.Control.Feedback>
                </Form.Group>
                <div className="text-center mt-5">
                    <button className="btn text-white btn-next-post px-5 py-2 fs-5 rounded-none" type="submit">
                        {
                            loading ? "Loading..." : "Login"
                        }
                    </button>
                </div>
            </Form>
        </div>
    );
}