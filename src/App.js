import './App.css';
import React, { useState }from 'react'
import Navigation from "./components/navigation/navigation";
import Home from "./components/home-section/home";
import Skills from "./components/skills/skills";
import ProjectList from "./components/projects/projectList";
import Contact from "./components/contact/contact";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Credits from "./components/credits-modal/credits";

function App() {
    Aos.init();
    const [creditsState, setCreditsState] = useState(false);

    const openModal = () => {
        setCreditsState(true);
    };

  return (
      <React.Fragment>
        <Navigation/>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <Home/>
                    <Skills/>
                    <ProjectList/>
                    <Contact/>
                </div>
            </div>
        </div>

        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        Updated 2021 -
                        <a className='footer' href="https://icons8.com/icon/Zyg3Hc8AJoIX/mail">&nbsp;Mail icon by Icons8</a>
                        <a className='footer' href="https://icons8.com/icon/AZOZNnY73haj/github">&nbsp;GitHub icon by Icons8</a>
                        <a className='footer' href="https://icons8.com/icon/447/linkedin">&nbsp;LinkedIn icon by Icons8</a>
                    </div>
                </div>
            </div>
        </footer>
      </React.Fragment>
  );
}

export default App;
