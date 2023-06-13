import { Col, Container, Form, Row } from 'react-bootstrap';
import { useState, useRef } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer';

import create from '../assets/img/create-blog-page.jpg';


const modules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline"],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        ["link", "image"]
    ]
};

function BlogForm() {
    const [validated, setValidated] = useState(false);
    const [value, setValue] = useState('');
    const quillRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const quill = quillRef.current.getEditor();
        const content = quill.getContents();

        console.log("value", value);
        setValidated(true);
    };

    return (
        <Container className='py-5'>
            <Row className='justify-content-center' >
                <Col md={8} className=''>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="mx-auto">

                        <Form.Group className="mb-3" controlId="validationCustom01">
                            <Form.Label>Heading</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter blog heading"
                                maxLength={50}
                            />
                            <Form.Control.Feedback type="invalid">Heading is blank!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="validationCustom02">
                            <Form.Label>Subheading</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter blog subheading"
                                maxLength={50}
                            />
                            <Form.Control.Feedback type="invalid">Subheading is blank!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Main image</Form.Label>
                            <Form.Control type="file" />
                            <Form.Control.Feedback type="invalid">Main image is blank!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="validationCustom03">
                            <ReactQuill theme="snow" modules={modules} placeholder='Content goes here' onChange={setValue} ref={quillRef}/>
                            <Form.Control.Feedback type="invalid">Content is blank!</Form.Control.Feedback>
                        </Form.Group>

                        <div className="text-center mt-5">
                            <button className="btn text-white btn-next-post px-5 py-2 fs-5 rounded-none" type='button' onClick={e => handleSubmit(e)}>Login</button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default function Create() {
    return (
        <div>
            <NavBar />
            <Header img={create} heading="Create blog" subheading="A Blog Theme by Start Bootstrap" />
            <BlogForm />
            <Footer />
        </div>
    );
};