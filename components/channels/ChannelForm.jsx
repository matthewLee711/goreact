import React, {Component} from 'react';

var ChannelForm = createClass({
	onSubmit: function(e) {
		e.preventDefault();
		const node = this.refs.channel;
		const channelName = node.value;
		this.props.addChannel(channelName);
		node.value = '';
	},
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input 
					type='text'
					ref='channel'
				/>
			</form>
		)
	}
});

ChannelForm.propTypes = {
	addChannel: React.PropTypes.func.isRequired
}

export default ChannelForm