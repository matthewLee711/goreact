import React, {Component} from 'react';

var User = React.createClass({
	render() {
		return (
			<li>
				{this.props.user.name}
			</li>
		)
	}
});

User.propTypes = {
	user: React.PropTypes.object.isRequired
}

export default User