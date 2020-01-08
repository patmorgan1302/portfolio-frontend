import React from 'react';
import ProjectsPost from './projects_POST';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

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
      {projects.map(project => (
        <div key={project}>
          <div class="pl">
            <div>
              <Card>
               <CardImg top width="100%" src="https://unsplash.com/photos/xfngap_DToE" alt="Card image cap" />
                <CardBody>
                  <CardTitle>{project.project_name}</CardTitle>
                  <CardSubtitle>Written In: {project.technologies_used}</CardSubtitle>
                  <CardText>LINK TO PROJECT</CardText>
                  <Button>Edit</Button>
                </CardBody>
              </Card>
            </div>
            <ProjectsPost />
        </div>
    </div>))}
  </div>)}}


export default Projects;
