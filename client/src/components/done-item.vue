<template>
  <div class="col s12 m6 xl4">
    <div class="card grey lighten-5 hoverable">
      <div class="card-content blue-grey-text text-lighten-1">
        <p><span class="done">{{ data.description }}</span></p>
      </div>
      <div class="card-action right-align">
        <a href="#" class="blue-grey-text waves-effect waves-blue-grey btn-flat">
          <i class="material-icons" v-on:click="markItemUndone(data)">settings_backup_restore</i>
        </a>
        <a href="#" class="blue-grey-text waves-effect waves-blue-grey btn-flat">
          <i class="material-icons" v-on:click="deleteItem(data.id)">delete</i>
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
      deleteItem,
      markItemUndone
    }
  }

  /**
   * Calls action to delete done todo
   * @param {number} id
   */
  function deleteItem (id) {
    this.$store.dispatch(actions.DELETE_DONE_ITEM, id)
  }

  /**
   * Calls action to mark done item as undone
   * @param {object} item
   */
  function markItemUndone (item) {
    this.$store.dispatch(actions.MARK_ITEM_UNDONE, item)
  }
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
