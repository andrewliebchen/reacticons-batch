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
    return <path d="M 24.00,39.00c-9.939,0.00-18.00-4.029-18.00-9.00c0.00-1.836, 1.113-3.54, 3.00-4.962L9.00,21.00 c0.00-6.195, 3.759-11.511, 9.123-13.80C 18.042,6.813, 18.00,6.411, 18.00,6.00c0.00-3.312, 2.688-6.00, 6.00-6.00s 6.00,2.688, 6.00,6.00c0.00,0.411-0.042,0.813-0.123,1.20 C 35.238,9.489, 39.00,14.805, 39.00,21.00l0.00,4.038 C 40.887,26.46, 42.00,28.164, 42.00,30.00C 42.00,34.971, 33.939,39.00, 24.00,39.00z M 24.00,42.00c 2.082,0.00, 4.056-0.198, 5.952-0.48 C 29.964,41.682, 30.00,41.835, 30.00,42.00c0.00,3.312-2.688,6.00-6.00,6.00s-6.00-2.688-6.00-6.00c0.00-0.165, 0.036-0.318, 0.048-0.48C 19.947,41.802, 21.918,42.00, 24.00,42.00z" >;
  }
});

module.exports = SwitchOn;
