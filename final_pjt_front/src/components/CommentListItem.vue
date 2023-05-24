<template>
  <div>
    <template v-if="!isEditMode">
      <span class="comment-info">
        <span class="author">{{ comment.author }}</span>
        <span class="content-box">
          <span class="content">{{ comment.content }}</span>
        </span>
      </span>
      <span class="button-group" v-if="isAuthorizedUser">
        <button class="btn btn-primary" @click="toggleEditMode">수정</button>
        <button class="btn btn-danger" @click="deleteComment">삭제</button>
      </span>
      <div class="time-info">
        <p>생성시각: {{ comment.created_at }}</p>
        <p>수정시각: {{ comment.updated_at }}</p>
      </div>
    </template>

    <template v-else>
      <textarea v-model="editContent"></textarea>
      <div class="button-group">
        <button class="btn btn-primary" @click="saveComment">저장</button>
        <button class="btn btn-secondary" @click="cancelEdit">취소</button>
      </div>
    </template>
  </div>
</template>
  
  <script>
  import axios from 'axios';
  
  const API_URL = 'http://127.0.0.1:8000';
  
  export default {
    name: 'CommentListItem',
    props: {
      comment: Object,
    },
    data() {
      return {
        isEditMode: false,
        editContent: '',
      };
    },
    methods: {
      toggleEditMode() {
        this.isEditMode = true;
        this.editContent = this.comment.content;
      },
      saveComment() {
        axios
          .put(
            `${API_URL}/boards/${this.comment.board}/comment/${this.comment.id}/`,
            {
              content: this.editContent,
            },
            {
              headers: {
                Authorization: `Token ${this.$store.state.token}`,
              },
            }
          )
          .then((res) => {
            console.log(res);
            console.log('댓글이 수정됨');
            this.isEditMode = false;
            this.$store.dispatch('updateComments');
          })
          .catch((err) => {
            console.log(err);
            console.log('댓글 수정 중 에러 발생');
          });
      },
      cancelEdit() {
        this.isEditMode = false;
      },
      deleteComment() {
        console.log(this.comment.id);
        console.log('이게떠야댐 !!!!');
        console.log(this.comment.board);
  
        console.log(
          `${API_URL}/boards/${this.comment.board}/comment/${this.comment.id}`
        );
        axios
          .delete(
            `${API_URL}/boards/${this.comment.board}/comment/${this.comment.id}/`,
            {
              headers: {
                Authorization: `Token ${this.$store.state.token}`,
              },
            }
          )
          .then((res) => {
            console.log(res);
            console.log('댓글이 삭제됨');
            this.$store.dispatch('updateComments');
          })
          .catch((err) => {
            console.log(err);
            console.log('댓글 지우려다가 에러남');
          });
      },
    },
    computed: {
      isAuthorizedUser() {
        return (
          this.$store.state.isLogin &&
          this.$store.state.username === this.comment.author
        );
      },
    },
  };
  </script>
  
  <style>
  .comment-info {
    margin-bottom: 10px;
  }
  
  .author {
    font-weight: bold;
  }
  
  .content-box {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }
  
  .button-group {
    margin-top: 10px;
    text-align: right;
  }
  
  .time-info {
    color: #888;
    font-size: 12px;
    margin-top: 10px;
  }
  </style>
  