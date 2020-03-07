import React from 'react';
import ProjectsPost from './projects_POST';
import ProjInspect from './projects_inspect'

const URL = "http://localhost:3000/projects";

class Projects extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            projects: [ ]
        }
    }

componentDidMount(){
  this.fetchedData();
}
 

fetchedData(){
  fetch(URL)
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        projects: result
    });
})
  .catch(err => console.error(err));
};

render(){
  const{projects} = this.state;
    return(
      <div class="projects-list">
        <div class="box">
          {projects.map(project => (
          <div key={project}>
            <div>
              <ProjInspect projectname = {project.project_name} techused = {project.technologies_used} />
            </div>
          </div>))}
        </div>
      <ProjectsPost />
    </div>)}}

export default Projects;
