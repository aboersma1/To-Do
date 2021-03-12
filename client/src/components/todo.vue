<template>
  <div class="col s12 m6 xl4">
    <div class="card grey lighten-5 hoverable">
      <div class="card-content blue-grey-text">
        <p v-show="!isEdit">{{ description }}</p>
        <div class="row" v-show="isEdit">
          <div class="input-field col s12">
            <input v-model="description" type="text">
          </div>
        </div>
      </div>
      <div class="card-action right-align" v-show="!isEdit">
        <a href="#" class="blue-grey-text waves-effect waves-blue-grey btn-flat" v-on:click="openEditMode">
          <i class="material-icons">edit</i>
        </a>
        <a href="#" class="blue-grey-text waves-effect waves-blue-grey btn-flat" v-on:click="deleteTodo(data.id)">
          <i class="material-icons">delete</i>
        </a>
        <a href="#" class="blue-grey-text waves-effect waves-blue-grey btn-flat" v-on:click="markAsDone(data)">
          <i class="material-icons">done</i>
        </a>
      </div>
      <div class="card-action right-align" v-show="isEdit">
        <a href="#" class="blue-grey-text waves-effect waves-blue-grey btn-flat left" v-on:click="cancelEditMode(data.description)">
          <i class="material-icons">highlight_off</i>
        </a>
        <a href="#" class="blue-grey-text waves-effect waves-blue-grey btn-flat" v-on:click="editTodo(data, description)">
          <i class="material-icons">input</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import * as actions from 'actions/enums'

  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    methods: {
      cancelEditMode,
      deleteTodo,
      editTodo,
      openEditMode,
      markAsDone
    },
    data: function () {
      return {
        description: this.data.description,
        isEdit: false
      }
    }
  }

  /**
   * Closes Edit Todo mode
   * Sets item description in v-model back to old value
   * @param itemDescription
   */
  function cancelEditMode (itemDescription) {
    this._data.description = itemDescription
    this._data.isEdit = false
  }

  /**
   * Calls action to delete this todo
   * @param id
   */
  function deleteTodo (id) {
    this.$store.dispatch(actions.DELETE_TODO_ITEM, id)
  }

  /**
   * Calls action to update description of todo
   * @param {object} item
   * @param {string} description
   */
  function editTodo (item, description) {
    if (description !== item.description && description.length > 0) {
      item.description = description
      this.$store.dispatch(actions.EDIT_ITEM_DESCRIPTION, item)
      this._data.isEdit = false
    }
  }

  /**
   * Calls action to mark todo as read
   * @param {object} item
   */
  function markAsDone (item) {
    this.$store.dispatch(actions.MARK_TODO_AS_DONE, item)
  }

  /**
   * Opens Edit Todo mode
   */
  function openEditMode () {
    this._data.isEdit = true
  }
</script>
