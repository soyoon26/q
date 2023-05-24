<template>
  <div id="app" class="nanum">
    <div class="fixed-top" style="background-color: white;">
      <router-link :to="{ name: 'home' }"><img src="@/assets/mainlogo.png" alt="homelogo" style="height: 70px; margin-top: 20px; margin-bottom: 10px;"></router-link>
      <nav class="navbar navbar-expand-lg bg-white">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nanum">
              <li class="nav-item">
                <router-link :to="{ name: 'home' }" class="nav-link">&nbsp;&nbsp;홈&nbsp;&nbsp;</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'BankView' }" class="nav-link">&nbsp;&nbsp;주변 은행 찾기&nbsp;&nbsp;</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'ProductsView' }" class="nav-link">&nbsp;&nbsp;금융 상품&nbsp;&nbsp;</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'ExchangeView' }" class="nav-link">&nbsp;&nbsp;환율 계산기&nbsp;&nbsp;</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'ArticleView' }" class="nav-link">&nbsp;&nbsp;자유게시판&nbsp;&nbsp;</router-link>
              </li>
              <li class="nav-item">
              </li>
            </ul>
            <span class="navbar-text nanum">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <span v-if="$store.state.isLogin"  style="padding-right:0.5rem; display: flex; align-items: center;">
                  <span>안녕하세요, {{ this.$store.state.username }}&nbsp;님</span>&nbsp;&nbsp;
                  <router-link :to="{name:'ProfileView'}" class="nav-link">내 프로필</router-link>&nbsp;&nbsp;
                    <span class="nav-item">
                      <a href="#" @click="logout" class="nav-link">로그아웃</a>
                    </span>
                </span>
                <span v-else style="padding-right: 0.5rem; display: flex; align-items: center;">
                  <router-link :to="{ name: 'LogInView' }" class="nav-link" style="margin-right: 0.5rem;">로그인</router-link>
                  <router-link :to="{ name: 'SignUpView' }" class="nav-link">회원가입</router-link>
                </span>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </div>
    <router-view style="margin-top: 300px;"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import 'bootstrap'; // Bootstrap JavaScript 파일 불러오기
import HomeView from '@/views/HomeView.vue'

export default {
  name: 'App',
  components : {
    HomeView
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
}

@font-face {
  font-family: 'NanumSquareNeo-cBd';
  src: url('@/assets/NanumSquareNeo-cBd.ttf');
}

.nanum {
  font-family: 'NanumSquareNeo-cBd';
}

.navbar.fixed-top {
  position: fixed;
  top: 0;
  width: 100%;
}

.navbar .nav-link {
  color: inherit; /* 링크의 기본 색상 상속 */
  text-decoration: none; /* 밑줄 제거 */
}
</style>
