<template>
    <div class="nanum">
      <h3>상품 상세정보</h3>

      <hr>
      <p>은행이름 : {{ product.kor_co_nm }}</p>
      <p>예금이름 : {{ product.fin_prdt_nm }}</p>
      <p>가입기간 : {{ product.etc_note }}</p>
      <p>가입대상 : {{ product.join_member }}</p>
      <p>가입방법 : {{ product.join_way }}</p>
      <p> {{product.spcl_cnd}} </p>
      <hr>
      <button class="btn btn-primary" @click="forSubscription">
        {{ isSubscribed ? '즐겨찾기 취소' : '상품 즐겨찾기' }}
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
        return this.$store.state.isSub;
          },
      options() {
        return this.$store.state.options
          },
      },
      data() {
          return {
              product : null
          }
      }, // 끝
      created() {
          this.getProductDetail()
          this.checkSubscription()
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
              console.log('상품ID',this.$store.state.productId)
          })
          .catch((err) => {
              console.log(err)
          })
          },
          checkSubscription() {
            console.log('체크합니다-.-')
            this.$store.dispatch('checkSub')
            // const cfg = {
            // headers: {
            // 'Content-Type': 'application/json',
            // 'Authorization': `Token ${this.$store.state.token}`,
            //     },
            // }
            // axios.get(`${API_URL}/products/subscribed-products/`, null, cfg)

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
                console.log('이게 왜안나옴?')
              console.log(res.data.message) //가입메세지  
              alert(res.data.message);
              this.checkSubscription()
              this.isSubscribed = !this.isSubscribed;
              console.log('다시 확인')
            })
          },
      }
  }
        
  </script>
  
  
  <style>
  
  
  </style>