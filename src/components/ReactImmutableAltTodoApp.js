'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS

var ReactImmutableAltTodoApp = React.createClass({
  render: function() {
    return (
      <div className="container">
        <ReactTransitionGroup transitionName="fade">
          <h1>hello</h1>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = ReactImmutableAltTodoApp;
