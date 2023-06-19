<template>
    <header>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=yes"
      />
      <!-- Sign in  Form -->
      <LoginForm />
    </header>
  </template>
  
  <script>
  import LoginForm from '~/components/Auth/LoginForm'
  export default {
    components: { LoginForm },
    middleware: 'guest',
    head() {
      return {
        title: 'Task Manager | Login'
      }
    }
  }
  </script>
  