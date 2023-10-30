import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faRocket} from "@fortawesome/free-solid-svg-icons/faRocket";
import {faDollar} from "@fortawesome/free-solid-svg-icons/faDollar";

export default function Icons(){
    const items = [
        {
            titre : "Unlock Your Blogging Potential",
            content:" Discover the key to unleashing your true blogging potential. Our ebook provides expert guidance on creating compelling content",
            icon: faUser,
            iconColor:"primary"
        },
        {
            titre : "Skyrocket Your Blog's Success",
            content:"Take your blog to new heights with our proven strategies for driving traffic and increasing your blog's visibility",
            icon: faRocket,
            iconColor:"secondary"
        },
        {
            titre : "Monetize Your Blog",
            content:"DiTurn your passion for blogging into a profitable venture. Our ebook reveals tried-and-tested monetization strategies",
            icon: faDollar,
            iconColor:"primary"
        },
    ]
    return(
        <section className="icons bg-light pb-5">
            <div className="container-xl">
                <div className="row hstack g-4">
                    {
                        items.map((item, index)=> <Icon titre={item.titre} content={item.content} icon={item.icon} key={index} color={item.iconColor}
                        />)
                    }
                </div>
            </div>
        </section>
    )
}
function Icon({titre, content, icon, color}){
    return(
        <div className="col-md-4 d-flex gap-4">
            <FontAwesomeIcon icon={icon} className={`fa-3x text-${color}`}/>
            <div>
                <h5 className="fw-bold">{titre}</h5>
                <p className="text-muted">
                    {content}
                </p>
            </div>
        </div>
    )
}