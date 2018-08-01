export default {
  getInfo() {
    if (localStorage.info) {
      const data = localStorage.getItem('info')
      return JSON.parse(data) || false
    }
    return false
  },

  loggedIn() {
    const info = this.getInfo()
    return info !== null
  },

  getUserId() {
    const info = this.getInfo()
    return info.id || null
  },

  getAccessToken() {
    const info = this.getInfo()
    return info.token || null
  },

  logout() {
    localStorage.removeItem('info')
  },
}
