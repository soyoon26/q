![그림1](https://github.com/FinanceProduct/final_pjt/assets/116616569/95aa40db-b979-45c3-99f2-a580ca1776bb)

## 🚩 목표

해외에서의 국내 은행 이용 편의성 제공

<br>
<br>



## 📁 목차 

▪ [목표](https://github.com/FinanceProduct/final_pjt#-%EB%AA%A9%ED%91%9C) 

▪ [기획의도 및 기대효과](https://github.com/FinanceProduct/final_pjt#-%EA%B8%B0%ED%9A%8D%EC%9D%98%EB%8F%84-%EB%B0%8F-%EA%B8%B0%EB%8C%80%ED%9A%A8%EA%B3%BC) 

▪ [사용한 기술스택](https://github.com/FinanceProduct/final_pjt#-%EC%82%AC%EC%9A%A9%ED%95%9C-%EA%B8%B0%EC%88%A0%EC%8A%A4%ED%83%9D) 



▪ [설치 및 실행](https://github.com/FinanceProduct/final_pjt#-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%8B%A4%ED%96%89) 

▪ [ERD](https://github.com/FinanceProduct/final_pjt#-erd) 

▪ [API 설계](https://github.com/FinanceProduct/final_pjt#-api-%EC%84%A4%EA%B3%84) 

▪ [파일구조](https://github.com/FinanceProduct/final_pjt#-%ED%8C%8C%EC%9D%BC-%EA%B5%AC%EC%A1%B0) 

▪ [주요기능](https://github.com/FinanceProduct/final_pjt#-%EC%A3%BC%EC%9A%94%EA%B8%B0%EB%8A%A5) 

▪ [팀원 및 업무분담](https://github.com/FinanceProduct/final_pjt#-%ED%8C%80%EC%9B%90-%EB%B0%8F-%EC%97%85%EB%AC%B4-%EB%B6%84%EB%8B%B4) 

▪ [회고](https://github.com/FinanceProduct/final_pjt#-%ED%9A%8C%EA%B3%A0)   
   
<br>
<br>

## ✔ 기획의도 및 기대효과


- 해외에서도 손쉽게 국내 은행을 찾을 수 있다.
  
- 해당 은행에서 나에게 맞는 금융 상품을 손쉽게 찾고 비교할 수 있다.
  
- 원하는 통화로의 환율 계산을 간편하게 할 수 있다.
  
- 해외에 위치해있는 국내은행의 정보와 업무에 대해 다른 사람들과 소통할 수 있다.

<br>
<br>
  

## 📋 개발기간 : 2023.05.17 ~ 2023.05.25


<br>

## 🛠 사용한 기술스택
<br>
 
 #### ◾ 언어
<br>
 <table>
    <tbody>
        <tr>
            <td align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" width="100" height="100"></td>
            <td align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" width="100" height="70"></td>
            <td align="center"><img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" width="70" height="100"></td>
        </tr>
        <tr>
            <td align="center">Javascript</td>
            <td align="center">CSS</td>
           <td align="center">HTML5</td>
        </tr>
    </tbody>
</table>

<br>
 
 #### ◾ 프레임워크


 <br>

 <table>
    <tbody>
        <tr>
            <td align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/220px-Vue.js_Logo_2.svg.png"" width="100" height="100"></td>
           <td align="center"><img src="https://github.com/FinanceProduct/final_pjt/assets/122415737/1dfa7af6-1ce1-4356-843f-555792ac88b3" width="100" height="100"></td>
        </tr>
        <tr>
            <td align="center">Vue.js</td>
           <td align="center">Django</td>
        </tr>
    </tbody>
</table>


<br> 


 
 #### ◾ 협업툴
 
 <br>

 <table>
    <tbody>
        <tr>
            <td align="center"><img src="https://github.com/FinanceProduct/final_pjt/assets/122415737/2c00aafe-e3ab-4b33-bd34-288e90336955" width="100" height="100"></td>
           <td align="center"><img src="https://github.com/FinanceProduct/final_pjt/assets/122415737/16d2fe67-988a-44f9-a742-dcf5a61c0c80" width="100" height="100"></td>
        </tr>
        <tr>
            <td align="center">Mattermost</td>
           <td align="center">Git</td>
        </tr>
    </tbody>
</table>


 <br>
 <br>

## 💻 설치 및 실행

  <br>
  

#### ***Backend***


1. 기본 실행

   - `./final_pjt_back` 
   - ```
     venv 가상환경 설정 - python 3.9
     
     pip install requirements.txt
     
     python manage.py makemigrations
     
     python maange.py migrate
     
     python manage.py runserver
     ```
   
   - env 파일에는 환율, 카카오로그인, 금융상품정보를 위한 API key 정보가 들어갑니다. 
   
   
   <br>
   
2. 금융상품정보 업데이트
 
 
   - `http://127.0.0.1:8000/products/save-deposit-products/`
   - `http://127.0.0.1:8000/products/save-deposit-options/`


  <br>



#### ***Frontend***

 
 `./final_pjt_front`

```
  npm install
  npm을 이용하여 필요한 패키지 설치
  
  npm run serve
  웹팩 개발 서버 구동
``` 

  <br>
  <br>




## 💻 ERD

![image](https://github.com/FinanceProduct/final_pjt/assets/122415737/45f544d4-6877-4656-a52a-fdcfad0e335d)

  <br>
    <br>



## 💻 API 설계

  <br>

#### ▪ main project

| HTTP method | URL Pattern | function |
| --- | --- | --- |
| -   | `admin/` | admin.site.urls |
| -   | `boards/` | boards.urls |
| -   | `accounts/` | dj_rest_auth.urls |
| -   | `exchange/` | exchange.urls |
| -   | `products/` | products.urls |

  <br>

#### ▪ accounts app

| HTTP method | URL Pattern | function |
| --- | --- | --- |
| POST | `signup/` | 회원가입 |
| POST | `login/` | 로그인 |
| POST | `logout/` | 로그아웃 |


  <br>

#### ▪ boards app

| HTTP method | URL Pattern | function |
| --- | --- | --- |
| GET | `-` | 글 목록 조회 |
| GET | `comments/` | 댓글 목록 조회 |
| POST | `create/` | 게시글 생성 |
| GET | `<int:pk>/` | 글 상세 조회 |
| DELETE, PUT | `<int:pk>/edit/` | 글 수정/삭제 |
| POST | `<int:board_pk>/comment/` | 댓글 생성 |
| DELETE, PUT | `<int:board_pk>/comment/<int:comment_pk>/` | 댓글 수정/삭제 |


  <br>


#### ▪ exchange app

| HTTP method | URL Pattern | function |
| --- | --- | --- |
| GET | `calculate/` | 환율 조회 |


  <br>

#### ▪ products app

| HTTP method | URL Pattern | function |
| --- | --- | --- |
| GET | `save-deposit-products/` | 금융상품 불러오기 |
| GET | `save-deposit-options/` | 금리 불러오기 |
| GET,POST | `deposit-products/` | 금융상품 목록 조회 |
| GET, POST | `deposit-options/` | 금리 조회 |
| GET | `deposit-products/<int:pk>/` | 금융상품 상세조회 |
| GET | `deposit-product-options/<str:fin_prdt_cd>/` | 금리 상세조회 |
| GET | `deposit-products/top-rate/` | 최고금리조회 |
| POST | `<int:product_pk>/subscription/` | 상품 즐겨찾기 |   
| GET | `subscribed-products/` | 유저별 구독 상품 |

  <br>
    <br>


## 💻 파일 구조


```
📦final_pjt_back
 ┣ 📂final_pjt_back
 ┃ ┣ 📜accounts
 ┃ ┣ 📜boards
 ┃ ┣ 📜exchange
 ┃ ┗ 📜products
 ┣ 📂final_pjt_back
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜ArticleEdit
 ┃ ┃ ┃ ┣ 📜ArticleList
 ┃ ┃ ┃ ┣ 📜ArticleListItem
 ┃ ┃ ┃ ┣ 📜CommentEdit
 ┃ ┃ ┃ ┣ 📜CommentList
 ┃ ┃ ┃ ┣ 📜CommentListItem
 ┃ ┃ ┃ ┣ 📜CreatComment
 ┃ ┃ ┃ ┣ 📜HelloWorld
 ┃ ┃ ┃ ┣ 📜KakaomapView
 ┃ ┃ ┃ ┣ 📜ProductsList
 ┃ ┃ ┃ ┗ 📜ProductsListItem
 ┃ ┃ ┣ 📂router
 ┃ ┃ ┃ ┗ 📜index
 ┃ ┃ ┣ 📂store
 ┃ ┃ ┃ ┗ 📜index
 ┃ ┃ ┣ 📂views
 ┃ ┃ ┃ ┣ 📂accounts
 ┃ ┃ ┃ ┃ ┣ 📜KakaoLoginView
 ┃ ┃ ┃ ┃ ┣ 📜LoginView
 ┃ ┃ ┃ ┃ ┣ 📜ProfileView
 ┃ ┃ ┃ ┃ ┣ 📜SignUpView
 ┃ ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┃ ┣ 📜AboutView
 ┃ ┃ ┃ ┃ ┣ 📜ArticleView
 ┃ ┃ ┃ ┃ ┣ 📜BankView
 ┃ ┃ ┃ ┃ ┣ 📜CommentView
 ┃ ┃ ┃ ┃ ┣ 📜CreateView
 ┃ ┃ ┃ ┃ ┣ 📜DetailView
 ┃ ┃ ┃ ┃ ┣ 📜ExchangeView
 ┃ ┃ ┃ ┃ ┣ 📜HomeView
 ┃ ┃ ┃ ┃ ┣ 📜ProductDetailView
 ┃ ┃ ┃ ┃ ┣ 📜ProductsView
 ┃ ┃ ┃ ┣ 📜App
 ┗ 📜README.md
 
```



## 🎈 주요기능

  <br>
    <br>


### ▪ 메인 페이지

  <br>

![home](https://github.com/FinanceProduct/final_pjt/assets/122415737/730301b5-ffb5-4479-874c-6ad5348cc187)

```               
- 사이트에 대한 소개입니다.

- 상단의 네비게이션 바와 본문의 사진을 통해 원하는 기능으로 이동할 수 있습니다.
```
               
  <br>
    <br>

### ▪ 주변 은행 찾기

  <br>

![kakaomap](https://github.com/FinanceProduct/final_pjt/assets/122415737/17fb94a9-35be-4d20-b8c4-06cda832aa73)

```
- Google Map에서 나의 현재 위치 혹은 원하는 위치에 있는 국내 은행을 검색해볼 수 있습니다.(현재 Kakao Map 적용)

- 선택한 은행을 로그인한 구글 계정에 저장할 수 있습니다. (구현 예정)
```
               
  <br>
    <br>
    

### ▪ 금융상품

  <br>

![products_list](https://github.com/FinanceProduct/final_pjt/assets/122415737/bcd42fa0-f0a7-4fc5-ab07-3d47e2acc5d9)

```
- 국내 은행의 예금 상품을 금리별로 비교할 수 있습니다.

- 원하는 은행별로 상품을 확인할 수 있습니다.
```
               
  <br>

![product_detail](https://github.com/FinanceProduct/final_pjt/assets/122415737/122aa194-2697-4fe5-9d05-ad41f1c8ed96)

```               
- 관심있는 상품의 상세정보를 확인하고 즐겨찾기에 추가할 수 있습니다.
```

  <br>
    <br>



### ▪ 환율계산기

  <br>

![exchange](https://github.com/FinanceProduct/final_pjt/assets/122415737/6557a5bd-9b05-46c3-a108-60f6d33a63a9)

```               
- 나라별 실시간 환율 조회가 가능합니다.
```
  <br>
    <br>
  

### ▪ 커뮤니티

  <br>

![article_list](https://github.com/FinanceProduct/final_pjt/assets/122415737/e122c8fb-47b9-4c5f-9225-e1d78af2cf65)

```
- 게시판에서 은행 업무 관련 질문과 의견을 나눌 수 있습니다.
```
               
  <br>


![comment](https://github.com/FinanceProduct/final_pjt/assets/122415737/0db37bf5-8e38-45ae-9b71-50f6730f62df)

```
- 게시글에서 댓글을 통해 작성자와 소통할 수 있습니다.
```
  <br>

![create_article](https://github.com/FinanceProduct/final_pjt/assets/122415737/5034e611-83fe-4adc-9b8d-6ab8d6786f04)

```
- 로그인한 회원에 한해 게시글을 작성할 수 있습니다.
```

  <br>

![article_edit_delete](https://github.com/FinanceProduct/final_pjt/assets/122415737/b0ecc049-3be8-440d-bd8a-4f5a3b9c6e53)

```               
- 자신이 작성한 글을 수정및 삭제할 수 있습니다.
```
               
  <br>
    <br>

### ▪ 회원

![login_logout](https://github.com/FinanceProduct/final_pjt/assets/122415737/28d534c5-bc59-4c9d-ab41-a7b9c2480996)

```               
- 일반 계정 혹은 구글 계정을 통해(구현예정) 회원가입 및 로그인이 가능합니다.
```
  <br>

![profile](https://github.com/FinanceProduct/final_pjt/assets/122415737/b4bc1025-7215-4f31-9280-9cbee01284fa)

```
- 내가 즐겨찾기 한 상품, 내가 쓴 글과 댓글을 확인할 수 있습니다.
```
  <br>

---
  
  <br>
  <br>

## 👨‍👧‍👦 팀원 및 업무 분담

  <br>

### ◾ 팀원소개   


| 노창현(NONO) | 박소윤(SOSO) |
|------|------|
| 팀장 | 팀원 |
| <img style="width:160px" src = "https://github.com/FinanceProduct/final_pjt/assets/122415737/2504e088-d42f-4219-9bdc-72898549999f"> | <img style="width:160px" src = "https://github.com/FinanceProduct/final_pjt/assets/122415737/ea2ddb61-538d-4176-a893-60431dc57f9b0"> |
| [@stubborngastropod](https://github.com/stubborngastropod) | [@soyoon26](https://github.com/soyoon26) |

  <br>

### ◾ 업무 분담

 

#### ▪ 🐌 노창현
   ##### ▫ Backend
   ```
      - 전체 API 설계
      - 전체 데이터 모델링
      - 전체 장고 로직 구현
   ```
   ##### ▫ Frontend 
   ```
      - 로고 디자인
      - 화면 및 설계 디자인
      - 지도 검색 vue 로직 구현 (검색 및 목록 조회)
      - 프로필 페이지 vue 로직 구현 (작성글 조회, 작성댓글 조회, 즐겨찾기 조회)
   ```
   ##### ▫ 기타
   ```
      - 팀장
      - PPT제작 및 발표
   ```
   ##### ▫ 추후업데이트 예정목록
  ```
      - 소셜 로그인
      - 은행 분류 알고리즘
      - 배포
   ```
  
   <br>
   <br>
   
#### ▪ 🐶 박소윤 
   ##### ▫ BackEnd
   ```
   - ERD 작성
   - 게시판, 환율 데이터 직렬화
   ```
   ##### ▫ Frontend
   ```
   - 회원가입 및 로그인 vue 로직 구현
   - 게시판 vue 로직 구현(글 수정 및 삭제, 댓글 수정 및 삭제)
   - 환율 vue 로직 구현
   - 금융상품 페이지 vue 로직 구현(조건별 조회 및 금리비교, 상세조회 후 즐겨찾기)
   ```
   ##### ▫ 기타
   ```
   - readme 총 정리
   ```
   ##### ▫ 추후 업데이트 예정 목록
   ```
   - 게시판 좋아요 기능
   - 대댓글 기능
   ```

  <br>
  <br>
  <br>


## 📽 회고

  <br>

#### ◾ 🐌 NONO(노창현)

 백엔드를 주로 맡아서 진행했지만 프론트엔드 작업도 병행하다보니 원래 부족했던 프론트 지식을 몸으로 부딪히며 배웠고 연동하는 과정이 재밌어 풀스택 개발에 흥미를 가지게 되었다. 왜 직렬화를 하고 왜 데이터 모델링을 하는지 등 개발 지식이 머릿속에 떠다니기만 하는 상태에서 시작했지만 프로젝트를 진행하며 이 지식이 왜, 어떻게 쓰여야 하는지를 고민하면서 더 나은 개발자가 되기 위한 방향성에 대해서도 생각할 수 있는 기회였다. 소셜 로그인이나 배포 등 보안과 네트워크, 소프트웨어에 대한 지식이 부족한 상태에서 맨땅에 헤딩하려니 힘든 점이 많았고 결국 구현하지 못한 기능들에 대해서는 아쉬움이 많이 남았다. 웹 개발과 꽤 친숙해진 만큼 다음 프로젝트에서는 좀 더 많은 준비를 해서 욕심을 부려 만족할만한 결과물을 내보고 싶다.

  <br>

#### ◾ 🐶 SOSO(박소윤) 

 프로젝트 첫날 바로 명세서에 나와있는 필수사항부터 개발을 시작하여 반에서 가장 많은 것들을 구현하여 교수님께서 구현 정도가 높다는 말씀을 해주셨다. 기획서를 상세하게 작성하고 나니 기능을 구현할 때도 그에 맞춰서 할 수 있었고 어떤 기능을 빼고 넣을지 생각이 정립되어 프로젝트 진행에 있어 기획서가 강조됐던 이유를 깨달았다. 아직 더 구현해보고 싶은 기능들이 있어 아쉽지만 이번 경험으로 인해 다음 프로젝트때 더 발전된 모습을 보일 수 있을 것이다.
 
 싸피에서의 협업은 처음이어서 걱정이 많았는데 재밌게 잘 끝냈다. 좋은 학우와 같은 팀이 되어 도움도 많이 받을 수 있었고 기획에 관해서도 더 넓은 시야를 가지게 되었다. 디버깅을 하는 과정에서도 많이 배울 수 있어 좋았다. 사실 협업에서 중요시하는 건 갈등과정과 그 해결과정이지만 다른 관점에서 보면 오히려 갈등이 없었다는 것이 서로를 충분히 배려했다는 반증이라 생각한다. 정말로 팀 분위기가 가장 좋았다고 단언할 수 있다. 
 
 개인적인 공부성향으로는 기초지식을 확실하게 이해했다고 느껴지지 않으면 다음 단계로 넘어가지 못하는 편이어서 공부하는데 시간이 걸리곤 했는데 프로젝트는 마감기한이 정해져 있어 완벽하게 이해가 가지 않더라도 일단 기능을 구현하고 반복하며 다르게 적용도 해야 했다. 이론적인 공부를 할 때보다 실전상황에 투입되어보니 기술에 있어 이해가 더 잘되고 진도도 빨리 나아가졌다. 싸피 생활 중 가장 빠른 성장을 했다고 나 스스로 느꼈다. 다음 프로젝트는 걱정보다 기대가 앞선다.   

  <br>
