<template>
  <div class="home nanum jumbotron">
    <div class="fade-in-container slide-up-container">
      <img src="@/assets/maintitle.png" alt="maintitle" style="width: 50%;">
    </div>
    <br><br><br><br><br><br><br><br><br><br>
    <h3>SONO FIN은 해외에서 국내 은행 이용 편의성을 지원하는 서비스입니다.</h3>
    <br><br><br><br><br>
    <h3>이제 전세계 어디서든 국내에서 이용하던 은행을 편리하게 찾아볼 수 있습니다.</h3>
    <br><br><br><br><br>
    <img src="@/assets/traveller.png" alt="traveller" style="width: 20%">
    <br><br><br><br><br>
    <h3>지금 바로 SONO FIN의 서비스를 확인해보세요</h3>
    <br><br><br><br><br>
    <img src="@/assets/bank.jpg" class="d-block w-100" style="height: 500px; object-fit: cover;" alt="...">
    <br><br><br>
    <h3>주변 은행 찾기</h3>
    <br>
    <h5>해외에서 국내 은행을 찾고 싶으신가요?</h5>
    <br><br>
    <h5>SONO FIN에서는 현재 위치를 검색해 주변의 국내 은행을 찾아볼 수 있습니다</h5>
    <br><br>
    <h5>지금 당신의 주변에 있는 은행을 검색해보세요</h5>
    <br><br>
    <router-link :to="{ name: 'BankView' }">
      <button>바로가기</button>
    </router-link>&nbsp;&nbsp;
    <br><br>
    <img src="@/assets/products.jpg" class="d-block w-100" style="height: 500px; object-fit: cover;" alt="...">
    <br><br><br>
    <h3>금융 상품</h3>
    <br>
    <h5>원하는 은행을 찾았다면, 해당 은행에서 이용할 수 있는 상품을 찾아보세요</h5>
    <br><br>
    <h5>SONO FIN에서는 은행별, 저축기간, 금리별로 다양한 예적금 상품을 비교해볼 수 있습니다</h5>
    <br><br>
    <h5>자신에게 맞는 최상의 금융 상품을 알아보세요</h5>
    <br><br>
    <router-link :to="{ name: 'ProductsView' }">
      <button>바로가기</button>
    </router-link>&nbsp;&nbsp;
    <br><br>  
    <img src="@/assets/exchange.jpg" class="d-block w-100" style="height: 500px; object-fit: cover;" alt="...">
    <br><br><br>
    <h3>환율 계산기</h3>
    <br>
    <h5>지금 세계의 환율이 궁금하신가요?</h5>
    <br><br>
    <h5>SONO FIN에서는 n개국의 통화를 빠르게 비교해볼 수 있습니다</h5>
    <br><br>
    <h5>지금 바로 환율을 계산해보세요</h5>
    <br><br>
    <router-link :to="{ name: 'ExchangeView' }">
      <button>바로가기</button>
    </router-link>&nbsp;&nbsp;
    <br><br>
    <img src="@/assets/community.jpg" class="d-block w-100" style="height: 500px; object-fit: cover;" alt="...">
    <br><br><br>
    <h3>자유게시판</h3>
    <br>
    <h5>지점 방문, 복잡한 절차, 물어보기가 막막한가요?</h5>
    <br><br>
    <h5>SONO FIN에서는 정보를 공유하고 원하는 질문과 답변을 찾아볼 수 있습니다</h5>
    <br><br>
    <h5>다양한 사람과 자신의 의견을 나눠보세요</h5>
    <br><br>
    <router-link :to="{ name: 'ArticleView' }">
      <button>바로가기</button>
    </router-link>&nbsp;&nbsp;
    <br><br><br><br><br>
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

.fade-in-container {
  opacity: 0;
  animation: fade-in 1s ease-in forwards;
}

.slide-up-container {
  transform: translateY(50px);
  animation: slide-up 1s ease-out forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  display: none;
}

.fade-in.show {
  display: block;
}

@media screen and (max-width: 700px) {
  .jumbotron > h3 {
    font-size: 16px;
  }
  .jumbotron > h5 {
    font-size: 12px;
  }
}
</style>
