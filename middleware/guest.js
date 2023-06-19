// middleware for restricting login and register pages from logged in users

export default function({ store, redirect }) {
    if (store.state.auth.loggedIn) {
      return redirect('/home')
    }
  }