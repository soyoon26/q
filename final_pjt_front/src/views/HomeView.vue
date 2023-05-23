<template>
  <div class="home nanum">
    <img src="@/assets/maintitle.png" alt="maintitle" style="width: 50%;">
    <h3>SONO FIN은 해외에서 국내 은행을 이용하기 편리하도록 지원하는 서비스입니다.</h3>
    <br>
    <router-link :to="{ name: 'ProductsView' }">
      <img src="@/assets/products.jpg" class="d-block w-100" style="height: 500px; object-fit: cover;" alt="...">
    </router-link>&nbsp;&nbsp;
    <h3>금융 상품</h3>
    <h5>자신에게 맞는 최상의 금융 상품을 알아보세요.</h5>
    <br>  
    <router-link :to="{ name: 'ExchangeView' }">
      <img src="@/assets/exchange.jpg" class="d-block w-100" style="height: 500px; object-fit: cover;" alt="...">
    </router-link>&nbsp;&nbsp;
    <h3>환율 계산기</h3>
    <h5>지금 세계의 다양한 통화를 이용해 환율을 계산해보세요</h5>
    <br>
    <router-link :to="{ name: 'BankView' }">
      <img src="@/assets/bank.jpg" class="d-block w-100" style="height: 500px; object-fit: cover;" alt="...">
    </router-link>&nbsp;&nbsp;
    <h3>주변 은행 찾기</h3>
    <h5>지금 당신의 주변에 있는 은행을 검색해보세요.</h5>
    <br>
    <router-link :to="{ name: 'ArticleView' }">
      <img src="@/assets/community.jpg" class="d-block w-100" style="height: 500px; object-fit: cover;" alt="...">
    </router-link>&nbsp;&nbsp;
    <h3>자유게시판</h3>
    <h5>다양한 사람과 자신의 의견을 나눠보세요.</h5>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style>
@font-face {
  font-family: 'NanumSquareNeo-cBd';
  src: url('@/assets/NanumSquareNeo-cBd.ttf');
}

.nanum {
  font-family: 'NanumSquareNeo-cBd';
}
</style>
