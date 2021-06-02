import './navigation.css'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
    return (
        <Navbar expand="sm" className='dark-blue-background white-text'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home" className='white-text'><span className='white-text'>O mne</span></Nav.Link>
                    <Nav.Link href="#skills" className='white-text'><span className='white-text'>Technológie</span></Nav.Link>
                    <Nav.Link href="#projects" className='white-text'><span className='white-text'>Projekty</span></Nav.Link>
                    <Nav.Link href="#contact" className='white-text'><span className='white-text'>Kontakt</span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
};

export default Navigation;
