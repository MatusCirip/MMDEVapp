import './home.css';

const Home = () => {
    return (
    <div className='container main-section'>
        <div className='row justify-content-center'>

            <div className='col-12 col-md-6 order-md-1'>
                <div>
                    <h2 className='light-green-text'>Frontend Development</h2>
                </div>
                <p className='dark-green-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas volutpat porttitor est, sed iaculis urna facilisis
                    id. Suspendisse at mollis mauris. Pellentesque nec lacinia
                    nisl, id lobortis leo. Sed id turpis quis quam gravida
                    condimentum. Fusce lorem nulla, pulvinar id dolor et,
                    dictum cursus elit. Vestibulum vulputate ultricies lectus
                    sit amet semper. Cras ante urna, sodales sit amet urna a,
                    viverra imperdiet lacus. In vitae sapien ullamcorper,
                    feugiat erat nec, pretium turpis
                </p>
            </div>
            <div className='col-12 col-md-6 order-md-0'>
                obrazok
            </div>
        </div>
    </div>)
};

export default Home;
