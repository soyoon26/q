<template>
  <div id="app">
<<<<<<< HEAD
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Sono</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'ProductsView' }">예금상품</router-link>&nbsp;&nbsp;
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'ExchangeView' }">환율계산기</router-link>&nbsp;&nbsp;
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'ArticleView' }">자유게시판</router-link>&nbsp;&nbsp;
            </li>
            <li class="nav-item">
            </li>
          </ul>
          <span class="navbar-text">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <span>유저네임 : {{ this.$store.state.username }}</span>&nbsp;&nbsp;
              <li class="nav-item">
                <router-link :to="{ name: 'LogInView' }">로그인</router-link>&nbsp;&nbsp;
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'SignUpView' }">회원가입</router-link>&nbsp;&nbsp;
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
    <nav>
      <span v-if="$store.state.isLogin"  style="padding-right:0.5rem">
        <a href="" @click="logout">Logout | </a>
        <!-- <router-link :to="{name:'profile', params:{username:this.$store.state.user.username}}">My profie</router-link> -->
      </span>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{ name: 'ArticleView' }">Board</router-link> | 
      <router-link :to="{ name: 'SignUpView' }">SignUpPage</router-link> | 
      <router-link :to="{ name: 'LogInView' }">LogInPage</router-link> |
      <router-link :to="{ name: 'ProductsView' }">ProductsPage</router-link> |
      <router-link :to="{ name: 'ExchangeView' }">ExchangePage</router-link>
      <router-link :to="{ name: 'BankView' }">BankPage</router-link>
    </nav>
    <router-view/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
=======
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
>>>>>>> cdb19fe7099652db38516b4bfe754cbb1a066538
  </div>
</template>

<script>
<<<<<<< HEAD
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components : {
  },
  data(){
    return {
      searchContent : null,
      searchProducts : null
    }
  },
  methods : {
    searchClick(){
      const searchBox = document.querySelector('#searchBox');
      searchBox.classList.toggle('active');
    },
    logout: function () {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'App' })
    },
=======
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
>>>>>>> cdb19fe7099652db38516b4bfe754cbb1a066538
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
<<<<<<< HEAD
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

=======
  margin-top: 60px;
}
>>>>>>> cdb19fe7099652db38516b4bfe754cbb1a066538
</style>
