import React from 'react';

class SkillsDELETE extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            _id: " ",
            visible: true
        }

this.handleSubmit = this.handleSubmit.bind(this);
}
    
handleSubmit(e){
    e.preventDefault(); 
    fetch('http://localhost:3000/skills', {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(this.state)
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
            <button onClick={()=>this.handleClick()} class="button is-primary">Add</button>
                {this.state.visible ? 
                    <div>
                        <div>
                            <button class="button" onClick={this.handleSubmit}>Delete</button>
                        </div>
                    </div>
                    :null}
        </div>
)}}
export default SkillsDELETE;