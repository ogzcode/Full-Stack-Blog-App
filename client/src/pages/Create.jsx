import { Col, Container, Form, Row } from 'react-bootstrap';
import { useState, useRef } from 'react';

import { useCreatePostMutation } from '../redux/services/authApi';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
    const [heading, setHeading] = useState('');
    const [subheading, setSubheading] = useState('');
    const [mainImage, setMainImage] = useState('');

    const imageInputRef = useRef(null);
    const quillRef = useRef(null);

    const [createPost, { isLoading, isError, isSuccess, error }] = useCreatePostMutation();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('heading', heading);
        formData.append('subheading', subheading);
        formData.append('content', value);
        formData.append('image', mainImage);

        try {
            await createPost({ formData });
        }
        catch (err) {
            setValidated(false);
        }

        imageInputRef.current.value = "";
        setHeading('');
        setSubheading('');
        setMainImage('');
        quillRef.current.getEditor().setText('');
        setValue('');
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
                                value={heading}
                                onChange={e => setHeading(e.target.value)}
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
                                value={subheading}
                                onChange={e => setSubheading(e.target.value)}
                                required
                                type="text"
                                placeholder="Enter blog subheading"
                                maxLength={50}
                            />
                            <Form.Control.Feedback type="invalid">Subheading is blank!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Main image</Form.Label>
                            <Form.Control 
                                type="file" 
                                name="image"
                                accept='image/*'
                                ref={imageInputRef}
                                onChange={e => setMainImage(e.target.files[0])}
                            />
                            <Form.Control.Feedback type="invalid">Main image is blank!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="validationCustom03">
                            <ReactQuill theme="snow" modules={modules} placeholder='Content goes here' onChange={setValue} ref={quillRef}/>
                            <Form.Control.Feedback type="invalid">Content is blank!</Form.Control.Feedback>
                        </Form.Group>

                        <div className="text-center mt-5">
                            <button className="btn text-white btn-next-post px-5 py-2 fs-5 rounded-none" type='button' onClick={e => handleSubmit(e)}>Create</button>
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
            <BlogForm />
        </div>
    );
};