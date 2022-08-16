const Works = () => {
    return (
        <section id="works">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0d6efd" fillOpacity="1" d="M0,288L80,256C160,224,320,160,480,149.3C640,139,800,181,960,208C1120,235,1280,245,1360,250.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className="container-fluid bg-primary">
                <div className="row">
                    <h2 className="display-5 fw-bold text-center text-light my-3">What I've built</h2>
                </div>
                <div className="row justify-content-center">
                    {
                        [...Array(6)].map(() => {
                            return <div
                                style={{width: 360, height:210}}
                                className="d-flex text-primary align-items-center justify-content-center display-6 bg-light m-3 rounded shadow">
                                Coming Soon
                            </div>
                        })
                    }
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0d6efd" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,160C640,139,800,117,960,144C1120,171,1280,245,1360,282.7L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </section>
    )
}

export default Works