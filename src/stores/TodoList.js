import ImmutableStore from 'alt/utils/ImmutableUtil';
import { List } from 'immutable';

import Alt from 'lib/Alt';
import Actions from 'actions/TodoList';

class TodoListStore {
  constructor() {
    let { addTask, removeTask } = Actions;

    this.bindListeners({
      add: addTask,
      remove: removeTask
    });

    this.state = new List();
  }

  add(task) {
    return this.setState(this.state.push(task));
  }

  remove(taskID) {
    let taskIndex = this.state.findIndex((task) => task.get('id') === taskID);

    return taskIndex !== (-1) ? this.setState(this.state.delete(taskIndex)) :
                               this.state;
  }
}

export default Alt.createStore(new ImmutableStore(TodoListStore));
