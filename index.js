const React = require('react');
const { mount, render, shallow } = require('enzyme');

function contextWrapper (enzymeFunk) {
  return function (element, options) {
    const newContextTypes = Object.keys(options.context).reduce(function (contextTypes, key) {
      contextTypes[key] = React.PropTypes.any;
      return contextTypes;
    }, {});

    element.type.contextTypes = Object.assign(newContextTypes, element.type.contextTypes);

    return enzymeFunk(element, options);
  }
}

module.exports = {
  mount: contextWrapper(mount),
  render: contextWrapper(render),
  shallow: contextWrapper(shallow),
}
