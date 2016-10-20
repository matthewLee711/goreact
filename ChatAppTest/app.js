let channels = [
	{name: 'Hardware Support'},
	{name: 'Software Support'}
];
//ES5 React. ES6 got constructors

//Individual channel
var Channel = React.createClass({
  onClick: function() {
  	console.log("yay", this.props.name);
  	return this.props.name;
  },
  render: function() {
    return (//renders individual list item to html doc
      <li onClick={this.onClick}>{this.props.name}</li>
    );
  }
});

//Renders multiple channels
var ChannelList = React.createClass({
	render: function() {//map does iteration
		return(
			<ul> 
				{this.props.channels.map( channel => {
						return(
							<Channel name = {channel.name} />
						)
					}
				)}
			</ul>
		)
	}
});

//Add new Channels
var ChannelForm = React.createClass({
	// constructor(props) {
	// 	//super();
	// 	this.state = {};
	// }, // ES6 Constructor
	getInitialState() { //ES5 constructor
    	return { /* initial state */ };
  },
	onChange: function(e) {//e = event param
		//console.log(e.target.value);
		//Save keyed value into channel state
		this.setState({//initialize state bc DNE
			channelName: e.target.value
		});
	},
	//Press Enter will store key value from onChange
	submit: function(e) {
		let {channelName} = this.state;
		console.log(channelName);
		//Clears input
		this.setState({
			channelName: ''
		});
		//Push changes to parent
		this.props.addChannel(channelName);
		e.preventDefault();//prevent request from happenning
	},
	render: function() {
		return (
			<form onSubmit={this.submit}>
				<input type='text' 
				onChange={this.onChange}
				value={this.state.channelName}
				/>
			</form>
		)
	}
});

//Parent Component -- renders both parent + child
var ChannelSection = React.createClass({
	getInitialState() { //ES5 constructor
    return { 
    		channels: [ //other channels share this arr now
    			{name: 'Hardware Support'},
					{name: 'Software Support'}	
    		]
  	};
  },
  //this function allows other components to add to array
  addChannel: function(name) {
  	let {channels} = this.state;
  	channels.push({name: name});
  	this.setState({ //detect changes and re-renders components
  		channels: channels
  	});
  },
	render: function() { //channels store state init channel from parent//pass addChannel so can access
		return (
			<div>
				<ChannelList channels={this.state.channels}/>
				<ChannelForm addChannel={this.addChannel}/>
			</div>
		)
	}
});

ReactDOM.render(
  <ChannelSection />,
  document.getElementById('app')
);