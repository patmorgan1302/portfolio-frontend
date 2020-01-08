import React from 'react';

class EduCRUD extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            school_name: " ",
            course_of_study: " "
        }
this.onChangeName = this.onChangeName.bind(this);
this.onChangeCourse = this.onChangeCourse.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}
    
onChangeName(e){
    this.setState({school_name: e.target.value});
}

onChangeCourse(e){
    this.setState({course_of_study: e.target.value});
}

handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:3000/education', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(this.state)
    })
    .then(res => {
        return res.json();
    })
    .catch(err => console.error(err));
}
render(){
    return(
        <div>
            <form>
                <label>
                    <input type="text" placeholder="Yoooo" value={this.state.school_name} onChange={this.onChangeName} />
                    <input type="text" placeholder="Yoooo" value={this.state.course_of_study} onChange={this.onChangeCourse}  />
                    <button onClick={this.handleSubmit}>Submit</button>
                </label>
            </form>
        </div>
    )
}}

export default EduCRUD;