import React from 'react';
import SkillsDELETE from './skills_DELETE';
import { Button } from 'reactstrap';

const SkillInspect = (props) => {
    return(
        <div>
            <div class="box">
                <article class="media">
                   <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>{props.skillname}</strong> 
                                <small>{props.skilldescription}</small> <small>31m</small>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                            </p>
                        </div>
                    </div>
                </article>
            <Button>Edit</Button> 
        <SkillsDELETE class="button is-danger"/>
        </div>
    </div>)}

export default SkillInspect;