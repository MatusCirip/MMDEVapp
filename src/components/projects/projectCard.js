import './projectCard.css';


const ProjectCard = (props) => {

    return (
        <div className='container dark-green-text project-card' data-aos="fade-up">
            <div className={`row ${+props.orientation % 2 !== 0 ? "justify-content-end" : ""} `}>
                <div className={`col-12 col-sm-6 ${+props.orientation % 2 !== 0 ? "text-right" : ""}`}>
                    <h3>{props.data.name}</h3>
                    <p>{props.data.date}</p>
                </div>

            </div>
            <div className="row">
                <div className={`col-12 col-sm-6 ${+props.orientation % 2 !== 0 ? "order-1 text-right" : ""} `}>

                    <p>{props.data.desc}</p>
                    <p>Technology: {props.data.tech}</p>
                </div>
                <div className={`col-12 col-sm-6 d-none d-sm-block ${+props.orientation % 2 !== 0 ? "order-0" : ""} `}>
                    <img className='project-image' src={"assets/image1.jpg"} width='50%'/>
                    <br/>
                    <br/>
                    <div className='project-image'>
                        <a href={props.data.web} className='btn project-btn light-green-text'>Web</a>
                        <a href={props.data.git} className='btn project-btn light-green-text'>Git</a>
                    </div>
                </div>
                <div className="col-12 d-block d-sm-none order-2">
                    <a href={props.data.web} className='btn project-btn light-green-text'>Web</a>
                    <a href={props.data.git} className='btn project-btn light-green-text'>Git</a>
                </div>
            </div>


        </div>
    );
};

export default ProjectCard;
