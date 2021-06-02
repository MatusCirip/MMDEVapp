import './skill.css';

const Skill = (props) => {
  return (
      <div className='row' data-aos="fade-up">
          <div className="col text-right dark-green-text">
              {props.name}
          </div>
          <div className="col">
              <div className='chart-bar'>
                <div className="chart-bar-inner" style={{width: props.proficiency + '%'}}>

                </div>
              </div>
              {/*{props.proficiency}*/}
          </div>
      </div>
  );
};

export default Skill;
