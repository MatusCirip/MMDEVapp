import ProjectCard from "./projectCard";
import React from 'react';
import './projectCard.css';

const projects = [{
    name: 'CipherCreator',
    date: '2020',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat porttitor est, sed iaculis urna facilisis id. Suspendisse at mollis mauris. Pellentesque nec lacinia nisl, id lobortis leo. Sed id turpis quis quam gravida condimentum. Fusce lorem nulla, pulvinar id dolor et, dictum cursus elit. Vestibulum vulputate ultricies lectus sit amet semper. Cras ante urna, sodales sit amet urna a, viverra imperdiet lacus. In vitae sapien ullamcorper, feugiat erat nec, pretium turpis',
    tech: 'Angular',
    web: 'dp.mmdev.sk',
    git: 'git'
},{
    name: 'RecipeBook',
    date: '2020',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat porttitor est, sed iaculis urna facilisis id. Suspendisse at mollis mauris. Pellentesque nec lacinia nisl, id lobortis leo. Sed id turpis quis quam gravida condimentum. Fusce lorem nulla, pulvinar id dolor et, dictum cursus elit. Vestibulum vulputate ultricies lectus sit amet semper. Cras ante urna, sodales sit amet urna a, viverra imperdiet lacus. In vitae sapien ullamcorper, feugiat erat nec, pretium turpis',
    tech: 'Angular, firebase',
    web: 'dp.mmdev.sk',
    git: 'git'
},{
    name: 'Tangram',
    date: '2020',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat porttitor est, sed iaculis urna facilisis id. Suspendisse at mollis mauris. Pellentesque nec lacinia nisl, id lobortis leo. Sed id turpis quis quam gravida condimentum. Fusce lorem nulla, pulvinar id dolor et, dictum cursus elit. Vestibulum vulputate ultricies lectus sit amet semper. Cras ante urna, sodales sit amet urna a, viverra imperdiet lacus. In vitae sapien ullamcorper, feugiat erat nec, pretium turpis',
    tech: 'Javascript',
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
