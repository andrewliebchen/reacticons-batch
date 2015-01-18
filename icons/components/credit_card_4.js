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
    return <path d="M 45.00,42.00L3.00,42.00 c-1.656,0.00-3.00-1.341-3.00-3.00L0.00,15.00 l48.00,0.00 l0.00,24.00 C 48.00,40.659, 46.659,42.00, 45.00,42.00z M 26.271,22.053C 25.158,21.399, 23.88,21.00, 22.50,21.00C 18.357,21.00, 15.00,24.357, 15.00,28.50S 18.357,36.00, 22.50,36.00c 1.38,0.00, 2.658-0.399, 3.771-1.053 C 24.87,33.165, 24.00,30.942, 24.00,28.50S 24.87,23.835, 26.271,22.053z M 34.50,21.00C 30.357,21.00, 27.00,24.357, 27.00,28.50s 3.357,7.50, 7.50,7.50S 42.00,32.643, 42.00,28.50 S 38.643,21.00, 34.50,21.00z M0.00,9.00c0.00-1.659, 1.344-3.00, 3.00-3.00l42.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00l0.00,3.00 L0.00,12.00 L0.00,9.00 z" >;
  }
});

module.exports = SwitchOn;
