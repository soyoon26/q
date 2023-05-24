<template>
  <div class="container d-flex flex-column nanum">
    <div>
      <h1>회원가입</h1>
      <hr>
      <p>문자, 숫자, @/./+/-/_만 가능합니다.</p>
      <form @submit.prevent="signup" class="signup-form">
        <div class="form-group">
          <label for="username" class="label">Username:</label>
          <input type="text" id="username" v-model="username" class="input">
        </div>

        <div class="form-group">
          <label for="password1" class="label">Password:</label>
          <input type="password" id="password1" v-model="password1" class="input">
        </div>

        <div class="form-group">
          <label for="password2" class="label">Confirm Password:</label>
          <input type="password" id="password2" v-model="password2" class="input">
        </div>

        <button type="submit" class="btn btn-primary">회원가입</button>
      </form>
    </div>
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
.container {
  margin: auto;
}

.align-self-center {
  text-align: center;
}

.signup-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.label {
  display: block;
  font-weight: bold;
}

.input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>