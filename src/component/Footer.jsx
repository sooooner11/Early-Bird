import React from 'react';
import {Row ,Col} from 'reactstrap';
import './Footer.css'
import Wheels from '../images/wheels.png';
import Staff1 from '../images/staff1.jpg';
import Staff2 from '../images/staff2.jpg';
import Staff3 from '../images/staff3.jpg'

export default class Footer extends React.Component{
	render(){

		return(
		<div className="footer">
			<div className="container mt-5" >
				<Row className="d-flex justify-content-between align-items-center">
					<Col sm={2} className="d-flex justify-content-center">
						<img src={Wheels} className='limitedheight img-fluid'/>
					</Col>
					<Col sm={5} className="d-flex justify-content-center">
						<div className="d-flex  align-items-center ">
							{/*<div className="staff mx-3"> Staffs:</div>*/}
							<h4 className="mb-0">Staff:</h4>
							<img src={Staff1} className="rounded-circle  staff mx-2"/>
							<img src={Staff2} className="rounded-circle  staff mx-2"/>
							<img src={Staff3} className="rounded-circle  staff mx-2"/>
						</div>
					</Col>
					<Col md={5} className="d-flex justify-content-center">
						<div className="d-flex align-items-center ">
							<h4 className="mb-0">Contact:</h4>
							<div className="info ml-3">
								 <p className="mb-0">Email: www.earlybird.com</p>
								 <p className="mb-0"> Tel : 111-2222-3333</p>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
		)
	}

}