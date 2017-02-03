# Hello world!

Objectives:

- When rendering a component (without a need for context) and it has a child component (with a need for context)
  - Problem: Only way to pass down context is by wrapping the component (e.g. <Provider> to pass down store in react-redux)
  - Solution: Specifying a ComponentClass.contextTypes = { someKey: someValue } will allow context to be passed through without a wrapped component
  - Wins: The component stays the root which retains access to root specific enzyme methods (e.g. `componnentInstance.state`)
  - Losses: This modifies the Component by adding a class property. This needs to be cleaned up to prevent unintended behavior.

- When `render`ing/`shallow`ing/`mount`ing, component needs to be unmounted otherwise there is memory leaks everywhere.
  - Solution: e.g. jasmine envirionment: override enzyme rendering methods to queue up an `afterEach` which `unmount`s any rendered stuff!

## Aftermath

- This is not redux specific. Remove name?
- Test whether `shallow` + `dive`ing gives us a root component or just a react wrapper component.
