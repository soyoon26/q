<template>
  <div class="flex-container">
    <div>
      <h5>댓글 작성</h5>
    </div>
    <div class="textarea-container">
      <form @submit.prevent="submitComment" class="comment-form">
        <label for="content" class="label"></label>
        <textarea id="content" v-model="content" class="textarea"></textarea>
      </form>
    </div>
    <div class="button-container">
      <button type="submit" id="submit" class="btn btn-primary">등록</button>
    </div>
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
.label {
  font-weight: bold;
}

.textarea {
  width: 80%;
  height: 150px;
  padding: 5px;
  margin-bottom: 10px;
}

.button-container {
  text-align: right;
}

.btn {
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0;
}

.flex-container {
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-container > div {
  margin-right: 10px;
}

.textarea-container {
  flex-grow: 1;
}

.textarea {
  width: 100%;
  height: 150px;
  padding: 5px;
  margin-bottom: 10px;
}

.button-container {
  margin-left: auto;
}
</style>
