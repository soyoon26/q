<template>
  <div>

    <h3>
        <!-- Products list Item 자리 -->
    </h3>
    <router-link
        v-if="isUserLoggedIn"
        :to="{
            name: 'ProductDetailView',
            params: { id: product.id }
        }"
        >
        <p>은행이름: {{ product.kor_co_nm }}</p>
        <p>예금이름: {{ product.fin_prdt_nm }}</p>
    </router-link>
        <template v-else>
        <div @click="redirectToLogin">
            <p>은행이름: {{ product.kor_co_nm }}</p>
            <p>예금이름: {{ product.fin_prdt_nm }}</p>
        </div>
        </template>


      <hr>
  </div>
</template>

<script>
export default {
    name : 'ProductsListItem',
    props : {
        product: Object
    },
    methods: {
    redirectToLogin() {
        alert('로그인이 필요합니다.');
        this.$router.push({ name: 'LogInView' });
      }
    },
    computed: {
    isUserLoggedIn() {
        return this.$store.state.username !== null;
    }
    }


}
</script>

<style>

</style>