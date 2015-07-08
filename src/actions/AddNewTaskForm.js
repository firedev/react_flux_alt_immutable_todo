import Alt from 'lib/Alt';

class AddNewTaskFormActions {
  changeContent(content) {
    this.dispatch(content);
  }

  clearForm() {
    this.dispatch();
  }
}

export default Alt.createActions(AddNewTaskFormActions);
