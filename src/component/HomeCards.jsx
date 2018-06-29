import React from 'react';
import {Row } from 'reactstrap';
import CardItem from './CardItem';

export default class HomeCards extends React.Component{
	render(){
		let {cards} =this.props;
		return (
			<Row>
				{cards.map((card,id)=>(
					<CardItem key={id} {...card}/>
				))}
			</Row>

		)
	}

}