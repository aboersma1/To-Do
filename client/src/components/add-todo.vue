<template>
  <div class="col s12 m6 xl4" v-show="isCreateMode">
    <div class="card grey lighten-5 hoverable">
      <div class="card-content blue-grey-text">
        <div class="row">
          <div class="input-field col s12">
            <input placeholder="What do you need to do?" v-model="description" type="text">
          </div>
        </div>
      </div>
      <div class="card-action right-align">
        <a href="#" class="blue-grey-text waves-effect waves-blue-grey btn-flat left" v-on:click="closeCreateMode">
          <i class="material-icons">highlight_off</i>
        </a>
        <a href="#" class="blue-grey-text waves-effect waves-blue-grey btn-flat" v-on:click="addTodo(description)">
          <i class="material-icons">input</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import * as actions from 'actions/enums'
  import { mapGetters } from 'vuex'

  export default {
    name: 'add-to-do',
    data: function () {
      return {
        description: ''
      }
    },
    computed: {
      ...mapGetters([
        'isCreateMode'
      ])
    },
    methods: {
      addTodo,
      closeCreateMode
    }
  }

  /**
   * Calls action to add new todo
   * resets description for "Create a todo" to reset input field
   * @param {string} description
   */
  function addTodo (description) {
    if (description.length > 0) {
      this.$store.dispatch(actions.CREATE_NEW_TODO, description)
      this._data.description = undefined
    }
  }

  /**
   * Calls action to close "Create a todo" mode
   * resets description for "Create a todo" mode to undefined to reset input field.
   */
  function closeCreateMode () {
    this.$store.dispatch(actions.CLOSE_CREATE_MODE)
    this._data.description = undefined
  }
</script>
