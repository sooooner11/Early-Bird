import React from 'react';
import { Card,CardBody, Button, CardTitle, CardSubtitle,CardText, Row, Col } from 'reactstrap';
import Bird from '../images/bird.png';
import './CardItem.css'

export default class CardItem extends React.Component{
   render(){
   		let props=this.props;
		return (
			<Col sm={props.size} className="my-3">
			      <Card>
			        <CardBody>
			          <CardTitle>{props.cardTitle}</CardTitle>
			          <CardSubtitle>{props.cardSubTitle}</CardSubtitle>
			        </CardBody>
			        <img width="100%" height='auto' src={props.image} alt={Bird} className="img-fluid limitedhight"/>
			        <CardBody>
			          <CardText>{props.content}</CardText>
			          <a class="btn btn-primary" href="#" role="button">See More</a>
			        </CardBody>
			      </Card>

			</Col>


		)
	}
}

