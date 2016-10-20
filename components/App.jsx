import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';

var App = React.createClass({
	getInitialState() { //ES5 constructor
    	return { 
    		channels: []
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
	render() {
		return(
			<ChannelSection 
				channels={this.state.channels}
				addChannel={this.addChannel}
				setChannel={this.setChannel}
			/>
		)
	}
});

export default App