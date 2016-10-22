import React, {Component} from 'react';

var MessageForm = React.createClass({
	onSubmit(e) {
		e.preventDefault();
		const node = this.refs.message;
		const message = node.value;
		this.props.addMessage(message);
		node.value = '';
	},
	render() {
		let input;
		//check if active channel selected
		if(this.props.activeChannel.id !== undefined) {
			input = ( //set input tag to input
				<input 
					ref='message'
					type='text'
					className='form-control'
					placeholder='Add Message'/>
			)
		}//render input only if selected channel
		return (
			<form onSubmit={this.onSubmit}>
				<div className='form-group'>
					{input}
				</div>
			</form>
		)
	}
});

MessageForm.propTypes = {
	activeChannel: React.PropTypes.object.isRequired,
	addMessage: React.PropTypes.func.isRequired
}

export default MessageForm