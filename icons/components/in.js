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
    return <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00l0.00,-6.00 l6.00,0.00 l0.00,6.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,9.00 c0.00-1.656-1.341-3.00-3.00-3.00L9.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00l0.00,6.00 L0.00,15.00 L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.971, 43.971,48.00, 39.00,48.00z M 13.851,15.225c 1.122-0.462, 2.412-0.207, 3.27,0.651l 6.00,6.00C 23.706,22.461, 24.00,23.229, 24.00,23.997 S 23.706,25.533, 23.121,26.118l-6.00,6.00c-0.858,0.855-2.148,1.113-3.27,0.651C 12.732,32.307, 12.00,31.209, 12.00,29.997L12.00,27.00 L3.00,27.00 C 1.344,27.00,0.00,25.659,0.00,24.00 c0.00-1.656, 1.344-3.00, 3.00-3.00l9.00,0.00 L12.00,17.997 C 12.00,16.785, 12.732,15.687, 13.851,15.225z" >;
  }
});

module.exports = SwitchOn;