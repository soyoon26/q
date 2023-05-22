<template>
  <div>
    <h1>Products List</h1>
    <ProductsListItem
    v-for="product in products"
    :key="product.id"
    :product="product"/>
  </div>
</template>

<script>
import ProductsListItem from '@/components/ProductsListItem'
export default {
    name : 'ProductsList',
    components : {
        ProductsListItem,
    },
    computed: {
        products() {
        return this.$store.state.products
        }
    }

}
</script>

<style>

</style>