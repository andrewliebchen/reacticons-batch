'use strict';

var React = require('react/addons');

var Add = React.createClass({
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
    return <path d="M 24.00,48.00c-13.254,0.00-24.00-10.746-24.00-24.00s 10.746-24.00, 24.00-24.00s 24.00,10.746, 24.00,24.00 S 37.254,48.00, 24.00,48.00z M 24.00,6.00C 14.061,6.00, 6.00,14.061, 6.00,24.00s 8.061,18.00, 18.00,18.00s 18.00-8.061, 18.00-18.00S 33.939,6.00, 24.00,6.00z M 33.00,27.00L27.00,27.00 l0.00,6.00 c0.00,1.659-1.341,3.00-3.00,3.00 c-1.656,0.00-3.00-1.341-3.00-3.00L21.00,27.00 L15.00,27.00 C 13.344,27.00, 12.00,25.659, 12.00,24.00c0.00-1.656, 1.344-3.00, 3.00-3.00l6.00,0.00 L21.00,15.00 c0.00-1.656, 1.344-3.00, 3.00-3.00c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,6.00 l6.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00C 36.00,25.659, 34.659,27.00, 33.00,27.00z" >;
  }
});

module.exports = Add;
