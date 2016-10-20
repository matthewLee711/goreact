import React, {Component} from 'react';
import User from './User.jsx';

var UserList = React.createClass({
	render() {
		return (
			<ul> {
				this.props.users.map( user => {
					return(
						<User 
						user={user}
						key={user.id} />
					)
				})
			}</ul>
		)
	}
});

UserList.propTypes = {
	users: React.PropTypes.array.isRequired
}

export default UserList