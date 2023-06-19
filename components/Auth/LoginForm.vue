<template>
  <section>
    <b-field label="Email">
      <b-input
        v-model="userData.username"
        type="email"
        placeholder="example@taskmanager.com"
        maxlength="30"
      >
      </b-input>
    </b-field>

    <b-field label="Password">
      <b-input v-model="userData.password" type="password" password-reveal>
      </b-input>
    </b-field>
    <b-button type="is-primary is-light" @click="login(userData)"
      >Login</b-button
    >
  </section>
</template>

<script>
export default {
  name: 'LoginForm',
  middleware: 'guest',
  data: () => ({
    userData: { username: '', password: '' },
  }),

  methods: {
    async login(userData) {
      try {
        // this.$toast.show('Logging in...')
        await this.$auth.loginWith('local', {
          data: userData,
        })
        // this.$toast.success('Successfully authenticated')
        this.$router.push('/tasks')
      } catch (e) {
        // this.$toast.error('Unable to login with provided credentials')
        // eslint-disable-next-line no-console
        console.log('Unable to login with provided credentials')
      }
    },
    async SendPasswordResetEmail() {
      this.submit = 'Sending Recovery Link'
      await this.$axios
        .post('v1/auth/users/reset_password/', {
          email: this.password_reset_email,
        })
        .then((response) => {
          if (response.status === 204) {
            this.$toast.success(
              'A password recovery email has been sent to your email'
            )
            window.location.reload(true)
          }
        })
        .catch((error) => {
          if (error.response) {
            this.$toast.show(`${error.response.data.detail}`)
          }
        })
    },
  },
}
</script>
