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
    return <path d="M 39.00,36.00l-3.00,0.00 c-3.915,0.00-7.206-2.511-8.448-6.00L39.00,30.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,21.00 c0.00-1.659-1.341-3.00-3.00-3.00L27.552,18.00 C 28.794,14.514, 32.085,12.00, 36.00,12.00l3.00,0.00 c 4.968,0.00, 9.00,4.029, 9.00,9.00l0.00,6.00 C 48.00,31.971, 43.968,36.00, 39.00,36.00z M 12.00,24.00 c0.00-1.659, 1.344-3.00, 3.00-3.00l18.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00s-1.341,3.00-3.00,3.00L15.00,27.00 C 13.344,27.00, 12.00,25.659, 12.00,24.00z M 6.00,21.00l0.00,6.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l11.448,0.00 C 19.209,33.489, 15.912,36.00, 12.00,36.00L9.00,36.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,21.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l3.00,0.00 c 3.912,0.00, 7.209,2.514, 8.448,6.00L9.00,18.00 C 7.344,18.00, 6.00,19.341, 6.00,21.00z" >;
  }
});

module.exports = SwitchOn;
