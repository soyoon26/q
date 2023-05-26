<template>
  <div class="nanum">
    <h1>게시글 작성</h1>
    <form @submit.prevent="createArticle" style="margin: 30px">
      <!-- form 기본 이벤트 동작 막기 -->
      <label for="title">제목</label>
      <input type="text" id="title" v-model.trim="title"><br>
      <label for="content">내용</label>
      <textarea id="content" cols="30" rows="10" v-model="content"></textarea><br>
      <input type="submit" id="submit" class="btn btn-primary">
    </form>
  </div>
</template>

<script>
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'CreateView',
  data() {
    return {
      title: null,
      content: null,
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    },
  },
  created() {
  },
  methods: {
    createArticle() {
      if (this.$store.state.isLogin) {
        const title = this.title
        const content = this.content
        
        console.log(title)
        if (!title) {
          alert('제목을 입력해주세요')
          return
        } else if (!content) {
          alert('내용을 입력해주세요')
          return
        }

        this.$store.dispatch('createArticle', { title, content })
          .then((response) => {
            alert('글 작성이 완료되었습니다.')
            const createdArticleId = response.data.id;
            this.$router.push({ name: 'DetailView', params: { id: createdArticleId } });

          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        alert('로그인이 필요합니다.')
        this.$router.push({ name: 'LogInView' })
      }
    },
  },
}
</script>

<style>
</style>
