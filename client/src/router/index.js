import Vue from 'vue'
import Router from 'vue-router'

import DoneList from 'components/done-list'
import TodoList from 'components/todo-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: TodoList
    },
    {
      path: '/done',
      name: 'Done',
      component: DoneList
    }
  ]
})
