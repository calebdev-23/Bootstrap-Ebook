import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquare} from "@fortawesome/free-solid-svg-icons";
import description from "../images/description.png";
import Statement from "./Statement";
import author from "../images/author.png";
export default function Details(){
    return(<>
            <section id="details" className="details my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-container d-flex flex-column justify-content-center h-100">
                                <h2 className="display-6">Unlock Your Blogging Potential</h2>
                                <p>
                                    Are you ready to unleash your true blogging potential? Our
                                    ebook, "Blog Mastery," provides you with the tools and knowledge
                                    to take your blog to the next level.
                                </p>
                                <ul className="list-group list-group-flush lh-lg">
                                    <li className="list-group-item">
                                        <FontAwesomeIcon icon={faSquare} className={"text-primary me-1"}/>
                                        <strong>Unleash Your Creativity:</strong> Our ebook empowers
                                        you to unleash your creativity and express your unique voice
                                        through your blog.
                                    </li>
                                    <li className="list-group-item">
                                        <FontAwesomeIcon icon={faSquare} className={"text-primary me-1"}/>
                                        <strong>Maximize Your Reach:</strong> Learn how to optimize
                                        your blog for search engines.
                                    </li>
                                    <li className="list-group-item">
                                        <FontAwesomeIcon icon={faSquare} className={"text-primary me-1"}/>
                                        <strong>Monetization Strategies:</strong> Discover various
                                        monetization strategies, such as sponsored content & affiliate
                                        marketing.
                                    </li>
                                </ul>
                                <a
                                    className="btn btn-primary text-white mt-4 align-self-start"
                                    data-bs-toggle={"modal"} data-bs-target={"#modal1"}
                                >
                                    Get your Copy Now
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-container p-5">
                                <img src={description} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Statement/>
            <section id="details" className="details my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-container p-5">
                                <img src={author} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-container d-flex flex-column justify-content-center h-100">
                                <h2 className="display-6">Craft Remarkable Content</h2>
                                <p>
                                    Discover techniques for effective storytelling, engaging
                                    visuals, and compelling calls-to-action. Unlock the secrets of
                                    creating a consistent and authentic brand voice that sets you
                                    apart from the competition.
                                </p>
                                <ul className="list-group list-group-flush lh-lg">
                                    <li className="list-group-item">
                                        <FontAwesomeIcon icon={faSquare} className={"text-primary me-1"}/>
                                        <strong>Embrace Your Unique Voice:</strong> Learn how to
                                        harness the power of your unique voice.
                                    </li>
                                    <li className="list-group-item">
                                        <FontAwesomeIcon icon={faSquare} className={"text-primary me-1"}/>
                                        <strong>Spark Creativity:</strong> Explore techniques to spark
                                        creativity and overcome writer's block.
                                    </li>
                                    <li className="list-group-item">
                                        <FontAwesomeIcon icon={faSquare} className={"text-primary me-1"}/>
                                        <strong>Engage Your Readers:</strong> Discover strategies for
                                        creating content that engages your readers on a deeper level.
                                    </li>
                                </ul>
                                <a
                                    className="btn btn-primary text-white mt-4 align-self-start"
                                    data-bs-toggle={"modal"} data-bs-target={"#modal2"}
                                >
                                    Free Download
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id={"modal1"} className="modal fade">
                <div className="modal-dialog modal-lg mt-7">
                    <div className="modal-content p-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="image-container">
                                    <img src={description} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="text-container">
                                    <h2 className="display-6">Unlock Your Blogging Potential</h2>
                                    <p>
                                        Are you ready to unleash your true blogging potential? Our
                                        ebook, "Blog Mastery," provides you with the tools and knowledge
                                        to take your blog to the next level.
                                    </p>
                                    <ul className="list-group list-group-flush lh-lg">
                                        <li className="list-group-item">
                                            <FontAwesomeIcon icon={faSquare} className={"text-primary me-1"}/>
                                            <strong>Unleash Your Creativity:</strong> Our ebook empowers
                                            you to unleash your creativity and express your unique voice
                                            through your blog.
                                        </li>
                                        <li className="list-group-item">
                                            <FontAwesomeIcon icon={faSquare} className={"text-primary me-1"}/>
                                            <strong>Maximize Your Reach:</strong> Learn how to optimize
                                            your blog for search engines.
                                        </li>
                                        <li className="list-group-item">
                                            <FontAwesomeIcon icon={faSquare} className={"text-primary me-1"}/>
                                            <strong>Monetization Strategies:</strong> Discover various
                                            monetization strategies, such as sponsored content & affiliate
                                            marketing.
                                        </li>
                                    </ul>
                                    <a href="" className="btn btn-primary text-white">
                                        Free Download
                                    </a>
                                    <button className={"btn btn-light"} data-bs-dismiss={"modal"}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="modal2" className="modal fade">
                <div className="modal-dialog modal-lg mt-7">
                    <div className="modal-content p-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="image-container">
                                    <img src={author} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="text-container">
                                    <h3 className="display-6">Craft Remarkable Content</h3>

                                    <p>
                                        Discover techniques for effective storytelling, engaging
                                        visuals, and compelling calls-to-action. Unlock the secrets of
                                        creating a consistent and authentic brand voice that sets you
                                        apart from the competition.
                                    </p>
                                    <ul className="list-group list-group-flush lh-lg mb-3">
                                        <li className="list-group-item">
                                            <FontAwesomeIcon icon={faSquare} className={"text-primary me-1"}/>
                                            <strong>Embrace Your Unique Voice:</strong> Learn how to
                                            harness the power of your unique voice.
                                        </li>
                                        <li className="list-group-item">
                                            <FontAwesomeIcon icon={faSquare} className={"text-primary me-1"}/>
                                            <strong>Spark Creativity:</strong> Explore techniques to
                                            spark creativity and overcome writer's block.
                                        </li>
                                        <li className="list-group-item">
                                            <FontAwesomeIcon icon={faSquare} className={"text-primary me-1"}/>
                                            <strong>Engage Your Readers:</strong> Discover strategies
                                            for creating content that engages your readers on a deeper
                                            level.
                                        </li>
                                    </ul>
                                    <a href="" className="btn btn-primary text-white">Free Download</a>
                                    <button className="btn btn-light" data-bs-dismiss="modal">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}