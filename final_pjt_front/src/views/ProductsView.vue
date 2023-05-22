<template>
    <div>
        <h1>ProductsView</h1>

        <hr>
        <ProductsList/>


    </div>
</template>

<script>
import ProductsList from '@/components/ProductsList.vue'
export default {
    name : 'ProductsView',
    components : {
        ProductsList,
    },
    created() {
    console.log('시작')
    this.getProducts()
    },
    methods: {
        getProducts() {
        console.log('dispatch')
          this.$store.dispatch('getProducts')  
        }
    }
}
</script>

<style>

</style>