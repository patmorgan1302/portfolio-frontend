import React from 'react';
import './navigation.css';

class Navigation extends React.Component{
  render() {
    return (
        <div>
           <ul id="nav">
               <li><a href="Skills">Skills</a></li>
               <li><a href="Education">Education</a></li>
               <li><a href="Projects">Projects</a></li>
            </ul>
         </div>
);
}}
export default Navigation;