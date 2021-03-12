<template>
  <nav class="nav grey lighten-5">
    <div class="nav-wrapper transparent">
      <a href="#" class="brand-logo blue-grey-text">JumpCloud UI Assignment</a>
      <ul class="nav-tabs right">
        <li>
          <router-link to="/" class="nav-item blue-grey-text waves-effect waves-blue-grey">
            <i class="material-icons">assignment</i>
          </router-link>
        </li>
        <li>
          <router-link to="/done" class="nav-item blue-grey-text waves-effect waves-blue-grey">
            <i class="material-icons">assignment_turned_in</i>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
    export default {
      name: 'nav-menu'
    }
</script>
