<template>
    <div>
      <h3>상품 Detail</h3>
      {{ product }} 
      <hr>
      <h3>공시제출월이 필요</h3>

      <p>공시제출월 : {{ product.kor_co_nm }}</p>
      <p>은행이름 : {{ product.kor_co_nm }}</p>
      <p>예금이름 : {{ product.fin_prdt_nm }}</p>
      <p>가입기간 : {{ product.etc_note }}</p>
      <p>가입대상 : {{ product.join_member }}</p>
      <p>가입방법 : {{ product.join_way }}</p>
      <p> 사이트 이동 : {{  }}</p> #이동안되는 링크
      <p> 사이트 이동 : {{  }}</p> 
      

      <button @click="forSubscription">
          {{ isUserSubscribed ? '가입 취소' : '상품 가입' }}
        </button>
  
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  const API_URL = 'http://127.0.0.1:8000'
  
  export default {
      name : 'ProductDetailView',
  
      computed: {
      isSubscribed() {
        return this.$store.state.depositProduct.isSubscribed;
          },
      isUserSubscribed() {
        return this.$store.state.user.isSubscribed;
          },
      },
      data() {
          return {
              product : null
          }
      }, // 끝
      created() {
          this.getProductDetail()
          // this.checkUserSubscription();
      }, //끝
      methods: {
          getProductDetail() {
          axios({
              method: 'get',
              url: `${API_URL}/products/deposit-products/${this.$route.params.id}/`,
          })
          .then((res) => {
              console.log(res)
              this.product = res.data
              this.$store.state.productId = this.product.id
              console.log('여기보세요',this.$store.state.productId)
          })
          .catch((err) => {
              console.log(err)
          })
          },
          forSubscription() {
            const Config = {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${this.$store.state.token}`,
            },
            };
            axios.post(`${API_URL}/products/${this.$route.params.id}/subscription/`, null, Config)
          .then((res) => {
              console.log(res.message) //가입메세지  
          })
          },
      }
  }
        
  </script>
  
  
  <style>
  
  
  </style>