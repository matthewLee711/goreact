import React, {Component} from 'react';
import Channel from './Channel.jsx';

var ChannelList = React.createClass({
	render() {
		return (
			<ul> {
				this.props.channels.map( chan => {
					return(
						<Channel 
						channel={chan}
						key={chan.id}
						//setChannel={this.props.setChannel} 
						//activeChannel={this.props.activeChannel}
						{...this.props} />
					)
				})
			}</ul>
		)
	}
});

//Properties for this component to receive
ChannelList.propTypes = {
	channels: React.PropTypes.array.isRequired,
	setChannel: React.PropTypes.func.isRequired,
	activeChannel: React.PropTypes.object.isRequired
}

export default ChannelList