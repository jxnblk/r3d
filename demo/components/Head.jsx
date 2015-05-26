
var React = require('react');

var Head = React.createClass({

  render: function() {
    return (
      <head>
        <meta charSet="utf-8"/>
        <title>r3d</title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
      </head>
    )
  }

});

module.exports = Head;
