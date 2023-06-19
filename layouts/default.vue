<template>
  <div>
    <NavBar />
    <section class="main-content columns">
      <SideNav />
      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '~/components/Nav/NavBar.vue'
import SideNav from '~/components/Nav/SideNav.vue'
export default {
  components: {
    NavBar,
    SideNav,
  },
}
</script>
