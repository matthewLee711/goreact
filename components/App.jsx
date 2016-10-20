import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';

var App = React.createClass({
	getInitialState() { //ES5 constructor
    	return { 
    		channels: [],
    		users: [],
    		activeChannel: {}
    	};
  },
  addChannel: function(name) {
  	let {channels} = this.state;
  	channels.push({id: channels.length, name});
  	this.setState({channels});//save changes

  	//MAKE API CALL TO SERVER - send to server
  },
  setChannel: function(activeChannel) {
  	this.setState({activeChannel});
  	//Get channels messages
  },
  setUserName(name) {
  	let {users} = this.state;
  	users.push({id: users.length, name});
  	this.setState({users});
  	//sned to server
  },
	render() {
		return(
			<div className='app'>
				<div className='nav'>
					<ChannelSection 
						channels={this.state.channels}
						addChannel={this.addChannel}
						setChannel={this.setChannel} 
						activeChannel = {this.state.activeChannel}
					/>
					<UserSection
						{...this.state}
						setUserName={this.setUserName}
					/>
				</div>
			</div>
		)
	}
});

export default App