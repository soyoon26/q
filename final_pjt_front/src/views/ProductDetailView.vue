<template>
  <div>
    <h3>상품 Detail</h3>
    <hr>
    <p>은행이름 : {{ product.kor_co_nm }}</p>
    <p>예금이름 : {{ product.fin_prdt_nm }}</p>
    <p>가입기간 : {{ product.etc_note }}</p>
    <p>가입대상 : {{ product.join_member }}</p>
    <p>가입방법 : {{ product.join_way }}</p>
    <p>join_deny : {{ product.join_deny }}</p>



  </div>
</template>


<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
    name : 'ProductDetailView',
    data() {
        return {
            product : null
        }
    },
    created() {
        this.getProductDetail()
    },
    methods: {
        getProductDetail() {
        axios({
            method: 'get',
            url: `${API_URL}/products/deposit-products/${ this.$route.params.id }/`,
        })
        .then((res) => {
            console.log(res)
            this.product = res.data
        })
        .catch((err) => {
            console.log(err)
        })
        }
    }
}
</script>

<style>

</style>