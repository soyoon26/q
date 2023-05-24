<template>
  <div>
    <form @submit="submitForm" class="edit-form">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="form.title" />

      <label for="content">Content:</label>
      <textarea id="content" v-model="form.content"></textarea>

      <button type="submit" :disabled="!isAuthorizedUser" class="btn btn-primary">수정</button>

      <p v-if="!isAuthorizedUser">권한이 없습니다.</p>
    </form>
    <button @click="cancelEdit" class="btn btn-secondary">수정 취소</button>
  </div>
</template>
  
  <script>
 import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

export default {
  name : 'ArticleEdit',
  data() {
    return {
      form: {
        title: '',
        content: '',
      },
      isAuthorized: false,
      requestData: {},
    };
  },
  created() {
    this.form.title = this.$route.params.title;
    this.form.content = this.$route.params.content;

    this.requestData = {
      title: this.form.title,
      content: this.form.content,
    };

    axios
      .put(`${API_URL}/boards/${this.$route.params.id}/edit/`, this.requestData, {
        headers: {
          Authorization: `Token ${this.$store.state.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('여기는 됨?');
        console.log(response.data);
        console.log(this.requestData)
        this.isAuthorized = this.checkAuthorization(response.data.author_name);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      this.requestData.title = this.form.title; // 사용자가 입력한 제목으로 업데이트
      this.requestData.content = this.form.content; 

      axios
        .put(`${API_URL}/boards/${this.$route.params.id}/edit/`, this.requestData, {
          headers: {
            Authorization: `Token ${this.$store.state.token}`,
          },
        })
        .then((response) => {
          console.log('수정 완료', response);
          this.form.title = response.data.title; // 수정된 내용으로 업데이트
          this.form.content = response.data.content;
          this.$router.push(`/${this.$route.params.id}`)
        })
        .catch((error) => {
          console.error(error);
        });
    },

    cancelEdit() {
        this.$router.push(`/${this.$route.params.id}`)
    },
    checkAuthorization(authorName) {
      return (
        this.$store.state.isLogin &&
        this.$store.state.username === authorName
      );
    },
  },
  computed: {
    isAuthorizedUser() {
      return this.isAuthorized;
    },
  },
};


  </script>

<style>
.edit-form {
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

label {
  font-weight: bold;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

</style>