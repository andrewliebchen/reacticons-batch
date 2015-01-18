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
    return <path d="M 33.00,36.00c-6.627,0.00-12.00-5.373-12.00-12.00c0.00-3.312-2.688-6.00-6.00-6.00S 9.00,20.688, 9.00,24.00 c0.00,1.656-1.341,3.00-3.00,3.00S 3.00,25.656, 3.00,24.00c0.00-6.627, 5.373-12.00, 12.00-12.00s 12.00,5.373, 12.00,12.00c0.00,3.312, 2.688,6.00, 6.00,6.00s 6.00-2.688, 6.00-6.00c0.00-1.656, 1.341-3.00, 3.00-3.00 s 3.00,1.344, 3.00,3.00C 45.00,30.627, 39.627,36.00, 33.00,36.00z" >;
  }
});

module.exports = SwitchOn;
