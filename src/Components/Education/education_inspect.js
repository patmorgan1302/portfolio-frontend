import React from 'react';
import { Button } from 'reactstrap';

const EducationInpsect = (props) => {
    return(
        <div>
            <div class="box">
                <article class="media">
                   <div class="media-content">
                        <div class="content">
                            <p>
                            <strong>{props.school_name}</strong> 
                            <small>{props.cours_of_study}</small> <small>31m</small>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                            </p>
                        </div>
                    </div>
                </article>
        <Button>Edit</Button> 
        </div>
    </div>)}

export default EducationInpsect;