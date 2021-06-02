import ProjectCard from "./projectCard";
import React from 'react';
import './projectCard.css';

const projects = [{
    name: 'Cipher Creator',
    date: '2021',
    desc: 'Cipher Creator je aplikácia určená na vytváranie a manažment historických šifier. Umožňuje konfiguráciu nových šifier, úpravu ich grafickej reprezentácie a následne použitie na šifrovanie a dešifrovanie textu. Užívateľovi poskytuje možnosť pracovať so šiframi v databáze pričom po prihlásení do užívateľského konta má možnosť do tejto databázy tiež ukladať svoje šifry. Poskytuje širokú škálu prispôsobenia grafickej reprezentácie šifry a umožňuje uloženie tejto štruktúry vo formáte PDF. Taktiež poskytuje moťnosť vytvárať obrázky vlastných znakov pomocou ktorých simuluje vlastný font, ktorý je možné využiť pri šifrovaní textu.',
    tech: 'Angular 8, Bootstrap 4, html2pdf',
    web: 'http://dp.mmdev.sk',
    git: '',
    img: 'assets/image1.jpg'
},{
    name: 'RecipeBook',
    date: 'oktober 2020',
    desc: 'Aplikácia ponukajúca funkcionalitu kuchárskej knihy a nákupného zoznamu. Užívateľovi ponúka možnosť evidencie zoznamu položiek na nákup, ktoré môže zadať manuálne alebo automaticky podľa ingrediencií uvedených v receptoch. Prístup do časti s receptami je poskytnutí po prihlásení užívateľa. V tejto časti je možné vytvárať a editovať recepty spolu s ich ingredienciami. RecipeBook taktiež ponúka možnosť nahrávania a ukladania receptov do databázy.',
    tech: 'Angular 8, Firebase database, Firebase hosting',
    web: 'http://recipebook-2643b.firebaseapp.com',
    git: 'https://github.com/MatusCirip/RecipeBook',
    img: ''
},{
    name: 'Tangram',
    date: '',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat porttitor est, sed iaculis urna facilisis id. Suspendisse at mollis mauris. Pellentesque nec lacinia nisl, id lobortis leo. Sed id turpis quis quam gravida condimentum. Fusce lorem nulla, pulvinar id dolor et, dictum cursus elit. Vestibulum vulputate ultricies lectus sit amet semper. Cras ante urna, sodales sit amet urna a, viverra imperdiet lacus. In vitae sapien ullamcorper, feugiat erat nec, pretium turpis',
    tech: 'Javascript',
    web: 'https://www.mmdev.sk/apps/tangram/index.html',
    git: 'git',
    img: ''
},{
    name: 'Expenses App',
    date: '2021',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat porttitor est, sed iaculis urna facilisis id. Suspendisse at mollis mauris. Pellentesque nec lacinia nisl, id lobortis leo. Sed id turpis quis quam gravida condimentum. Fusce lorem nulla, pulvinar id dolor et, dictum cursus elit. Vestibulum vulputate ultricies lectus sit amet semper. Cras ante urna, sodales sit amet urna a, viverra imperdiet lacus. In vitae sapien ullamcorper, feugiat erat nec, pretium turpis',
    tech: 'React',
    web: 'dp.mmdev.sk',
    git: 'git'
}];


const ProjectList = () => {
    return (
        <div className='container main-section' id='projects'>
            <div className="row justify-content-center" data-aos="fade-right">
                <div className="col-4">
                    <h2 className='light-green-text text-center section-name'>Projects</h2>
                </div>
            </div>
            {/*<div className="row justify-content-center">*/}
            {/*    <div className='col-12 col-md-10 col-lg-8'>*/}
                    {projects.map((project, index) => {
                        return <React.Fragment>
                            <ProjectCard data={projects[index]} orientation={index} key={index}/>
                            {index != projects.length-1 ? <hr className='divider'/> : ''}
                        </React.Fragment>
                    })}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default ProjectList;
