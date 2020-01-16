import React, { Component } from 'react';
import { FormGroup, Input, FormFeedback } from 'reactstrap';

class InputGroup extends Component {
	render() {
		return (
			<div>
				<FormGroup>
					<span>
						<b>{this.props.name}</b>
					</span>
					{this.props.errors ? (
						<Input
							invalid
							type={this.props.type}
							name={this.props.name}
							value={this.props.value}
							onChange={this.props.onChange}
						/>
					) : (
						<Input
							type={this.props.type}
							name={this.props.name}
							placeholder={this.props.placeholder}
							value={this.props.value}
							onChange={this.props.onChange}
						/>
					)}
					<FormFeedback>
						<b>{this.props.errors}</b>
					</FormFeedback>
				</FormGroup>
			</div>
		);
	}
}

InputGroup.defaultProps = {
	type: 'text',
};

export default InputGroup;
