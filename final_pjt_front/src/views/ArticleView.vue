<template>
  <div class="nanum">
    <h1>자유게시판</h1>
    <br><br>
    <router-link v-if="this.isLogin" :to="{ name: 'CreateView' }" class="btn btn-primary">글 작성하기</router-link>
    <button v-else @click="showLoginAlert" class="btn btn-primary">글 작성하기</button>

    <!-- <router-link :to="{ name: 'CreateView' }" class="btn btn-primary">글 작성하기</router-link> -->
    <hr>
    <ArticleList/>




  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'

export default {
    name : 'ArticleView',
    components: {
      ArticleList,
    },
    computed:{
    isLogin() {
      return this.$store.getters.isLogin // 로그인 여부
    }
  },
  created() {
    this.getArticles() //인스턴스 생성된 직후 요청을 보내기 위해
  },
  methods: {
    showLoginAlert() {
      console.log('왜')
      alert('로그인이 필요합니다.');
    },
    getArticles() {
      console.log(this.$store.state.username,"야 나한테 이러지마")
      if (this.$store.state.username !== null) {
        this.$store.dispatch('getArticles');
        } else {
      alert('로그인이 필요합니다.');
      this.$router.push({ name: 'LogInView' });
}
    } // 위에가 create에 되어 있어야 함
  }
}
</script>

<style>

</style>