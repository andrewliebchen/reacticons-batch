'use strict';

var React = require('react/addons');
var cx = React.addons.classSet;
var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var Icon = require('../../../icons');

var Icons = require('./icons');
var UISection = require('./ui_section');
var FilesSection = require('./files_section');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/application.scss');

var Hero = React.createClass({
  render: function() {
    return (
      <header className="header">
        <div className="width-wrapper">
          <div className="header__title">
            <h1>Reacticons!</h1>
            <h2>Scalable icons for ReactJS</h2>
            <button>Get them while they're hot</button>
          </div>
          <div className="header__examples">
            <CSSTransitionGroup transitionName="reacticons">
              <Icons/>
            </CSSTransitionGroup>
          </div>
        </div>
      </header>
    );
  }
});

var Instructions = React.createClass({
  render: function() {
    return (
      <section className="instructions">
        <div className="width-wrapper">
          <a href="https://github.com/andrewliebchen/reacticons" className="button instructions__cta">Download from Github</a>
          <div className="instructions__or">or</div>
          <code className="instructions__code">$ npm install reacticons</code>
          <p>Package includes JSX components which render SVG icons. Just include it in your project and it should be good to go. Have a problem or idea? Feel free to <a href="https://github.com/andrewliebchen/reacticons/issues">open an issue</a>.</p>
          <p>If you're interested, you may also want to check out the <a>original Reacticons</a>.</p>
        </div>
      </section>
    );
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="footer">
        <div className="width-wrapper">
          <small>
            <strong><a href="http://github.com/andrewliebchen/reacticons">Reacticons</a></strong> are under an MIT License, and brought to you by <a href="http://andrewliebchen.com">me</a>.</small>
        </div>
      </footer>
    );
  }
});


var App = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <Hero />
        <UISection />
        <FilesSection />
        <Instructions />
        <Footer />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('content'));

module.exports = App;
