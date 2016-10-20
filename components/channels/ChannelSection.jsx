import React, {Component} from 'react';
import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';

var ChannelSection = createClass({
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
	channels: React.Proptypes.array.isRequired,
	addChannel: React.PropTypes.func.isRequired,
	setChannel: React.PropTypes.func.isRequired
}

export default ChannelSection