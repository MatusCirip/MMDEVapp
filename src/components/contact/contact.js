import ContactForm from "./contactForm";

const Contact = () => {


    return (
        <div className='container main-section' id='contact'>
            <div className="row justify-content-center" data-aos="fade-right">
                <div className="col-4">
                    <h2 className='light-green-text text-center section-name'>Contact</h2>
                </div>
            </div>
            <div className="row"  data-aos="fade-up">
                <div className="col-12 col-sm-6 dark-green-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat porttitor est, sed iaculis urna facilisis id. Suspendisse at mollis mauris. Pellentesque nec lacinia nisl, id lobortis leo. Sed id turpis quis quam gravida condimentum. Fusce lorem nulla, pulvinar id dolor et, dictum cursus elit. Vestibulum vulputate ultricies lectus sit amet semper. Cras ante urna, sodales sit amet urna a, viverra imperdiet lacus. In vitae sapien ullamcorper, feugiat erat nec, pretium turpis</p>
                    <div className='icons-paragraph'>
                        <a href='https://www.linkedin.com/in/matus-cirip-b934a812b/'><img src={'assets/icon-linkedin.png'} alt="icon" className='contact-icon'/></a>
                        <a href='https://github.com/MatusCirip'><img src={'assets/icon-github.png'} alt="icon" className='contact-icon'/></a>
                        <a href='mailto:matus.mmdev@gmail.com'><img src={'assets/icon-mail.png'} alt="icon" className='contact-icon' /></a>
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
};

export default Contact;
