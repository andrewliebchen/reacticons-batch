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
    return <path d="M 39.00,48.00L9.00,48.00 c-1.656,0.00-3.00-1.341-3.00-3.00L6.00,24.00 c0.00-1.656, 1.344-3.00, 3.00-3.00L9.00,15.00 c0.00-8.286, 6.717-15.00, 15.00-15.00c 8.286,0.00, 15.00,6.714, 15.00,15.00l0.00,6.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,21.00 C 42.00,46.659, 40.659,48.00, 39.00,48.00z M 33.00,15.00c0.00-4.971-4.032-9.00-9.00-9.00 C 19.029,6.00, 15.00,10.029, 15.00,15.00l0.00,6.00 l18.00,0.00 L33.00,15.00 z M 36.00,27.00L12.00,27.00 l0.00,15.00 l24.00,0.00 L36.00,27.00 z" >;
  }
});

module.exports = SwitchOn;