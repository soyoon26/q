<template>
  <div>
    <h3>Create Comment</h3>
    <form @submit.prevent="submitComment">
      <label for="content">Content:</label>
      <textarea id="content" v-model="content"></textarea>
      <button type="submit" id="submit">댓글 등록</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
        content: '',
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    },
    ...mapGetters(['isLogin', 'username']),
  },
  methods: {
    submitComment(event) {
      if (this.$store.state.isLogin) {
      const content = this.content
      // const articleId = 
      console.log('댓글 등록:', this.content);
      console.log(this.$route.params.id)
      this.$store.dispatch('submitComment',{
      article_id: this.$route.params.id,
      content: content
    })
    this.content = '' // 댓글 입력 칸 초기화
    } else {
        alert('로그인이 필요합니다.')
        this.$router.push({ name: 'LogInView' })
      }
    },
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
