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
    return <path d="M 39.00,48.00L18.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00L9.00,18.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l21.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,21.00 C 48.00,43.971, 43.971,48.00, 39.00,48.00z M 42.00,18.00c0.00-1.656-1.341-3.00-3.00-3.00L18.00,15.00 C 16.341,15.00, 15.00,16.344, 15.00,18.00l0.00,21.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l12.00,0.00 l0.00,-9.00 c0.00-1.659, 1.341-3.00, 3.00-3.00l9.00,0.00 L42.00,18.00 z M 36.00,36.00l 3.00,6.00l 3.00-6.00L36.00,36.00 z M 6.00,15.00l0.00,23.448 C 2.514,37.209,0.00,33.915,0.00,30.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l21.00,0.00 c 3.915,0.00, 7.209,2.514, 8.448,6.00L15.00,6.00 C 10.029,6.00, 6.00,10.029, 6.00,15.00z" >;
  }
});

module.exports = SwitchOn;
