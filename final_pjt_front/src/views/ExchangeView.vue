<template>
  <div class="container nanum">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center mb-4">환율 계산기</h1>
        <hr>
        <br>
        <div class="form-group">
          <label for="country1">FROM</label>
          <select id="country1" class="form-control" v-model="selectedCountry1" @change="calculateExchange">
            <option v-for="country in countries" :value="country.cur_unit" :key="country.cur_unit">
              {{ country.cur_nm }}
            </option>
          </select>
        </div>
        <br>
        <div class="form-group">
          <label for="country2">TO</label>
          <select id="country2" class="form-control" v-model="selectedCountry2" @change="calculateExchange">
            <option v-for="country in countries" :value="country.cur_unit" :key="country.cur_unit">
              {{ country.cur_nm }}
            </option>
          </select>
        </div>
        <br>
        <div class="form-group">
          <label for="amount">금액</label>
          <input id="amount" type="number" class="form-control" v-model="amount" @input="calculateExchange">
        </div>
        <hr>
        <div>
          <p>환율: {{ exchangeRate }}</p>
          <p>{{ selectedCountry1 }} → {{ selectedCountry2 }}: {{ convertedAmount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      countries: [], // 환율 정보를 저장할 배열
      selectedCountry1: '', // 선택한 나라 1
      selectedCountry2: '', // 선택한 나라 2
      amount: 0, // 변환할 금액 (원화)
      exchangeRate: 0, // 환율
      convertedAmount: 0 // 변환된 금액
    };
  },
  methods: {
    async fetchExchangeRates() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/exchange/calculate/');
        this.countries = response.data; 
        console.error('환율 정보를 가져오는 도중 오류가 발생했습니다:', error);
      }
    },
    calculateExchange() {
      const country1 = this.selectedCountry1;
      const country2 = this.selectedCountry2;
      const amount = this.amount;
      
      console.log(country1)
      console.log(country2)
      console.log(amount)
      const rate1 = this.countries.find(country => country.cur_unit === country1);
      const rate2 = this.countries.find(country => country.cur_unit === country2);
      console.log(parseFloat(rate2.deal_bas_r))
      console.log(parseFloat(rate1.deal_bas_r))
      console.log(rate2.deal_bas_r)
      console.log(rate1.deal_bas_r)
      console.log('도랏나')
      console.log(1,332.7)

      if (rate1 && rate2 && amount) {
        const exchangeRate = parseFloat(rate1.deal_bas_r.replace(/,/g, '')) / parseFloat(rate2.deal_bas_r.replace(/,/g, ''));
        console.log('뭐임')
        console.log(exchangeRate)
        const convertedAmount = amount * exchangeRate;
        console.log(convertedAmount)
        this.exchangeRate = exchangeRate.toFixed(2); //반올림 
        this.convertedAmount = convertedAmount.toFixed(2);
      } else {
        this.exchangeRate = 0;
        this.convertedAmount = 0;
      }
    }
  },
  mounted() {
    this.fetchExchangeRates(); // 컴포넌트가 마운트될 때 환율 정보를 가져옴
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
}

.row {
  height: 100%;
}

.align-items-center {
  display: flex;
  align-items: center;
}

.col-md-6 {
  width: 50%;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}
</style>







