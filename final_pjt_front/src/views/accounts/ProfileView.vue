<template>
  <div>
    <h2>작성한 글</h2>
    <ul>
      <li v-for="(board, index) in userBoards" :key="`board_${index}`">
        <h3>{{ board.title }}</h3>
        <router-link
          :to="{
              name: 'DetailView',
              params: { id: board.id }
          }"
          >
          <p>글 보기</p>
        
        </router-link>
      </li>
    </ul>

    <h2>작성한 댓글</h2>
    <ul>
      <li v-for="(comment, index) in userComments" :key="`comment_${index}`">
        <p>{{ comment.content }}</p>
        <router-link
          :to="{
              name: 'DetailView',
              params: { id: comment.board }
          }"
          >
          <p>글 보기</p>
        
        </router-link>
      </li>
    </ul>

    <h2>즐겨찾기 된 금융 상품</h2>
    <ul>
      <li v-for="(product, index) in userProducts" :key="`product_${index}`">
        <h3>{{ product.fin_prdt_nm }}</h3>
        <p>{{ product.intr_rate }}</p>
        <router-link
          :to="{
              name: 'ProductDetailView',
              params: { id: product.id }
          }"
          >
          <p>바로가기</p>
        
        </router-link>
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
      currentUser: null,
    };
  },
  mounted() {
    this.getCurrentUser();
    this.getUserData();
  },
  methods: {
    getUserData() {
      const headers = {
        headers: {
          Authorization: `Token ${this.$store.state.token}`,
        },
      };

      axios.get(`${API_URL}/boards/`, headers)
        .then((res) => {
          console.log(res);
          this.boards = res.data;
          this.boards = this.boards.filter((board) => board.author_name === this.currentUser.name);
        })
        .catch((err) => {
          console.log(err);
        });

      axios.get(`${API_URL}/boards/comments/`, headers)
        .then((res) => {
          console.log(res);
          this.comments = res.data;
          this.comments = this.comments.filter((comment) => comment.author === this.currentUser.name);
        })
        .catch((err) => {
          console.log(err);
        });

        axios.get(`${API_URL}/products/deposit-products/`, headers)
        .then((res) => {
          console.log(res);
          this.products = res.data;
          this.products = this.products.filter((product) => product.customers.includes(this.currentUser.id))
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCurrentUser() {
      const userid = this.$store.state.userid;
      const username = this.$store.state.username;
      console.log(userid, username);
      this.currentUser = { id: userid, name: username };
    },
  },
  computed: {
    userBoards() {
      if (this.currentUser) {
        return this.boards.filter((board) => board.author_name === this.currentUser.name);
      } else {
        return [];
      }
    },
    userComments() {
      if (this.currentUser) {
        return this.comments.filter((comment) => comment.author === this.currentUser.name);
      } else {
        return [];
      }
    },
    userProducts() {
      if (this.currentUser) {
        return this.products.filter((product) => product.customers.includes(this.currentUser.id));
      } else {
        return [];
      }
    },
  },
};
</script>



