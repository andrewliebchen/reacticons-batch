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
    return <path d="M 19.407,33.093c-2.229,0.00-5.718-8.814-7.407-5.25 c-0.702,1.482-1.872,4.641-3.00,7.17L9.00,36.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l24.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00l0.00,-1.398 c-1.695-3.816-3.891-10.14-6.00-12.57 C 28.686,17.064, 23.532,33.093, 19.407,33.093z M 39.00,0.00L9.00,0.00 C 4.029,0.00,0.00,4.029,0.00,9.00l0.00,30.00 c0.00,4.968, 4.029,9.00, 9.00,9.00l30.00,0.00 c 4.968,0.00, 9.00-4.032, 9.00-9.00L48.00,9.00 C 48.00,4.029, 43.968,0.00, 39.00,0.00z M 42.00,39.00c0.00,1.659-1.341,3.00-3.00,3.00L9.00,42.00 c-1.656,0.00-3.00-1.341-3.00-3.00L6.00,9.00 c0.00-1.656, 1.344-3.00, 3.00-3.00l30.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00L42.00,39.00 z M 13.50,18.00C 15.987,18.00, 18.00,15.987, 18.00,13.50S 15.987,9.00, 13.50,9.00S 9.00,11.013, 9.00,13.50S 11.013,18.00, 13.50,18.00z" >;
  }
});

module.exports = SwitchOn;
