import React from 'react';

class SkillsPOST extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            skill_name: " ",
            skill_description: " ",
            visible: false
        }
this.onChangeName = this.onChangeName.bind(this);
this.onChangeDescription = this.onChangeDescription.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}
    
onChangeName(e){
    this.setState({skill_name: e.target.value});
}

onChangeDescription(e){
    this.setState({skill_description: e.target.value});
}

handleSubmit(e){
    // e.preventDefault(); 
    fetch('http://localhost:3000/skills', {
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
    .then()
    .catch(err => console.error(err));
    e.preventDefault(); 

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
                        <form className='container' noValidate autoComplete="off">
                            <div>
                                <input class="input is-rounded" value={this.state.skill_name} placeholder="Skill Name" onChange={this.onChangeName}></input>
                                <input class="input is-rounded" value={this.state.skill_description}  placeholder="Skill Descripton" onChange={this.onChangeDescription}></input>
                                <button class="button" onClick={this.handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                    :null}
        </div>
)}}
export default SkillsPOST;