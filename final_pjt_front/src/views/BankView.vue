<template>
    <div class="nanum container">
        <h1>주변 은행 찾기</h1>
        <KakaomapView/>
        <br><br><br><br><br>
    </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'
import KakaomapView from '@/components/KakaomapView'

export default {
    name: 'BankView',
    components: {
        KakaomapView,
    },
}
</script>

<style>

</style>