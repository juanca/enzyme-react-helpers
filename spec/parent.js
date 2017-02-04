const React = require('react');
const Child = require('./child.js');

module.exports = function(props) {
  return React.DOM.div({}, props.children);
};
