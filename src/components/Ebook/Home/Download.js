import ebook from "../images/download-ebook.png";

export default function Download(){
    return(
        <section className="download">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="image-container mt-n6 mb-5">
                            <img src={ebook} alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="text-container text-white d-flex flex-column justify-content-center h-100 mb-5">
                            <h2 className="fw-bold">Get Your Free Ebook Now</h2>
                            <p>
                                Unlock the power of knowledge and take your blogging journey to
                                the next level. Our ebook, "Blog Mastery: The Ultimate Guide to
                                Blogging Success," is your key to success.
                            </p>
                            <form>
                                <div className="input-group mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                    />
                                    <button className="btn btn-primary text-white rounded-end">
                                        Download
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}