import React, {Component} from 'react';
import fecha from 'fecha';

var Message = React.createClass({
	render() {
		//console.log(message);
		//message doesnt work bc same name?
		let messsage = this.props;//this doesnt work for some reason 
		let info = this.props;
		console.log(info);
		//let createdAt = fecha.format(new Date(info.createdAt), 'HH:mm:ss MM/DD/YY');
		return(
			<li className='info'>
				<div className='author'>
					<strong>{info.message.author}</strong>
					
				</div>
				<div className='body'>{info.message.body}</div>
			</li>
		)
	}
});
//<i className='timestamp'>{info.message.createdAt}</i>
Message.propTypes = {
	message: React.PropTypes.object.isRequired,
	info: React.PropTypes.object
}

export default Message