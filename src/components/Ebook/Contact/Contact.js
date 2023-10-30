// eslint-disable-next-line no-unused-vars
import Svg from "../Svg";
import Map from "./Map";

export default function Contact(){
    return (
        <>
            <header className="header">
                <div className="hero text-white pt-7 pb-4">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-12">
                                <h1>Contact Information</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <Svg/>
            </header>
            <section className="contact bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name={"name"}
                                        className="form-control form-control-lg"
                                        placeholder={"name"}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        name={"email"}
                                        className="form-control form-control-lg"
                                        placeholder={"email"}
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className={"form-control form-control-lg"}
                                        name={"message"}
                                        rows={6}
                                        placeholder={"Message"}
                                    >

                                    </textarea>
                                </div>
                                <div className="d-grid">
                                    <button type={"submit"} className="btn btn-primary text-white mt-3">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Map/>
            </section>
        </>
    )
}