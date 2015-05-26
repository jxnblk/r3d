
var React = require('react');
var R3d = require('../..');
var Line = R3d.Line;
var Head = require('./Head.jsx');

var Root = React.createClass({

  render: function() {
    return (
      <html>
        <Head {...this.props} />
        <body className="px3">
          <h1>r3d</h1>
          <p>{this.props.description}</p>
          <Line {...this.props.graph} />
        </body>
      </html>
    )
  }

});

module.exports = Root;

