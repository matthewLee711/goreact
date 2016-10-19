var Channel = React.createClass({
  render: function() {
    return (
      // <div className="Channel">
      //   Hello, world! I am a Channel.
      // </div>
      <li>{this.props.name}</li>
    );
  }
});
ReactDOM.render(
  <Channel name="Hardware Support"/>,
  document.getElementById('app')
);