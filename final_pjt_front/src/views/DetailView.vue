<template>
  <div>
    <h2>게시판</h2>
    <ul>
      작성자: {{ boards.author_name }}
      <!-- <div>좋아요한 사람: {{ board.like_user_names }}</div> -->
      <div>제목: {{ boards.title }}</div>
      <div>내용: {{ boards.content }}</div> 
      <div>수정 시간: {{ boards.updated_at }}</div>
      <div>생성 시간: {{ boards.created_at }}</div>

      <hr>
      <button class="btn btn-primary" @click="goToArticleView">글목록으로</button> <!-- 버튼 추가 -->
      <hr>
      <div v-if="isAuthorizedUser">
        <button class="btn btn-primary" @click="editBoard">수정</button>
      </div>
      <div v-if="isAuthorizedUser">
        <button class="btn btn-danger" @click="deleteBoard">삭제</button>
      </div>
    </ul>
    <hr>
    <Comment :boardId="boardId"/> <!--오른쪽이 부모 의미-->
    
  </div>
</template>

<script>
import axios from 'axios';
// import Comment from '@/views/Comment.vue'
import Comment from './Comment.vue';
const API_URL = 'http://127.0.0.1:8000';

export default {
  components: { Comment },
  data() {
    return {
      boards: null,
      boardId: this.$route.params.id //자식에게 전해줄 데이터 지정
    };
  },
  mounted() {
    this.fetchBoards();
  },
  methods: {
    fetchBoards() {
      if (this.boardId) {
        axios.get(`${API_URL}/boards/${this.boardId}/`)
          .then(response => {
            this.boards = response.data;
            console.log(response.data);
            console.log('밑에는');
            console.log(this.boards);
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
    editBoard() {
      this.$router.push({
        name: "ArticleEdit",
        params: {
          id: this.$route.params.id, // 게시글 ID
          title: this.boards.title, // 수정할 제목 데이터
          content: this.boards.content, // 수정할 내용 데이터
        },
      });
      console.log('수정페이지로 이동')
    },
    deleteBoard() {
      axios.delete(`${API_URL}/boards/${this.$route.params.id}/edit/`, {
        headers: {
          'Authorization': `Token ${this.$store.state.token}`
        }
      })
      .then((res) => {
        console.log(res);
        console.log('삭제됨');
        this.$router.push({ name: 'ArticleView' }); 
      })``````
      .catch((err) => {
        console.log(err);
      });
    },
    goToArticleView() {
      this.$router.push({ name: 'ArticleView' }); // 글목록으로 이동하는 라우터 경로
    },
  },
  computed: {
    isAuthorizedUser() {
      return (
        this.$store.state.isLogin &&
        this.$store.state.username === this.boards.author_name
      );
    },
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
