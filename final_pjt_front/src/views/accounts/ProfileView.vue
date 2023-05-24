<template>
  <div class="nanum">
    <h2>작성한 글</h2>
    <ul>
      <li v-for="(board, index) in userBoards" :key="`board_${index}`" class="item">
        <div class="item-content">
          <h4>{{ board.title }}</h4>
        </div>
        <div class="item-action">
          <router-link
            :to="{
                name: 'DetailView',
                params: { id: board.id }
            }"
            class="link"
          >
            바로가기
          </router-link>
        </div>
      </li>
    </ul>
    <hr>
    <br>
    <h2>작성한 댓글</h2>
    <hr>
    <ul>
      <li v-for="(comment, index) in userComments" :key="`comment_${index}`" class="item">
        <div class="item-content">
          <h4>{{ comment.content }}</h4>
        </div>
        <div class="item-action">
          <router-link
            :to="{
                name: 'DetailView',
                params: { id: comment.board }
            }"
            class="link"
          >
            바로가기
          </router-link>
        </div>
      </li>
    </ul>
    <hr>
    <br>
    <h2>즐겨찾기 된 금융 상품</h2>
    <hr>
    <ul>
      <li v-for="(product, index) in userProducts" :key="`product_${index}`" class="item">
        <div class="item-content">
          <h4>{{ product.fin_prdt_nm }}</h4>
          <p>{{ product.intr_rate }}</p>
        </div>
        <div class="item-action">
          <router-link
            :to="{
                name: 'ProductDetailView',
                params: { id: product.id }
            }"
            class="link"
          >
            바로가기
          </router-link>
        </div>
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

<style>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}

.item-content {
  flex: 1;
}

.link {
  display: inline-block;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
}

.link:hover {
  background-color: #0056b3;
}
</style>

