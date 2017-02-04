const React = require('react');
const { mount, render, shallow } = require('../index.js');
const Child = require('./child.js');
const Parent = require('./parent.js');

describe('Passing down context', () => {
  it('works', () => {
    debugger;
    Parent.contextTypes = {
      onIt: React.PropTypes.string
    };
    const rootDOM = shallow(React.createElement(Parent,
      null,
      React.createElement(Child)),
      {
        context: {
          onIt: 'to win it', poop: 9
        }
      }
    );

    expect(rootDOM.find(Child).dive().text()).toEqual('to win it');
  });

  it('does not permanently mutate components', () => {

  });
});
