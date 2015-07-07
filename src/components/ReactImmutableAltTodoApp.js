'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('bootstrap/less/bootstrap.less');
var imageURL = require('../images/yeoman.png');

var MyNewProjectApp = React.createClass({
  render: function() {
    return (
      <div className="container">
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
      </div>
    );
  }
});
React.render(<MyNewProjectApp />, document.getElementById('content')); // jshint ignore:line

module.exports = MyNewProjectApp;
