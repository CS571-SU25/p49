import { Form, Button, Row, Col } from 'react-bootstrap';
import { useRef } from 'react';

export default function ContactForm() {

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;

        const resp = await fetch("https://cs571api.cs.wisc.edu/rest/su25/bucket/userinfo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CS571-ID": "bid_8a642a2c59dce30adaa9bb00163741e9b40c683a4d0346faa7b5e5c1b427c96b"
            },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "message": message
            })
        })

        alert("message successfully sent");

        nameRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
    }
    return (
        <Form className="my-form" onSubmit={handleSubmit}>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="formName" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" ref={nameRef}/>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Your@email.com" ref={emailRef}/>
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Message" ref={messageRef}/>
            </Form.Group>

            <Button type="submit" className="submit-btn">Submit</Button>
        </Form>
    );
}
