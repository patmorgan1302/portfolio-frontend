import React from 'react';
import SkillsPOST from './skills_POST';
import SkillsDELETE from './skills_DELETE';

const URL = 'http://localhost:3000/skills';

class SkillsList extends React.Component{
  constructor(){
    super();
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
        skills: result
    });
})
  .catch(err => console.error(err));
};


render(){
  const{skills} = this.state;
    return(
        <div class="skills-list">
                {skills.map(skill => (
                    <div key={skill}>
                    <div class="sn">{skill.skill_name} </div>
                    <div class="sd">{skill.skill_description}</div>
                    <SkillsDELETE />
            </div>))}
            <SkillsPOST />
      </div>
)}}

export default SkillsList;
