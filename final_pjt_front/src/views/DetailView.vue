<template>
  <div class="nanum">
    <h2>글 상세보기</h2>
    <div class="board-details">
      <p class="author-name">작성자: {{ boards.author_name }}</p>
      <h3 class="board-title">{{ boards.title }}</h3>
      <div class="time-info">수정 시간: {{ boards.updated_at }}</div>
      <div class="time-info">생성 시간: {{ boards.created_at }}</div>
      <div class="content-box">
        <div class="board-content">{{ boards.content }}</div>
      </div>
      <button class="btn btn-primary" @click="goToArticleView">목록으로</button>
      <span v-if="isAuthorizedUser">
        <button class="btn btn-primary" @click="editBoard">수정</button>
      </span>
      <span v-if="isAuthorizedUser">
        <button class="btn btn-danger" @click="deleteBoard">삭제</button>
      </span>
    </div>
    
    <hr>
    <Comment :boardId="boardId"/> <!--오른쪽이 부모 의미-->
    
  </div>
</template>

<script>
import axios from 'axios';
import Comment from './Comment.vue';
const API_URL = 'http://127.0.0.1:8000';

export default {
  components: { Comment },
  data() {
    return {
      boards: null,
      boardId: this.$route.params.id 
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
    },
    deleteBoard() {
      axios.delete(`${API_URL}/boards/${this.$route.params.id}/edit/`, {
        headers: {
          'Authorization': `Token ${this.$store.state.token}`
        }
      })
      .then((res) => {
        this.$store.commit('REMOVE_BOARD', this.$route.params.id);
    
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
.board-details {
  text-align: left;
  margin: 20px;
}

.author-name {
  margin-bottom: 10px;
}

.board-title {
  margin-top: 10px;
}

.time-info {
  font-size: 12px;
  color: #888;
  margin-bottom: 5px;
}

.content-box {
  border: 1px solid #ddd;
  padding: 10px;
  margin-top: 10px;
  border-radius: 2%;
}

.board-content {
  text-align: left;
  font-size: 16px;
}

.btn {
  margin-top: 10px;
  margin-right: 10px;
}

</style>
