import React, {Component} from 'react';
import MessageForm from './MessageForm.jsx';
import MessageList from './MessageList.jsx';

var MessageSection = React.createClass({
	render() {
		let {activeChannel} = this.props;
		return(
			<div className='messages-container panel panel-default'>
				<div className='panel-heading'>
					<strong>{activeChannel.name}</strong>
				</div>
				<div className='panel-body channels'>
					<MessageList {...this.props} />
					<MessageForm {...this.props} />
				</div>
			</div>
		)
	}
});

MessageSection.propTypes = {
	messages: React.PropTypes.array.isRequired,
	activeChannel: React.PropTypes.object.isRequired,
	addMessage: React.PropTypes.func.isRequired
}

export default MessageSection