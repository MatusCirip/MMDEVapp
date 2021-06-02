import Skill from "./skill";

const dataset = [
    {name: 'Typescript', proficiency: 100},
    {name: 'Javascript', proficiency: 75},
    {name: 'pyhon', proficiency: 50},
    {name: 'SQL', proficiency: 25},
    {name: 'Python', proficiency: 0}
    {name: 'Java', proficiency: 0}
    {name: 'SQL', proficiency: 0}
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
