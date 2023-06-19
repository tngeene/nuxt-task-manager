<template>
  <aside class="column is-2 section">
    <p class="menu-label is-hidden-touch">General</p>
    <ul class="menu-list">
      <li v-for="(item, key) of items" :key="key">
        <NuxtLink :to="item.to" exact-active-class="is-active">
          <b-icon :icon="item.icon" /> {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'SideNav',
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Login',
          icon: 'account',
          to: { name: 'login' },
        },
      ],
    }
  },
}
</script>
