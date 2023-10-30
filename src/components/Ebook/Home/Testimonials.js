import testimonial1 from "../images/testimonial-1.jpg"
import testimonial2 from "../images/testimonial-2.jpg"
import testimonial3 from "../images/testimonial-3.jpg"
export default function Testimonials(){
    const testimonials = [
        {
            image : testimonial1,
            text :"\"This ebook completely transformed my blogging journey. The practical strategies and valuable insights helped me take my blog to new heights. I highly recommend it!\"",
            fullName:"Kenny Smith - Portland, ME"
        },
        {
            image : testimonial2,
            text :"\"I'm so grateful for this ebook! It provided me with the guidance and inspiration I needed to create engaging content and build a loyal readership. It's a game-changer!\"",
            fullName:"Laurie Mitchell - Miami, FL"
        },
        {
            image : testimonial3,
            text :"\"I can't recommend this ebook enough. It's a treasure of blogging wisdom. It helped me unlock my creativity, connect with my audience, and achieve remarkable results.",
            fullName:"Henry White - Boston, MA"
        },


    ]

    return(
        <section className="testimonials mb-8">
            <div className="container">
                <div className="row">
                    {
                        testimonials.map((testimonial,index)=>(
                            <div className="col-md-4 text-center" key={index}>
                                <img
                                    src={testimonial.image}
                                    alt="image"
                                    className="rounded-circle mb-3"
                                />
                                <p className="lead fst-italic">
                                    {testimonial.text}
                                </p>
                                <p className="fw-bold">{testimonial.fullName}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}