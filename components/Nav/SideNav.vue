<template>
  <aside class="column is-2 section">
    <p class="menu-label is-hidden-touch">General</p>
    <ul class="menu-list">
      <li v-for="(item, key) of items" :key="key">
        <NuxtLink
          v-if="item.authenticated && isAuthenticated"
          :to="item.to"
          exact-active-class="is-active"
        >
          <b-icon :icon="item.icon" /> {{ item.title }}
        </NuxtLink>
        <NuxtLink
          v-else-if="!item.authenticated && !isAuthenticated"
          :to="item.to"
          exact-active-class="is-active"
        >
          <b-icon :icon="item.icon" /> {{ item.title }}
        </NuxtLink>
      </li>
      <b-button
        v-if="isAuthenticated"
        type="is-primary is-light"
        @click="logout"
        >Logout</b-button
      >
    </ul>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SideNav',

  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
          authenticated: true,
        },
        {
          title: 'Login',
          icon: 'account',
          to: { name: 'login' },
          authenticated: false,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
