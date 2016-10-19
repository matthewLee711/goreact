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
		//save keyed value into channel state
		this.setState({//initialize state bc DNE
			channelName: e.target.value
		});
	},
	//Press Enter will store key value from onChange
	submit: function(e) {
		let {channelName} = this.state;
		console.log(channelName);
		channels.push({
			name: channelName
		});
		//Clears input
		this.setState({
			channelName: ''
		});
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
	render : function() { //create property as channel list
		return (
			<div>
				<ChannelList channels={channels}/>
				<ChannelForm />
			</div>
		)
	}
});

ReactDOM.render(
  <ChannelSection />,
  document.getElementById('app')
);