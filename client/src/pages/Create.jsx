import { Col, Container, Form, Row } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { createPostAsyncThunk } from '../redux/slice/postSlice.js';


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

export default function Create() {
    const [value, setValue] = useState('');
    const [heading, setHeading] = useState('');
    const [subheading, setSubheading] = useState('');
    const [mainImage, setMainImage] = useState('');

    const [formError, setFormError] = useState('');

    const imageInputRef = useRef(null);
    const quillRef = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (formError !== '') {
            setTimeout(() => {
                setFormError('');
            }, 2000);
        }
    }, [formError]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (heading === '' || subheading === '' || value === '' || mainImage === '') {
            setFormError('Please fill all the fields');
            return;
        }

        const formData = new FormData();

        formData.append('heading', heading);
        formData.append('subheading', subheading || "");
        formData.append('content', value);
        formData.append('image', mainImage);

        try {
            await dispatch(createPostAsyncThunk(formData));
        }
        catch (err) {
            console.log(err);
            return
        }

        imageInputRef.current.value = "";
        setHeading('');
        setSubheading('');
        setMainImage('');
        quillRef.current.getEditor().setText('');
        setValue('');
    };

    return (
        <Container className='py-5'>
            <Row className='justify-content-center' >
                <Col md={8} className=''>
                    {
                        formError !== '' && <div className="alert alert-danger" role="alert">{formError}</div>
                    }
                    <form onSubmit={handleSubmit} className="mx-auto">

                        <Form.Group className="mb-3" controlId="validationCustom01">
                            <Form.Label className='d-block'>Başlık</Form.Label>
                            <input
                                value={heading}
                                onChange={e => setHeading(e.target.value)}
                                type="text"
                                required
                                className='form-control'
                                placeholder="Enter blog heading"
                                maxLength={50}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="validationCustom02">
                            <Form.Label className='d-block'>Alt Başlık</Form.Label>
                            <input
                                value={subheading}
                                onChange={e => setSubheading(e.target.value)}
                                type="text"
                                className='form-control'
                                placeholder="Enter blog subheading"
                                maxLength={50}
                            />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Blog Resmi</Form.Label>
                            <Form.Control 
                                type="file" 
                                name="image"
                                accept='image/*'
                                ref={imageInputRef}
                                onChange={e => setMainImage(e.target.files[0])}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="validationCustom03">
                            <ReactQuill theme="snow" modules={modules} placeholder='Content goes here' onChange={setValue} ref={quillRef}/>
                        </Form.Group>

                        <div className="text-center mt-5">
                            <button className="btn text-white btn-next-post px-5 py-2 fs-5 rounded-none" type='button' onClick={e => handleSubmit(e)}>Oluştur</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}
