import React from 'react';

const URL = 'http://localhost:3000/education';

class Education extends React.Component{
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
                <div class="sn">{education.school_name} </div>
                <div class="cos">{education.course_of_study}</div>
            </div>))}
        </ul>
)}}


export default Education;
