<template>
  <div class="container d-flex flex-column">
    <h3 class="col-6 align-self-center" style="text-align:center">Signup</h3>
    <div>
    <h1>Sign Up Page</h1>
    <p>로그인 페이지</p>
    <hr>
    <p>아이디 </p>
    <p>문자, 숫자, @/./+/-/_만 가능합니다.</p>
    <form @submit.prevent="signup">
      <label for="username">username : </label>
      <input type="text" id="username" v-model="username"><br>

      <label for="password1"> password : </label>
      <input type="password" id="password1" v-model="password1"><br>

      <label for="password2"> password confirmation : </label>
      <input type="password" id="password2" v-model="password2">
      
      <input type="submit" value="회원가입">
    </form>
  </div>
    <!-- <div class="form-group container align-self-center" style="margin:1rem">
      <div class="row justify-content-center">
        <div class="col-6">
          <label>username: </label>
          <input
            type="text"
            class="form-control form-control-lg"
            id="username"
            v-model="username"
          >
        </div>
      </div>
    </div>

    <div class="form-group container align-self-center" style="margin:1rem">
      <div class="row justify-content-center">
        <div class="col-6">
          <label>Password</label>
          <input
            type="password"
            class="form-control form-control-lg"
            id="password1"
            v-model="password1"
          >
        </div>
      </div>
    </div>

    <div class="form-group container align-self-center" style="margin:1rem">
      <div class="row justify-content-center">
        <div class="col-6">
          <label>Password Confirm</label>
          <input
            type="password"
            class="form-control form-control-lg"
            id="password2"
            v-model="password2"
            @keyup.enter="signup"
          >
        </div>
      </div>
    </div> -->
    
    <!-- <button
      @click="signup"
      class="btn btn-secondary btn-lg btn-block col-6 align-self-center"
      style="margin:2rem"
    >Signup</button> -->

    <!-- <div class="container align-self-center" style="margin-bottom:2rem">
      <div class="row justify-content-center">
        <span class="col-2" style="text-align:center">
          <a href="#">
            <i class="fa fa-google fa-2x"></i>
          </a>
        </span>
        <span class="col-2" style="text-align:center">
          <a href="#">
            <i class="fa fa-facebook fa-2x"></i>
          </a>
        </span>
        <span class="col-2" style="text-align:center">
          <a href="#">
            <i class="fa fa-twitter fa-2x"></i>
          </a>
        </span> -->
      <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
// import { throws } from 'assert'
// import axios from 'axios'
// const API_URL = 'http://127.0.0.1:8000'


export default {
  name: 'SignupView',
  data() {
    return {
      username: null,
      password1: null,
      password2: null,
    }
  },
  methods: {
    signup() {
      const username = this.username
      const password1 = this.password1
      const password2 = this.password2
      
      const payload = {
        username, password1 , password2
      }

      this.$store.dispatch('signup',payload)
      // axios({
      // })
    }
  }
  }
      //   method: 'post',
      //   url: `${API_URL}/accounts/signup/`,
      //   data: {username, password1, password2},
      // })
      //   .then(() => {
      //     this.$router.push({ name: 'App'})
      //   })
      //   .catch(err => {
      //     if (err.response.data.username) {
      //       alert(err.response.data.username)
      //     } else if (err.response.data.error) {
      //       alert(err.response.data.error)
      //     } else {
      //       console.log('확인 필요')
      //     }
      //     this.password1 = null
      //     this.password2 = null
  //     const payload = {
  //       username, password1, password2
  //     }
  //     console.log(payload)
  //     this.$store.dispatch('signup',payload)
  //   }

</script>

<style>

</style>