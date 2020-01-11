import React from 'react';

class SkillsDELETE extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            _id: [ ],
        }

this.handleSubmit = this.handleSubmit.bind(this);
}
    
handleSubmit(e){
    e.preventDefault(); 
    fetch('http://localhost:3000/skills/_id', {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(this.state._id)
    })
    .then(res => {
        return res.json();
    })
    .then()
    .catch(err => console.error(err));
}

showhideHandler(e){
    this.setState({
        visible : !this.state.visible
    })
}
handleClick(){
    this.setState({
        visible: !this.state.visible
    })
}

render(){
    return(
            <div>
                <button class="button" onClick={this.handleSubmit}>Delete</button>
            </div>
)}}
export default SkillsDELETE;