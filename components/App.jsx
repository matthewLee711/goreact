import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';

//Renders all parent components and required functions
var App = React.createClass({
	getInitialState() { //ES5 constructor
    	return { 
    		channels: [],
    		users: [],
    		messages: [],
    		message: {},
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
  setUserName: function(name){
  	let {users} = this.state;
  	users.push({id: users.length, name});
  	this.setState({users});
  	//sned to server
  },
  addMessage: function(body){
  	//pull messages + user out of state object
  	let {messages, users} = this.state;
  	let createdAt = new Date;
  	let author = users.length > 0 ? users[0].name : 'anonymous';
  	messages.push({id: messages.length, body, createdAt, author});
  	this.setState({messages});
  	//send to server!
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
					<MessageSection
						{...this.state}
						addMessage={this.addMessage}
					/>
				</div>
			</div>
		)
	}
});

export default App