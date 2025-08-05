import { Button } from "react-bootstrap"
import PageNavbar from "../PageNavbar"
import { useState } from "react"
import ContactForm from "../ContactForm";

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return <div>
        <h1>Contact Me About Anything!</h1>
        <ContactForm/>
    </div>
}