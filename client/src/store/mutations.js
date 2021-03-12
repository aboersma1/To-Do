import * as mutations from 'mutations/enums'

export default {
  /**
   * Adds todo to doneList
   * @param {object} state
   * @param {object} item
   */
  [mutations.ADD_TO_DONE_LIST] (state, item) {
    state.doneList.push(item)
  },
  /**
   * Adds todo to todoList
   * @param {object} state
   * @param {object} item
   */
  [mutations.ADD_TO_TODO_LIST] (state, item) {
    state.todoList.push(item)
  },
  /**
   * Opens and closes "Create a todo" mode
   * @param {object} state
   * @param {boolean} isCreateMode
   */
  [mutations.SET_CREATE_MODE] (state, isCreateMode) {
    state.isCreateMode = isCreateMode
  },
  /**
   * Overwrites whole state.doneList with new list of todos.
   * @param {object} state
   * @param {array} done
   */
  [mutations.SET_DONE_LIST] (state, done) {
    state.doneList = done
  },
  /**
   * Overwrites whole state.todoList with new list of todos.
   * @param {object} state
   * @param {array} todos
   */
  [mutations.SET_TODO_LIST] (state, todos) {
    state.todoList = todos
  }
}
