import React from 'react';
// import Button from 'react-bootstrap/Button';

const URL = 'http://localhost:3000/bio';

class Bio extends React.Component{
    constructor(){
        super()
        this.state = {
            bios: [ ]
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
            bios: result
        });
    })
    .catch(err => console.error(err));
    };
    
    
   render(){
    const{bios} = this.state;
            return(
            <ul class="bl">
                {bios.map(bio => (
                    <li key={bio}>
                    <div class="bio">{bio.bio}</div>
            </li>))}
        </ul>
    )}}
    
    
    
export default Bio;
    




