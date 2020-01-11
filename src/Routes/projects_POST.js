import React from 'react';

class ProjectsPOST extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            project_name: " ",
            technologies_used: " ",
            visible: false
        }
this.onChangeName = this.onChangeName.bind(this);
this.onChangeTech = this.onChangeTech.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}
    
onChangeName(e){
    this.setState({project_name: e.target.value});
}

onChangeTech(e){
    this.setState({technologies_used: e.target.value});
}

handleSubmit(e){
    e.preventDefault(); 
    fetch('http://localhost:3000/projects', {
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
                                <input class="input is-rounded" value={this.state.project_name} placeholder="Proj Name" onChange={this.onChangeName}></input>
                                <input class="input is-rounded" value={this.state.technologies_used}  placeholder="Tech" onChange={this.onChangeTech}></input>
                                <button class="button" onClick={this.handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                    :null}
        </div>
)}}
export default ProjectsPOST;
