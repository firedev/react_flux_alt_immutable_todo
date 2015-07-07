'use strict';

require('bootstrap/less/bootstrap.less');

import React from 'react/addons';
import ReactImmutableAltTodoApp from 'components/ReactImmutableAltTodoApp.js';

React.render(<ReactImmutableAltTodoApp />, document.getElementById('todo-list'));
