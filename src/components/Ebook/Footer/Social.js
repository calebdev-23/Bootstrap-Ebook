import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFaceSmile,
    faHomeUser,
    faInstitution,
    faUsers
} from "@fortawesome/free-solid-svg-icons";

export default function Social(){
    return(
        <section className="social text-bg-dark py-6 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center fs-4">
                        <p>
                            Stay connected and join our vibrant community. For any inquiries
                            or assistance, feel free to reach out to us
                        </p>
                        <div className="social-icons d-flex justify-content-center gap-4">
                            <FontAwesomeIcon icon={faInstitution} className={"fa-1x text-primary"}/>
                            <FontAwesomeIcon icon={faHomeUser} className={"fa-1x text-secondary"}/>
                            <FontAwesomeIcon icon={faUsers} className={"fa-1x text-light"}/>
                            <FontAwesomeIcon icon={faFaceSmile} className={"fa-1x text-secondary"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}