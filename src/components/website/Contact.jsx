import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ctbj5gb', 'template_d5nnb9g', form.current, 'f_rrebR_FfMbUTijz').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <>
            <section className='my-5'>
                <div className="container-fluid">
                    <div className="my-5">
                        <h2 className='text-center'>Contact Us</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form ref={form} onSubmit={sendEmail} >
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input name='name' type="text" className="form-control"
                                        placeholder='Enter Your Name' required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input name='email' type="email" className="form-control"
                                        placeholder='Enter Your Email' required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="number" className="form-label">Phone</label>
                                    <input name='number' type="number" className="form-control"
                                        placeholder='Enter Your Number' required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea name='message' className="form-control" id="exampleFormControlTextarea1" placeholder='Enter Your Message' rows="3" required></textarea>
                                </div>
                                <input type="submit" className="btn btn-outline-primary" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
