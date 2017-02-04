const React = require('react');

const Child = function(props, context) {
  console.log('child context', context);
  return React.createElement('div', { className: 'child' }, context.onIt);
};

Child.contextTypes = {
  onIt: React.PropTypes.any,
};

module.exports = Child;
