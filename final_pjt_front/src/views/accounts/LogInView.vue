<template>
  <div>
  
    <form @submit.prevent="login">
      <label for="username">username : </label>
      <input type="text" id="username" v-model="username"><br>

      <label for="password"> password : </label>
      <input type="password" id="password" v-model="password"><br>

      <input type="submit" value="logIn">

      <!-- <router-link :to="{ name: 'KakaoView' }">카카오로그인 이동 자리</router-link> -->
    </form>


  </div>
</template>

<script>

// import KakaoView from '@/views/login/KakaoView'


export default {
  name: 'LoginView',
  data() {
    return {
      userid: null,
      username: null,
      password: null,
    }
  },
  methods: {
    login() {
      // const userid = this.userid
      const username = this.username
      const password = this.password
      console.log(this.userid)

      const payload = {
        username, password
      }
      this.$store.dispatch('login', payload)
    }
  }
}

</script>
<style>
</style>