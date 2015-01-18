'use strict';

var React = require('react/addons');

var SwitchOn = React.createClass({
  propTypes: {
    size: React.PropTypes.number,
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      size: 48,
      className: "reacticon"
    };
  },

  render: function() {
    return (
      <svg version="1.1"
        width={this.props.size + 'px'}
        height={this.props.size + 'px'}
        className={this.props.className}
        viewBox="0 0 48 48">
        {this.renderGraphic()}
      </svg>
    );
  },

  renderGraphic: function() {
    return <path d="M 24.00,48.00c-9.939,0.00-18.00-4.029-18.00-9.00l0.00,0.00l0.00,-5.064 C 6.00,38.91, 14.061,42.00, 24.00,42.00 s 18.00-3.09, 18.00-8.064L42.00,39.00 l0.00,0.00C 42.00,43.971, 33.939,48.00, 24.00,48.00z M 24.00,39.00c-9.939,0.00-18.00-4.029-18.00-9.00L6.00,24.936 C 6.00,29.91, 14.061,33.00, 24.00,33.00s 18.00-3.09, 18.00-8.064L42.00,30.00 C 42.00,34.971, 33.939,39.00, 24.00,39.00z M 24.00,30.00c-9.939,0.00-18.00-4.029-18.00-9.00L6.00,15.936 C 6.00,20.91, 14.061,24.00, 24.00,24.00s 18.00-3.09, 18.00-8.064L42.00,21.00 C 42.00,25.971, 33.939,30.00, 24.00,30.00z M 24.00,21.00 C 14.061,21.00, 6.00,16.971, 6.00,12.00L6.00,9.00 c0.00-4.971, 8.061-9.00, 18.00-9.00s 18.00,4.029, 18.00,9.00l0.00,3.00 C 42.00,16.971, 33.939,21.00, 24.00,21.00z" >;
  }
});

module.exports = SwitchOn;