import {Link} from "react-router-dom";

export default function Footer(){
    return(
        <section className="footer border-top border-primary bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <ul className="nav">
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link link-light">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="#details" className="nav-link link-light">Details</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link link-light">Contact</Link>
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <p className="text-end d-none d-md-block">
                            Copyright &copy; Blog Mastery 2023
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}