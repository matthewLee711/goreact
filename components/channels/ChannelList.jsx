import React, {Component} from 'react';
import Channel from './Channel.jsx';

var ChannelList = createClass({
	render() {
		return (
			<ul> {
				this.props.channels.map( chan => {
					<Channel 
						channel={chan}
						setChannel={this.props.setChannel} 
					/>
				})
			}</ul>
		)
	}
});

//Properties for this component to receive
ChannelList.propTypes = {
	channels: React.PropTypes.array.isRequired,
	setChannel: React.PropTypes.func.isRequired
}

export default ChannelList