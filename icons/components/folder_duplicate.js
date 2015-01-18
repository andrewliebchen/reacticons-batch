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
    return <path d="M 42.00,38.448L42.00,21.00 c0.00-4.971-4.032-9.00-9.00-9.00L23.448,12.00 C 22.209,8.514, 18.912,6.00, 15.00,6.00 L9.552,6.00 C 10.791,2.514, 14.088,0.00, 18.00,0.00l3.00,0.00 c 3.912,0.00, 7.206,2.514, 8.448,6.00L39.00,6.00 c 4.968,0.00, 9.00,4.029, 9.00,9.00l0.00,15.00 C 48.00,33.915, 45.486,37.209, 42.00,38.448z M 20.448,15.00L30.00,15.00 c 4.968,0.00, 9.00,4.029, 9.00,9.00l0.00,15.00 c0.00,4.971-4.032,9.00-9.00,9.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,18.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l3.00,0.00 C 15.912,9.00, 19.209,11.514, 20.448,15.00z M 6.00,18.00l0.00,21.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l21.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L33.00,24.00 c0.00-1.656-1.341-3.00-3.00-3.00L15.00,21.00 L15.00,18.00 c0.00-1.656-1.344-3.00-3.00-3.00L9.00,15.00 C 7.344,15.00, 6.00,16.344, 6.00,18.00z" >;
  }
});

module.exports = SwitchOn;
