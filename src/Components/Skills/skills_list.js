import React from 'react';
// import SkillsPOST from './skills_POST';
// import SkillsDELETE from './skills_DELETE';
import SkillInspect from './skill_inspect';
import SkillsPOST from './skills_POST';

const URL = 'http://localhost:3000/skills';

class SkillsList extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        skills: [],
}}
componentDidMount(){
  this.fetchedData();
}
 
fetchedData(){
  fetch(URL)
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        skillio : result
    });
})
  .catch(err => console.error(err));
};


render(){
  const{skills} = this.state;
    return(
        <div class="skills-list">
          <div class="box">
            {skills.map(skill => (
              <div key={skill}>
                <div className="skill-list-item">
                  <SkillInspect 
                  skillname={skill.skill_name} 
                  skilldescription={skill.skill_description}
                  deletebutton={skill._id}
                  />
                </div>
              </div>))}
            </div>
          <SkillsPOST />
        </div>)}}

export default SkillsList;
