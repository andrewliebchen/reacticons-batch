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
    return <path d="M 24.00,48.00c-11.598,0.00-21.00-9.402-21.00-21.00c0.00-8.361, 4.923-15.498, 12.00-18.858l0.00,6.921 C 11.37,17.796, 9.00,22.107, 9.00,27.00c0.00,8.286, 6.714,15.00, 15.00,15.00s 15.00-6.714, 15.00-15.00c0.00-4.893-2.37-9.204-6.00-11.937L33.00,8.142 c 7.077,3.363, 12.00,10.50, 12.00,18.858 C 45.00,38.598, 35.598,48.00, 24.00,48.00z M 27.00,21.00c0.00,1.656-1.341,3.00-3.00,3.00S 21.00,22.656, 21.00,21.00L21.00,3.00 c0.00-1.656, 1.341-3.00, 3.00-3.00s 3.00,1.344, 3.00,3.00L27.00,21.00 z" >;
  }
});

module.exports = SwitchOn;
