<template>
  <div class="section">
    <h5 class="grey-text text-lighten-5">To-Do Items</h5>
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large waves-effect waves-light orange right" v-on:click="openCreateMode">
        <i class="material-icons grey-text text-lighten-5">add</i>
      </a>
    </div>
    <div class="divider grey lighten-5"></div>
    <div class="row">
        <todo v-for="todo in todoList" :data="todo" :key="todo.id"></todo>
        <add-todo></add-todo>
    </div>
  </div>
</template>

<script>
  import * as actions from 'actions/enums'
  import AddTodo from './add-todo'
  import { mapGetters } from 'vuex'
  import Todo from './todo'

  export default {
    computed: {
      ...mapGetters([
        'todoList'
      ])
    },
    components: {
      AddTodo,
      Todo
    },
    methods: {
      openCreateMode
    }
  }

  /**
   * Sets state.isCreateMode = true
   * opens "Create a todo" mode
   */
  function openCreateMode () {
    this.$store.dispatch(actions.OPEN_CREATE_MODE)
  }
</script>
