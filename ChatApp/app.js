let channels = [
	{name: 'Hardware Support'},
	{name: 'Software Support'}
];

var Channel = React.createClass({
  onClick: function() {
  	console.log("yay");
  	return null;
  },
  render: function() {
    return (
      <li onClick={this.onClick}>{this.props.name}</li>
    );
  }
});

//Renders multiple channels
var ChannelList = React.createClass({
	render: function() {
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

ReactDOM.render(
  <ChannelList channels={channels}/>,//create property as channel list
  document.getElementById('app')
);