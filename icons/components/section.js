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
    return <path d="M 24.00,12.00c 3.312,0.00, 6.312,1.344, 8.484,3.516C 34.659,17.688, 36.00,20.688, 36.00,24.00 c0.00,3.936-1.923,7.401-4.851,9.585C 32.295,35.097, 33.00,36.96, 33.00,39.00c0.00,4.968-4.032,9.00-9.00,9.00c-4.971,0.00-9.00-4.032-9.00-9.00l6.00,0.00 c0.00,1.659, 1.344,3.00, 3.00,3.00 s 3.00-1.341, 3.00-3.00s-1.344-3.00-3.00-3.00c-3.312,0.00-6.312-1.341-8.487-3.516C 13.344,30.312, 12.00,27.312, 12.00,24.00c0.00-3.936, 1.923-7.398, 4.851-9.588 C 15.705,12.903, 15.00,11.043, 15.00,9.00c0.00-4.971, 4.029-9.00, 9.00-9.00c 4.968,0.00, 9.00,4.029, 9.00,9.00L27.00,9.00 c0.00-1.656-1.344-3.00-3.00-3.00S 21.00,7.344, 21.00,9.00S 22.344,12.00, 24.00,12.00z M 18.00,24.00 c0.00,3.312, 2.688,6.00, 6.00,6.00s 6.00-2.688, 6.00-6.00S 27.312,18.00, 24.00,18.00S 18.00,20.688, 18.00,24.00z" >;
  }
});

module.exports = SwitchOn;
