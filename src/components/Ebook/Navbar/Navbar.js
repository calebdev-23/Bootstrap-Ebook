import logo from "../images/logo.png";
import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top ">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="" style={{ width:225}}/>
                </Link>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link fw-semibold">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="#details" className="nav-link fw-semibold">
                                Details
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className=" btn btn-outline-light fw-semibold  mx-0 mx-lg-4 px-lg-4">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}