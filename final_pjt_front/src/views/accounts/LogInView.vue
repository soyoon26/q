<template>
  <div class="nanum container">
    <h1>로그인</h1>
    <hr>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="username" class="label">Username:</label>
        <input type="text" id="username" v-model="username" class="input">
      </div>

      <div class="form-group">
        <label for="password" class="label">Password:</label>
        <input type="password" id="password" v-model="password" class="input">
      </div>

      <button type="submit" class="btn btn-primary">로그인</button>
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
.login-form {
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