import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow fixed-top">
            <div className="container py-1">
                <a className="navbar-brand text-uppercase" href="#">gery.dev</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tech Stacks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Works</a>
                        </li>
                        <li>
                            <a className="btn btn-warning" href="#" role="button">Say hi!</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar