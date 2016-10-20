import React, {Component} from 'react';

var Channel = React.createClass({
	onClick: function(e) {
		e.preventDefault();
		const {setChannel, channel} = this.props;//set as own vars
		setChannel(channel);
	},
	render: function() {
		const {channel, activeChannel} = this.props;
		const active = channel === activeChannel ? 'active' : '';
		console.log(channel === activeChannel ? 'active' : '');
		return(
			<li className={active}>
				<a onClick={this.onClick}>
					{channel.name}
				</a>
			</li>
		)
	}
});

Channel.propTypes = {
	channel: React.PropTypes.object.isRequired,
	setChannel: React.PropTypes.func.isRequired,
	activeChannel: React.PropTypes.object.isRequired
}

//allows to be usable by other components
export default Channel