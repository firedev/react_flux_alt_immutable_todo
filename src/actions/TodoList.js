import UUID from 'uuid';
import Immutable from 'immutable';
import Alt from 'lib/Alt';

class TodoListActions {
  addTask(content) {
    this.dispatch(Immutable.fromJS({ id: UUID.v4(), content }));
  }

  removeTask(taskID) {
    this.dispatch(taskID);
  }
}

export default AltInstance.createActions(TodoListActions);
