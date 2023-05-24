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
    <p>은행이름 : {{ product.kor_co_nm }}</p>
    <p>예금이름 : {{ product.fin_prdt_nm }}</p>
      
      </router-link>

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