import React, {Component} from 'react';
import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';

var ChannelSection = React.createClass({
	render() {
		return(
			<div>
				<ChannelList {...this.props} />
				<ChannelForm {...this.props} />
			</div>
		)
	}
});

ChannelSection.propTypes = {
	channels: React.PropTypes.array.isRequired,
	addChannel: React.PropTypes.func.isRequired,
	setChannel: React.PropTypes.func.isRequired
}

export default ChannelSection