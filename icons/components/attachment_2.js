'use strict';

var React = require('react/addons');

var Attachment2 = React.createClass({
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
    return <path d="M 36.00,3.00c0.00-1.659, 1.341-3.00, 3.00-3.00s 3.00,1.341, 3.00,3.00l0.00,28.50 c0.00,9.114-7.389,16.50-16.50,16.50S 9.00,40.614, 9.00,31.50L9.00,12.00 c0.00-6.627, 5.373-12.00, 12.00-12.00s 12.00,5.373, 12.00,12.00l0.00,19.50 c0.00,4.143-3.357,7.50-7.50,7.50S 18.00,35.643, 18.00,31.50L18.00,12.00 c0.00-1.656, 1.341-3.00, 3.00-3.00s 3.00,1.344, 3.00,3.00l0.00,19.50 C 24.00,32.328, 24.672,33.00, 25.50,33.00S 27.00,32.328, 27.00,31.50L27.00,12.00 c0.00-3.312-2.688-6.00-6.00-6.00S 15.00,8.688, 15.00,12.00l0.00,19.50 C 15.00,37.299, 19.701,42.00, 25.50,42.00s 10.50-4.701, 10.50-10.50L36.00,3.00 z" >;
  }
});

module.exports = Attachment2;
