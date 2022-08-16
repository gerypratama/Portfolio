

const About = () => {
    return (
        <section id="about">
            <div className='container-fluid bg-primary py-4'>
                <div className='row justify-content-around'>
                    <div className='col text-center mb-4'>
                        <h2 className='display-4 text-light'>About Me</h2>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-5'>
                        <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor felis a felis eleifend pellentesque. Nulla eu placerat leo, sed ultricies est. Fusce a tellus dui. Donec ultrices pulvinar libero sit amet tristique. Quisque sollicitudin mi a aliquam faucibus.</p>
                    </div>
                    <div className='col-5'>
                        <p className="text-light">Praesent luctus dolor urna. Donec nisi sapien, feugiat non mauris sit amet, rutrum pharetra justo. Suspendisse fringilla imperdiet quam, ullamcorper scelerisque lacus venenatis eget. Nullam quis pharetra risus, a pharetra risus.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About