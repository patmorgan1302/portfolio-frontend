import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const ProjInsect = (props) =>{
    return (
    <Card>
    <CardImg top width="100%" src="https://unsplash.com/photos/xfngap_DToE" alt="Card image cap" />
     <CardBody>
       <CardTitle>{props.projectname}</CardTitle>
       <CardSubtitle>Written In: {props.techused}</CardSubtitle>
       <CardText>LINK TO PROJECT</CardText>
       <Button>Edit</Button>
     </CardBody>
   </Card>
)}


export default ProjInsect;