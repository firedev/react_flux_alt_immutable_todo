import Alt from 'lib/Alt';
import Actions from 'actions/AddNewTaskForm';

class AddNewTaskFormStore {
  constructor() {
    this.validationError = '';
    this.content = '';
    this.submittable = false;

    let { changeContent, clearForm } = Actions;
    this.bindListeners({ changeContent, clearForm });
  }

  changeContent(newContent) {
    let validationError = this.validate(newContent),
    submittable = validationError.length === 0;

    this.setState({
      validationError,
      content: newContent,
      submittable });
  }

  clearForm() {
    this.setState({
      validationError: '',
      content: '',
      submittable: false
    });
  }

  validate(newContent) {
    return (newContent.length > 3) ? '' : 'Task content should be longer';
  }
}

export default Alt.createStore(AddNewTaskFormStore);
