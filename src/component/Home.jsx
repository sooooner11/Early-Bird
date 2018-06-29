import React from 'react';
import { Jumbotron, Button ,Col ,Row} from 'reactstrap';
import BirdImage from '../images/bird.png';
import RankingImage from '../images/Ranking.jpg';
import BlogImage from '../images/blog.jpg';
import './Home.css'
import HomeCards from './HomeCards.jsx'

const JumbotronPage = (props) => {
  return (
    <div>
      <Jumbotron className='pr-0'>
	      <Row className="d-flex align-items-center">
	      	<Col sm={6}>
		        <h2 className="display-4">Early Brid, <br/> Your Best Choice!</h2>
		    	<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus felis ipsum, cursus nec lacus ut, blandit vehicula felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tortor turpis, luctus et volutpat sit amet, egestas non urna..</p>
	    	</Col>
	    	<Col sm={6} className="limitedhight">
	        	<img src={BirdImage} className="img-fluid ml-auto limitedhight" width="100%" />
	        </Col>
	      </Row> 
        <hr className="my-2 mr-5" />
  
          <Button color="primary" href="/about">Learn More</Button>
       
      </Jumbotron>
    </div>
  );
};

let cards=[{size:6, cardTitle:'ranking',cardSubTitle:'ranking',content:'Aliquam luctus orci sed eros convallis condimentum. Fusce at egestas lectus, a finibus magna. Ut in risus neque. Integer quis augue dignissim, finibus tortor id, tempor lacus. ',goto:'/ranking',image:RankingImage},
			{size:6, cardTitle:'blogs',cardSubTitle:'blogs',content:'Proin eget elit orci. Phasellus a ornare ante, a ultricies enim. Praesent accumsan sodales nulla vitae lacinia. Praesent quis massa pharetra, tincidunt sem vel, tincidunt ante.',goto:'/posts',image:BlogImage},
			{size:6, cardTitle:'ranking',cardSubTitle:'ranking',content:'Aliquam luctus orci sed eros convallis condimentum. Fusce at egestas lectus, a finibus magna. Ut in risus neque. Integer quis augue dignissim, finibus tortor id, tempor lacus. ',goto:'/ranking',image:RankingImage},
			{size:6, cardTitle:'blogs',cardSubTitle:'blogs',content:'Proin eget elit orci. Phasellus a ornare ante, a ultricies enim. Praesent accumsan sodales nulla vitae lacinia. Praesent quis massa pharetra, tincidunt sem vel, tincidunt ante.',goto:'/posts',image:BlogImage},
			]

export default class Home extends React.Component{
	render(){
		return (
			<div className="container">
				<JumbotronPage/>
				<HomeCards cards={cards}/>
			</div>
			
		)
	}
} 

