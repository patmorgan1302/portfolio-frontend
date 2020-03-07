import React from 'react';
import EducationInpsect from './education_inspect';

const URL = 'http://localhost:3000/education';

class EducationList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    educations: []
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
        educations: result
    });
})
  .catch(err => console.error(err));
};



render(){
  const{educations} = this.state;
    return(
      <ul class="el">
              {educations.map(education => (
                <div key={education}>
                <div class="box">
                  <EducationInpsect school_name = {education.school_name} course_of_study = {education.course_of_study} />
                </div>
            </div>))}
        </ul>
)}}


export default EducationList;
