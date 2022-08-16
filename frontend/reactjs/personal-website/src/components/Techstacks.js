const Techstacks = () => {
    const row1Icons = [
        'html5',
        'css3',
        'js',
        'bootstrap',
        'tailwind',
        'vscode'
    ];

    const row2Icons = [
        'npm',
        'react',
        'nextjs',
        'git',
        'figma'
    ];

    return (
        <section id="stacks">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0d6efd" fillOpacity="1" d="M0,224L120,197.3C240,171,480,117,720,122.7C960,128,1200,192,1320,224L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            <div className="container">
                <div className="row">
                    <h2 className="display-4 fw-semibold text-center text-secondary mb-5">Tech I'm familiar with</h2>
                </div>
                <div className="row justify-content-center mb-3">
                    {
                        row1Icons.map(icon => {
                            return <img
                                key={icon}
                                src={require(`../assets/ico/${icon}.png`)}
                                alt={icon}
                                style={{width: 125}}
                                className='px-3 py-1'
                            />
                        })
                    }
                </div>
                <div className="row justify-content-center mb-3">
                    {
                        row2Icons.map(icon => {
                            return <img
                                key={icon}
                                src={require(`../assets/ico/${icon}.png`)}
                                alt={icon}
                                style={{width: 125}}
                                className='px-3 py-1'
                            />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Techstacks