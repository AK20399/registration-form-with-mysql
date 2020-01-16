import React, { Component } from 'react';
// reactstrap components
import { Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

// core components

class IndexHeader extends Component {
	render() {
		return (
			<>
				<div
					className='page-header section-dark'
					style={{
						backgroundImage:
							'url(' + require('assets/img/antoine-barres.jpg') + ')',
					}}>
					<div className='filter' />
					<div className='content-center'>
						<Container>
							<div className='title-brand'>
								<h1 className='presentation-title'>Register For New Feature</h1>
								<Link to='/register'>
									<Button
										className='btn-round mr-1'
										color='danger'
										outline
										type='button'
										style={{ fontSize: '40px', zIndex: 50 }}>
										Click Here For Register
									</Button>
								</Link>
								<div className='fog-low' style={{ zIndex: -4 }}>
									<img alt='...' src={require('assets/img/fog-low.png')} />
								</div>
								<div className='fog-low right' style={{ zIndex: -3 }}>
									<img alt='...' src={require('assets/img/fog-low.png')} />
								</div>
							</div>
						</Container>
					</div>
					<div
						className='moving-clouds'
						style={{
							backgroundImage: 'url(' + require('assets/img/clouds.png') + ')',
							zIndex: -5,
						}}
					/>
				</div>
			</>
		);
	}
}

export default IndexHeader;
