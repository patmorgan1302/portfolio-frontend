import React from 'react';

const URL = 'http://localhost:3000/user';


class Title extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                users: [ ]
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
        users: result
        });
    })
    .catch(err => console.error(err));
    };

    
    render(){
        const{users} = this.state;
          return(
              <ul class="users-title">
                      {users.map(user => (
                          <div key={user}>
                          <div class="fullname">{user.full_name} </div>
                          <div class="email">{user.email}</div>
                  </div>))}
            </ul>
      )}}
      


export default Title;