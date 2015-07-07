'use strict';

describe('MyNewProjectApp', () => {
  let React = require('react/addons');
  let MyNewProjectApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    MyNewProjectApp = require('components/MyNewProjectApp.js');
    component = React.createElement(MyNewProjectApp);
  });

  it('should create a new instance of MyNewProjectApp', () => {
    expect(component).toBeDefined();
  });
});
