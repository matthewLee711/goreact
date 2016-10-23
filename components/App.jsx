import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';
import Socket from '../socket.js';

//Renders all parent components and required functions
var App = React.createClass({
	getInitialState() { //ES5 constructor
    	return { 
    		channels: [],
    		users: [],
    		messages: [],
    		activeChannel: {},
    		connected: false
    	};
  },//connected prop tells if connected
  componentDidMount: function() {
  	//open web socket and assign it as attribute of app component
  	let socket = this.socket = new Socket();
  	socket.on('connect', this.onConnect);
  	socket.on('disconnect', this.onDisconnect);
  	//wire up channel event we receive from server
  	socket.on('channel add', this.onAddChannel);
  	socket.on('user add', this.onAddUser);
  	socket.on('user edit', this.onEditUser);
  	socket.on('user remove', this.onRemoveUser);
  	socket.on('message add', this.onMessageAdd);
  },
  onAddUser: function(user) {
  	//pull user array out of state
  	let {users} = this.state;
  	//put new user onto array
  	users.push(user);
  	//update state
  	this.setState({users});
  },
  onEditUser: function(editUser) {
  	let {users} = this.state;
  	users = users.map(user => {
  		if(editUser.id === user.id) {
  			return editUser;
  		}
  		return user;//return exisiting user
  	});
  	this.setState({users});
  },
  onRemoveUser: function(removeUser) {
  	let {users} = this.state;
  	//return true for each element, except one to remove
  	users = users.filter(user => {
  		return user.id !== removeUser.id;
  	});
  	//update state on new users array
  	this.setState({users});
  },
  onMessageAdd: function(message) {
  	let {messages} = this.state;
  	messages.push(message);
  	this.setState({messages});
  },
  //Connect and receive from specific channel
  onConnect: function() {
  	this.setState({connected: true});
  	this.socket.emit('channel subscribe');
  	this.socket.emit('user subscribe');
  },//Disconnect
  onDisconnect: function() {
  	this.setState({connect: false});
  },
  onAddChannel: function(channel) {
  	//pull new channels arr out of state
  	let {channels} = this.state;
  	//add new channel to channels array
  	channels.push(channel);
  	//update state with modified channels array
  	this.setState({channels});
  },
  addChannel: function(name) {
  	this.socket.emit('channel add', {name});
  },
  setChannel: function(activeChannel) {
  	this.setState({activeChannel});
  	//stop any previous data feeds
  	this.socket.emit('meessge unsubscribe');
  	//remove messages from last channel
  	this.setState({messages: []});
  	//sub to new channel
  	this.socket.emit('message subscribe',
  		{channelId: activeChannel.id});
  },
  setUserName: function(name){
  	//passn new object literal with name property
  	this.socket.emit('user edit', {name})
  },
  addMessage: function(body){
  	//get active channel
  	let {activeChannel} = this.state;
  	this.socket.emit('message add', 
  		{channelId: activeChannel.id, body});
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