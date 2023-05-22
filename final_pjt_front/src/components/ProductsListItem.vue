<template>
  <div>

    <h3>
        <!-- Products list Item 자리 -->
    </h3>
    <router-link
        :to="{
            name: 'ProductDetailView',
            params: { id: product.id }
        }"
    >
    <p>예금이름 : {{ product.fin_prdt_nm }}</p>
      
      </router-link>
      <!-- <p>{{ product }}</p> -->
      <!-- <p>은행이름 : {{ product.kor_co_nm }}</p> -->
      <!-- <p>가입기간 : {{ product.etc_note }}</p> -->
      <!-- <p>가입대상 : {{ product.join_member }}</p> -->
      <!-- <p>가입방법 : {{ product.join_way }}</p> -->
      <!-- <p>join_deny : {{ product.join_deny }}</p> -->
      <hr>
  </div>
</template>

<script>
export default {
    name : 'ProductsListItem',
    props : {
        product: Object
    },
}
</script>

<style>

</style>