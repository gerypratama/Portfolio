const Footer = () => {
    const socialIcons = [
        'linkedin',
        'github',
        'instagram',
    ];
    return (
        <footer>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0d6efd" fillOpacity="1" d="M0,192L60,192C120,192,240,192,360,197.3C480,203,600,213,720,229.3C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div className="container-fluid d-flex flex-column px-5 pt-3 bg-primary mt-0">
                <div className="row">
                    <blockquote className="text-center text-light display-6">
                        <p>Keep learning, stay alive,</p>
                        <p>one day at a time.</p>
                    </blockquote></div>
                <div className="row justify-content-center">
                    {
                        socialIcons.map(icon => {
                            return <img
                                key={icon}
                                src={require(`../assets/ico/${icon}.png`)}
                                alt={icon}
                                style={{ "width": "60px" }}
                                className="mx-3 my-5"
                            />
                        })
                    }
                </div>
                <div className="row">
                    <p className="text-center text-light mb-0">Built by me &copy;2022</p>
                </div>
                <div className="row text-center text-light mb-3">
                    <p>Powered by:&nbsp;
                        <span><a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener" className="text-light">React.js</a></span> ,
                        <span><a href="https://getbootstrap.com/" target="_blank" rel="noreferrer noopener" className="text-light">Bootstrap 5</a></span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer