'use strict';

var React = require('react/addons');
var cx = React.addons.classSet;
var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var FilesSection = React.createClass({
  render: function() {
    return (
      <section className="files-section">
        <div className="width-wrapper">
          <h2>Use them for your files</h2>
          <p>
            Praesent id metus massa, ut blandit odio. Proin quis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
            Vivamus hendrerit arcu sed erat molestie vehicula.
            Sed auctor neque eu tellus.
          </p>
        </div>
      </section>
    );
  }
});

module.exports = FilesSection;
