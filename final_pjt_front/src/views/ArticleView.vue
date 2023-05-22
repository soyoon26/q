<template>
  <div>
    <h1>Board Page</h1>
    <router-link :to="{ name: 'CreateView' }">[CREATE]</router-link>
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
    getArticles() {
      // if (this.isLogin) { //로그인이 되어 있으면
        this.$store.dispatch('getArticles') //getArticles action으로 이동 
      // } else {
      //   alert('로그인이 필요합니다.')
      //   this.$router.push({ name: 'LogInView' }) //알림창 띄우고 login페이지로 이동
      // }
    } // 위에가 create에 되어 있어야 함
  }
}
</script>

<style>

</style>