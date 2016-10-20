import React, {Component} from 'react';

var UserForm = React.createClass({
	onSubmit: function(e) {
		e.preventDefault();
		const node = this.refs.userName;
		const userName = node.value;
		this.props.setUserName(userName);
		node.value = '';
	},
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<div className='form-group'>
					<input className='form-control'
						placeholder='Set Your Name'
						type='text'
						ref='userName' />
				</div>
			</form>
		)
	}
});

UserForm.propTypes = {
	setUserName: React.PropTypes.func.isRequired
}

export default UserForm