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

    <h2>즐겨찾기에 추가한 상품</h2>
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
    this.getBoards();
    this.getComments();
    this.getProducts();
  },
  methods: {
    getBoards() {
      axios({
            method: 'get',
            url: `${API_URL}/boards/`,
        })
        .then((res) => {
            console.log(res)
            this.boards = res.data
        })
        .catch((err) => {
            console.log(err) 
        })
      },
    getComments() {
      axios({
            method: 'get',
            url: `${API_URL}/boards/comments/`,
        })
        .then((res) => {
            console.log(res)
            this.comments = res.data
        })
        .catch((err) => {
            console.log(err)
        })
      },
    getProducts() {
      axios({
            method: 'get',
            url: `${API_URL}/products/deposit-products/`,
        })
        .then((res) => {
            console.log(res)
            this.comments = res.data
        })
        .catch((err) => {
            console.log(err)
        })
    },
  },
};
</script>
