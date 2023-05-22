<template>
    <div></div>
  </template>
  
  <script>
  import axios from 'axios'
  const SERVER_URL = process.env.KAKAO_LOGIN_KEY;
  
  export default {
      name: "KakaoLoginView",
      created(){
        const {query: {
          code
        }} = this.$router.currentRoute
        
        axios({
          method: 'post',
          url: `${SERVER_URL}/accounts/kakao/login/callback/`,
          data: {
            code 
          }
        }).then(res => {
          this.$store.dispatch("login", res.data);
          this.$router.push({ name: "Movies" });
        }).catch(err => {
          console.error(err)
        })
      }
  }
  </script>