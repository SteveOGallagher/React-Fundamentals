var USER_DATA = {
  name: "Steve O'Gallagher",
  username: "AddedSteve",
  image: "https://pbs.twimg.com/profile_images/600016970780651520/MMUQ1gu7.jpg"
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function() {
    return <img src={this.props.imageUrl} style={ {height: 100, width: 100} } />
  }
});

var Link = React.createClass({
  changeURL: function(){
    window.location.replace(this.props.href)
  },

  render: function(){
    return (
      <span style={{ color: 'blue', cursor: 'pointer'}}
       onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
});

var ProfileLink = React.createClass({ 
  render: function() {
    return  (
      <div>
        <Link href={'https://www.twitter.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function() {
    return  (
      <div>
        {this.props.name}
      </div>
    )
  }
});

var Avatar = React.createClass ({
  render: function(){
    return (
      <div>
        <ProfilePic imageUrl = {this.props.user.image} />
        <ProfileName name = {this.props.user.name} />
        <ProfileLink username = {this.props.user.username} />
      </div>
    )
  }
});

var routes = require('./config/routes');

ReactDOM.render(
  // <Avatar user={USER_DATA} />,
  routes,
  document.getElementById('app')
);