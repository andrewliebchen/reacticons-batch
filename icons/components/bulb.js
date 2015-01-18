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
    return <path d="M 31.458,27.942c-0.474,0.666-0.969,1.302-1.497,1.866 C 29.964,29.877, 30.00,29.934, 30.00,30.00l0.00,6.00 c0.00,1.659-1.341,3.00-3.00,3.00L21.00,39.00 c-1.659,0.00-3.00-1.341-3.00-3.00l0.00,-6.00 c0.00-0.066, 0.036-0.123, 0.039-0.189 c-0.528-0.564-1.023-1.20-1.497-1.866C 12.057,25.35, 9.00,20.556, 9.00,15.00c0.00-8.286, 6.714-15.00, 15.00-15.00s 15.00,6.714, 15.00,15.00C 39.00,20.556, 35.943,25.35, 31.458,27.942z M 22.50,42.00l3.00,0.00 C 26.328,42.00, 27.00,42.672, 27.00,43.50S 26.328,45.00, 25.50,45.00l-3.00,0.00 C 21.672,45.00, 21.00,44.328, 21.00,43.50S 21.672,42.00, 22.50,42.00z" >;
  }
});

module.exports = SwitchOn;
