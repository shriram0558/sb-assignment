import { defineStore } from 'pinia'

const useAuthStore = defineStore({
  id: 'auth',

  state: () => ({
    user: null
  }),

  actions: {
    async initializeUser() {
      const userData = localStorage.getItem('user')
      if (userData) {
        this.setUser(JSON.parse(userData))
        return true
      } else {
        this.setUser(null)
        return false
      }
    },

    setUser(user) {
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))

      return true
    },

    logout() {
      this.user = null
      localStorage.removeItem('user')
      return true
    }
  },

  getters: {
    isAuthenticated() {
      const userData = localStorage.getItem('user')
      if (userData) {
        this.setUser(JSON.parse(userData))
        return true
      }
      return false
    },

    getUser() {
      const userData = localStorage.getItem('user')
      if (userData) {
        this.setUser(JSON.parse(userData))
        return this.user
      }
      return null
    }
  }
})

export default useAuthStore
