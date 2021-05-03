import React from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_neq9w58', 'template_zet3447', e.target, 'user_vlR0JoaZYNVVbGCDS3m01')
            .then((result) => {
                toast.success("Email has been sent successfully", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }, 
            (error) => {
                toast.error(error.text, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            });
        e.target.reset()
    }
    return (
        <div className="container">
            <h2 className="text-center text-uppercase">Send an instant email</h2>
            <form className="contact-form" onSubmit={sendEmail}>
                <input className="form-control" type="hidden" name="contact_number" />
                <label>Name</label>
                <input className="form-control" type="text" name="user_name" />
                <label>Email</label>
                <input className="form-control" type="email" name="user_email" />
                <label>Message</label>
                <textarea className="form-control" name="message" />
                <div className="button text-center mt-3">
                    <input className="btn btn-outline-warning" type="submit" value="Send Email" />
                </div>
            </form>
            <ToastContainer
            />
        </div>
    );
};

export default ContactForm;