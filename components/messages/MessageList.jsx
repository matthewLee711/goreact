import React, {Component} from 'react';
import Message from './Message.jsx';

var MessageList = React.createClass({
	render() {//renders all messages in messages
		console.log("render msg list");
		return (
			<ul>{
				this.props.messages.map( msg => {
					return (
						<Message key={msg.id} message={msg}/>
					)
				})
			}</ul>
		)
	}
});

MessageList.propTypes = {
	messages: React.PropTypes.array.isRequired
}

export default MessageList