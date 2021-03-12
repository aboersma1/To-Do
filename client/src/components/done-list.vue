<template>
  <div class="section">
    <h5 class="grey-text text-lighten-5">Done Items</h5>
    <div class="divider grey lighten-5"></div>
    <div class="row">
      <done-item v-for="item in doneList" :data="item" :key="item.id"></done-item>
    </div>
  </div>
</template>

<script>
  import DoneItem from './done-item'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'doneList'
      ])
    },
    components: {
      DoneItem
    }
  }
</script>
