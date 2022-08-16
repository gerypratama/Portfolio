const ContactForm = () => {
    return (
        <form className="p-5 text-secondary d-flex flex-column align-items-center" id="contact">
            <h2 className="mb-5 text-center display-5 fw-bold">Contact Form</h2>
            <div className="mb-3" style={{ "width": "60%" }}>
                <label htmlFor="exampleInputName" className="form-label">How may I call you?</label>
                <input type="text" className="form-control" id="exampleInputName" placeholder="John Doe" />
            </div>
            <div className="mb-3" style={{ "width": "60%" }}>
                <label htmlFor="exampleInputEmail1" className="form-label">Where can I reach you?</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="john.doe@example.com" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">I'll never share your email with anyone else.</div>
            </div>
            <div className="form-floating" style={{ "width": "60%" }}>
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea">Your message</label>
            </div>
            <button className="btn btn-primary mt-5" style={{ "width": "100px" }} >Submit</button>
        </form>
    )
}

export default ContactForm