<template>
    <div>
      <template v-if="!isEditMode">
        <p>댓글 작성자: {{ comment.author }}</p>
        <p>댓글 내용: {{ comment.content }}</p>
        <p>댓글 생성시각: {{ comment.created_at }}</p>
        <p>댓글 수정시각: {{ comment.updated_at }}</p>
        <div v-if="isAuthorizedUser">
          <button @click="toggleEditMode">수정</button>
          <button @click="deleteComment">삭제</button>
        </div>
      </template>
  
      <template v-else>
        <textarea v-model="editContent"></textarea>
        <button @click="saveComment">저장</button>
        <button @click="cancelEdit">취소</button>
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
  </style>
  