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
    return <path d="M 45.00,9.00l-6.00,0.00 c-1.659,0.00-3.00-1.344-3.00-3.00s-1.341-3.00-3.00-3.00L15.00,3.00 C 13.341,3.00, 12.00,4.344, 12.00,6.00S 10.659,9.00, 9.00,9.00L3.00,9.00 C 1.341,9.00,0.00,10.344,0.00,12.00l0.00,30.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l42.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L48.00,12.00 C 48.00,10.344, 46.659,9.00, 45.00,9.00 z M 24.00,39.00c-8.286,0.00-15.00-6.714-15.00-15.00c0.00-8.283, 6.714-15.00, 15.00-15.00s 15.00,6.717, 15.00,15.00C 39.00,32.286, 32.286,39.00, 24.00,39.00z M 24.00,15.00C 19.029,15.00, 15.00,19.029, 15.00,24.00 c0.00,4.968, 4.029,9.00, 9.00,9.00s 9.00-4.032, 9.00-9.00C 33.00,19.029, 28.971,15.00, 24.00,15.00z" >;
  }
});

module.exports = SwitchOn;