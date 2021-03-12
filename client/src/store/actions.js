import * as actions from 'actions/enums'
import { HTTP } from '../js/http-context.js'
import * as mutations from 'mutations/enums'

/**
 * Removes a specified todo or done item from a specified list.
 * @param {object} item
 * @param {array} list
 * @returns {array} list
 */
const removeItemFromList = (item, list) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === item.id) {
      list.splice(i, 1)
    }
  }
  return list
}

export default {
  /**
   * Closes "Create a todo" mode
   */
  [actions.CLOSE_CREATE_MODE] () {
    this.commit(mutations.SET_CREATE_MODE, false)
  },
  /**
   * Sends http request to server to add todo. Adds todo to state.todoList
   * @param {object} state
   * @param {string} message
   */
  [actions.CREATE_NEW_TODO] (state, message) {
    const todo = {description: message.toString()}
    HTTP.post('', todo)
      .then(response => {
        this.commit(mutations.ADD_TO_TODO_LIST, response.data)
        this.commit(mutations.SET_CREATE_MODE, false)
      })
  },
  /**
   * Sends request to server to delete todo. Removes from state.doneList
   * @param {object} state
   * @param {number} id
   */
  [actions.DELETE_DONE_ITEM] (state, id) {
    HTTP.delete(id.toString())
      .then(response => {
        if (response.data === true) {
          const doneList = removeItemFromList(state.getters.doneList, id)
          this.commit(mutations.SET_DONE_LIST, doneList)
        }
      })
  },
  /**
   * Sends request to server to delete todo. Removes from state.todoList
   * @param {object} state
   * @param {number} id
   */
  [actions.DELETE_TODO_ITEM] (state, id) {
    HTTP.delete(id.toString())
      .then(response => {
        if (response.data === true) {
          const todoList = removeItemFromList(state.getters.todoList, id)
          this.commit(mutations.SET_TODO_LIST, todoList)
        }
      })
  },
  /**
   * Sends request to server to edit todo's description.
   * @param {object} state
   * @param {object} item
   */
  [actions.EDIT_ITEM_DESCRIPTION] (state, item) {
    HTTP.put(item.id.toString(), item)
  },
  /**
   * Marks todo as not done.
   * @param {object} state
   * @param {object} item
   */
  [actions.MARK_ITEM_UNDONE] (state, item) {
    item.done = false
    HTTP.put(item.id.toString(), item)
      .then(response => {
        this.commit(mutations.ADD_TO_TODO_LIST, response.data)
        const doneList = removeItemFromList(response.data, state.getters.doneList)
        this.commit(mutations.SET_DONE_LIST, doneList)
      })
  },
  /**
   * Marks todo as done
   * @param {object} state
   * @param {object} item
   */
  [actions.MARK_TODO_AS_DONE] (state, item) {
    item.done = true
    HTTP.put(item.id.toString(), item)
      .then(response => {
        this.commit(mutations.ADD_TO_DONE_LIST, response.data)
        const todoList = removeItemFromList(response.data, state.getters.todoList)
        this.commit(mutations.SET_TODO_LIST, todoList)
      })
  },
  /**
   * Opens "Create a todo" mode
   */
  [actions.OPEN_CREATE_MODE] () {
    this.commit(mutations.SET_CREATE_MODE, true)
  },
  /**
   * Makes call to server to get list of all todos.
   * Separates todos into TodoList and DoneList.
   */
  [actions.SET_INITIAL_DATA] () {
    HTTP.get('')
    .then(response => {
      const todoList = []
      const doneList = []
      const data = response.data
      data.forEach((item) => {
        item.done ? doneList.push(item) : todoList.push(item)
      })
      this.commit(mutations.SET_TODO_LIST, todoList)
      this.commit(mutations.SET_DONE_LIST, doneList)
    })
  }
}
