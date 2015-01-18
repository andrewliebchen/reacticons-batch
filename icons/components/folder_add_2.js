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
    return <path d="M 39.00,6.00L29.448,6.00 C 28.206,2.514, 24.912,0.00, 21.00,0.00L9.00,0.00 C 4.029,0.00,0.00,4.029,0.00,9.00l0.00,30.00 c0.00,4.971, 4.029,9.00, 9.00,9.00l30.00,0.00 c 4.968,0.00, 9.00-4.029, 9.00-9.00L48.00,15.00 C 48.00,10.029, 43.968,6.00, 39.00,6.00z M 34.50,42.00C 30.357,42.00, 27.00,38.643, 27.00,34.50S 30.357,27.00, 34.50,27.00 s 7.50,3.357, 7.50,7.50S 38.643,42.00, 34.50,42.00z M 42.00,18.00L15.00,18.00 C 13.344,18.00, 12.00,19.341, 12.00,21.00l0.00,21.00 L9.00,42.00 c-1.656,0.00-3.00-1.341-3.00-3.00L6.00,9.00 c0.00-1.659, 1.344-3.00, 3.00-3.00l12.00,0.00 c 1.656,0.00, 3.00,1.341, 3.00,3.00l0.00,3.00 l15.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00L42.00,18.00 z M 36.00,30.00l-3.00,0.00 l0.00,3.00 l-3.00,0.00 l0.00,3.00 l3.00,0.00 l0.00,3.00 l3.00,0.00 l0.00,-3.00 l3.00,0.00 l0.00,-3.00 l-3.00,0.00 L36.00,30.00 z" >;
  }
});

module.exports = SwitchOn;
