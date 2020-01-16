import React, { Component } from 'react';
import { FormGroup, Input, FormFeedback } from 'reactstrap';

class SelectGroup extends Component {
	render() {
		return (
			<div>
				<FormGroup>
					<span>
						<b>{this.props.title}</b>
					</span>
					{this.props.errors ? (
						<Input
							invalid
							type={this.props.type}
							onChange={this.props.onChange}>
							{this.props.list.map(options => (
								<option key={options}>{options}</option>
							))}
						</Input>
					) : (
						<Input type={this.props.type} onChange={this.props.onChange}>
							{this.props.list.map(options => (
								<option key={options}>{options}</option>
							))}
						</Input>
					)}
					<FormFeedback>
						<b>{this.props.errors}</b>
					</FormFeedback>
				</FormGroup>
			</div>
		);
	}
}

SelectGroup.defaultProps = {
	type: 'select',
};

export default SelectGroup;
