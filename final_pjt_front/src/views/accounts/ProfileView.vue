<template>
  <div>
    <h2>작성한 글</h2>
    <ul>
      <li v-for="board in boards" :key="board.id">
        <h3>{{ board.title }}</h3>
        <p>{{ board.content }}</p>
      </li>
    </ul>

    <h2>작성한 댓글</h2>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <p>{{ comment.content }}</p>
      </li>
    </ul>

    <h2>구독한 상품</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <h3>{{ product.fin_prdt_nm }}</h3>
        <p>{{ product.intr_rate }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000';

export default {
  name: 'ProfileView',
  data() {
    return {
      boards: [],
      comments: [],
      products: [],
    };
  },
  mounted() {
    this.getUserBoards()

    this.getUserComments()

    this.getUserProducts()

    this.getCurrentUser()
  },
  methods: {
    getUserBoards() {
      axios({
        method: 'get',
        url: `${API_URL}/boards/`,
        headers: {
          Authorization: `Token ${this.$store.state.token}`, // 토큰 가져오기
        },
      })
        .then((res) => {
          console.log(res);
          this.boards = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getUserComments() {
      axios({
        method: 'get',
        url: `${API_URL}/boards/comments/`,
        headers: {
          Authorization: `Token ${this.$store.state.token}`, // 토큰 가져오기
        },
      })
        .then((res) => {
          console.log(res);
          this.comments = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getUserProducts() {
      axios({
        method: 'get',
        url: `${API_URL}/products/deposit-products/`,
        headers: {
          Authorization: `Token ${this.$store.state.token}`, // 토큰 가져오기
        },
      })
        .then((res) => {
          console.log(res);
          this.products = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCurrentUser() {
      // 현재 로그인한 사용자 정보 반환
      const userid = this.$store.state.userid
      const username = this.$store.state.username
      console.log(userid, username)
      return { id: userid, name: username };
    },
  },
  computed: {
    userBoards() {
      // 현재 로그인한 사용자가 작성한 글만 필터링
      return this.boards.filter((board) => board.author === this.getCurrentUser().id);
    },
    userComments() {
      // 현재 로그인한 사용자가 작성한 댓글만 필터링
      return this.comments.filter((comment) => comment.author === this.getCurrentUser().id);
    },
    userProducts() {
      // 현재 로그인한 사용자가 구독한 상품만 필터링
      console.log("필터링되나")
      return this.products.filter((product) => product.customers.includes(this.getCurrentUser().id));
    },
  },
};
</script>
