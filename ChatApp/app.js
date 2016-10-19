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
				<Channel name='Hardware Support' />
			</ul>
		)
	}
});

ReactDOM.render(
  <ChannelList />,
  document.getElementById('app')
);