let channels = [
	{name: 'Hardware Support'},
	{name: 'Software Support'}
];

//Individual channel
var Channel = React.createClass({
  onClick: function() {
  	console.log("yay", this.props.name);
  	return this.props.name;
  },
  render: function() {
    return (//renders individual list item to html
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
	render: function() {
		return (
			<form>
				<input type='text' />
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