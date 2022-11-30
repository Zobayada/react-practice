import React from 'react'

const Contact = () => {
    return (
        <>
            <section className='my-5'>
                <div className="container-fluid">
                    <div className="my-5">
                        <h2 className='text-center'>Contact Us</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Name</label>
                                    <input type="text" class="form-control"
                                        placeholder='Enter Your Name' required
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email</label>
                                    <input type="email" class="form-control"
                                        placeholder='Enter Your Email' required
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Phone</label>
                                    <input type="number" class="form-control"
                                        placeholder='Enter Your Number' required
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Enter Your Message' rows="3" required></textarea>
                                </div>
                                <div className="mx-auto">
                                    <button type="submit" class="btn btn-outline-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
