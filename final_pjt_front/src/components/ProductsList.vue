<template>
  <div>
    <h1>안녕하지못합니다</h1>
    <div class="form-check" v-for="bank in uniqueBanks" :key="bank">
      <input class="form-check-input" type="checkbox" :id="bank" v-model="selectedBanks" :value="bank" />
      <label class="form-check-label" :for="bank">{{ bank }}</label>
    </div>
    <hr>
    <div class="card" v-for="product in filteredProducts" :key="product.id">
      <div class="card-body">
        <h5 class="card-title">
          <router-link
            :to="{
              name: 'ProductDetailView',
              params: { id: product.id }
            }"
          >
            {{ product.fin_prdt_nm }}
          </router-link>
        </h5>
        <p class="card-text">은행이름: {{ product.kor_co_nm }}</p>
        <div v-for="option in getUniqueOptionsByFinPrdtCd(product.fin_prdt_cd)" :key="option.id">
          <!-- {{ option }} -->
          <pre>저축기간: {{ option.save_trm }}</pre>
          <pre>저축금리: {{ option.intr_rate }}</pre>
          <pre>최고우대금리: {{ option.intr_rate2 }}</pre>
          <pre>저축 금리 유형명: {{ option.intr_rate_type_nm }}</pre>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsListItem from '@/components/ProductsListItem'

export default {
  name: 'ProductsList',
  components: {
    ProductsListItem,
  },
  data() {
    return {
      selectedBanks: [],
    }
  },
  created() {
    this.getOptions()
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    options() {
      return this.$store.state.options
    },
    uniqueBanks() {
      const banks = this.products.map(product => product.kor_co_nm);
      return [...new Set(banks)];
    },
    filteredProducts() {
      if (this.selectedBanks.length === 0) {
        return this.products;
      }
      return this.products.filter((product) => this.selectedBanks.includes(product.kor_co_nm));
    }
  },
  methods: {
    getOptions() {
      console.log('옵션 dispatch 시작함다 ㅋ');
      this.$store.dispatch('getOptions'); // finCoNo를 매개변수로 전달
    },
    getUniqueOptionsByFinPrdtCd(finPrdtCd) {
      const options = this.options.filter(option => option.fin_prdt_cd === finPrdtCd);
      const uniqueSaveTrmOptions = [];
      const seenSaveTrm = new Set();

      for (const option of options) {
        if (!seenSaveTrm.has(option.save_trm)) {
          seenSaveTrm.add(option.save_trm);
          uniqueSaveTrmOptions.push(option);
        }
      }
      console.log(uniqueSaveTrmOptions)
      return uniqueSaveTrmOptions;
    },
  }
}
</script>

<style scoped>
.form-check {
  margin-bottom: 10px;
}

.card {
  margin-bottom: 10px;
}
</style>
