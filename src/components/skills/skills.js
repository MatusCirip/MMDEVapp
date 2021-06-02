import Skill from "./skill";

const dataset = [
    {name: 'HTML', proficiency: 85},
    {name: 'CSS', proficiency: 65},
    {name: 'Typescript', proficiency: 50},
    {name: 'Angular 8', proficiency: 50},
    {name: 'React', proficiency: 20},
    {name: 'Python', proficiency: 45},
    {name: 'Java', proficiency: 15},
    {name: 'SQL', proficiency: 25}
];


const Skills = () => {


    return (
        <div className='container main-section' id='skills'>
            <div className="row justify-content-center" data-aos="fade-right">
                <div className="col-4">
                    <h2 className='light-green-text text-center section-name'>Skills</h2>
                </div>
            </div>
            {dataset.map(skill => {
                return <Skill name={skill.name} proficiency={skill.proficiency}/>
            })}
        </div>
    )
};

export default Skills;
