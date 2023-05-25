![그림1](https://github.com/FinanceProduct/final_pjt/assets/116616569/95aa40db-b979-45c3-99f2-a580ca1776bb)

## Mission

해외에서의 국내 은행 이용 편의성 제공

## 🚩 목차 

▪ [목표](https://github.com/FinanceProduct/final_pjt#-%ED%8C%80%EC%9B%90%EC%86%8C%EA%B0%9C) 

▪ [설치 및 실행](https://github.com/FinanceProduct/final_pjt#%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%8B%A4%ED%96%89) 

▪ [ERD](https://github.com/FinanceProduct/final_pjt#erd) 

▪ [팀원소개](https://github.com/FinanceProduct/final_pjt#-%ED%8C%80%EC%9B%90%EC%86%8C%EA%B0%9C) 

▪ [팀원소개](https://github.com/FinanceProduct/final_pjt#-%ED%8C%80%EC%9B%90%EC%86%8C%EA%B0%9C) 

▪ [팀원소개](https://github.com/FinanceProduct/final_pjt#-%ED%8C%80%EC%9B%90%EC%86%8C%EA%B0%9C) 

▪ [팀원소개](https://github.com/FinanceProduct/final_pjt#-%ED%8C%80%EC%9B%90%EC%86%8C%EA%B0%9C) 
▪ [팀원소개](https://github.com/FinanceProduct/final_pjt#-%ED%8C%80%EC%9B%90%EC%86%8C%EA%B0%9C) 
▪ [팀원소개](https://github.com/FinanceProduct/final_pjt#-%ED%8C%80%EC%9B%90%EC%86%8C%EA%B0%9C) 
▪ [팀원소개](https://github.com/FinanceProduct/final_pjt#-%ED%8C%80%EC%9B%90%EC%86%8C%EA%B0%9C)   
   


## Vision

- 해외에서도 손쉽게 국내 은행을 찾을 수 있다
  
- 해당 은행에서 나에게 맞는 금융 상품을 손쉽게 찾을 수 있다
  
- 원하는 통화로의 환율 계산을 간편하게 할 수 있다
  
- 은행의 정보와 업무에 대해 다른 사람들과 소통할 수 있다
  

## 개발단계



#### 개발기간

5/17 ~ 5/25

#### 사용한 기술스택

##### 주요기술스택


##### 아키텍처

## 설치 및 실행


##### 백엔드


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
   
   
2. 금융상품정보 업데이트
 
 
   - `http://127.0.0.1:8000/products/save-deposit-products/`
   - `http://127.0.0.1:8000/products/save-deposit-options/`






##### 프론트엔드

- ```
- `./final_pjt_front`


  npm install
  npm을 이용하여 필요한 패키지 설치
  
  npm run serve
  웹팩 개발 서버 구동
  ```

#### 와이어프레임

와이어 프레임 들어갈 공간

#### ERD

![image](https://github.com/FinanceProduct/final_pjt/assets/122415737/45f544d4-6877-4656-a52a-fdcfad0e335d)

#### API 설계

##### main project

| HTTP method | URL Pattern | function |
| --- | --- | --- |
| -   | `admin/` | admin.site.urls |
| -   | `boards/` | boards.urls |
| -   | `accounts/signup/` | dj_rest_auth.registration.urls |
| -   | `accounts/` | dj_rest_auth.urls |
| -   | `exchange/` | exchange.urls |
| -   | `products/` | products.urls |

##### boards app

| HTTP method | URL Pattern | function |
| --- | --- | --- |
| GET | `-` | 글 목록 조회 |
| GET | `comments/` | 댓글 목록 조회 |
| POST | `create/` | 게시글 생성 |
| GET | `<int:pk>/` | 글 상세 조회 |
| DELETE, PUT | `<int:pk>/edit/` | 글 수정/삭제 |
| POST | `<int:board_pk>/comment/` | 댓글 생성 |
| DELETE, PUT | `<int:board_pk>/comment/<int:comment_pk>/` | 댓글 수정/삭제 |

##### exchange app

| HTTP method | URL Pattern | function |
| --- | --- | --- |
| GET | `calculate/` | 환율 조회 |


#### products app

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
#### 파일 구조

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

## 주요기능

#### 메인 페이지

![home](https://github.com/FinanceProduct/final_pjt/assets/122415737/730301b5-ffb5-4479-874c-6ad5348cc187)

사이트에 대한 소개입니다.

상단의 네비게이션 바와 본문의 사진을 통해 원하는 기능으로 이동할 수 있습니다.

#### 주변 은행 찾기

![kakaomap](https://github.com/FinanceProduct/final_pjt/assets/122415737/17fb94a9-35be-4d20-b8c4-06cda832aa73)

Google Map에서 나의 현재 위치 혹은 원하는 위치에 있는 국내 은행을 검색해볼 수 있습니다.

선택한 은행을 로그인한 구글 계정에 저장할 수 있습니다.

#### 금융상품

![products_list](https://github.com/FinanceProduct/final_pjt/assets/122415737/bcd42fa0-f0a7-4fc5-ab07-3d47e2acc5d9)

국내 은행의 예금과 적금 상품을 비교할 수 있습니다.

원하는 은행별로 상품을 확인할 수 있습니다.

![product_detail](https://github.com/FinanceProduct/final_pjt/assets/122415737/122aa194-2697-4fe5-9d05-ad41f1c8ed96)

관심있는 상품의 상세정보를 확인하고 즐겨찾기에 추가할 수 있습니다.


#### 환율계산기

![exchange](https://github.com/FinanceProduct/final_pjt/assets/122415737/6557a5bd-9b05-46c3-a108-60f6d33a63a9)

#### 커뮤니티

![article_list](https://github.com/FinanceProduct/final_pjt/assets/122415737/e122c8fb-47b9-4c5f-9225-e1d78af2cf65)

게시판에서 은행 업무 관련 질문과 의견을 나눌 수 있습니다.


![comment](https://github.com/FinanceProduct/final_pjt/assets/122415737/0db37bf5-8e38-45ae-9b71-50f6730f62df)

게시글에서 댓글을 통해 작성자와 소통할 수 있습니다.

![create_article](https://github.com/FinanceProduct/final_pjt/assets/122415737/5034e611-83fe-4adc-9b8d-6ab8d6786f04)

로그인한 회원에 한해 게시글을 작성할 수 있습니다.


![article_edit_delete](https://github.com/FinanceProduct/final_pjt/assets/122415737/b0ecc049-3be8-440d-bd8a-4f5a3b9c6e53)

자신이 작성한 글을 수정및 삭제할 수 있습니다.

#### 회원

![login_logout](https://github.com/FinanceProduct/final_pjt/assets/122415737/28d534c5-bc59-4c9d-ab41-a7b9c2480996)

일반 계정 혹은 구글 계정을 통해 회원가입 및 로그인이 가능합니다.

![profile](https://github.com/FinanceProduct/final_pjt/assets/122415737/b4bc1025-7215-4f31-9280-9cbee01284fa)

내가 즐겨찾기 한 상품, 내가 쓴 글과 댓글을 확인할 수 있습니다.

---

## 협업과정

#### 팀원 및 업무 분담

## 👨‍👩‍👧‍👧 팀원소개   
| NONO | SOSO |
|------|------|
| 팀장 | 팀원 |
| <img style="width:160px" src = "https://github.com/FinanceProduct/final_pjt/assets/122415737/2504e088-d42f-4219-9bdc-72898549999f"> | <img style="width:160px" src = "https://github.com/FinanceProduct/final_pjt/assets/122415737/ea2ddb61-538d-4176-a893-60431dc57f9b0"> |
| [@stubborngastropod](https://github.com/stubborngastropod) | [@soyoon26](https://github.com/soyoon26) |

#### 개발기록

대충...........노션 캘린더에 작성하면 ㄱㅊ할듯ㄱ

## 회고

백엔드를 주로 맡아서 진행했지만 프론트엔드 작업도 병행하다보니 원래 부족했던 프론트 지식을 몸으로 부딪히며 배웠고 연동하는 과정이 재밌어 풀스택 개발에 흥미를 가지게 되었다. 왜 직렬화를 하고 왜 데이터 모델링을 하는지 등 개발 지식이 머릿속에 떠다니기만 하는 상태에서 시작했지만 프로젝트를 진행하며 이 지식이 왜, 어떻게 쓰여야 하는지를 고민하면서 더 나은 개발자가 되기 위한 방향성에 대해서도 생각할 수 있는 기회였다. 소셜 로그인이나 배포 등 보안과 네트워크, 소프트웨어에 대한 지식이 부족한 상태에서 맨땅에 헤딩하려니 힘든 점이 많았고 결국 구현하지 못한 기능들에 대해서는 아쉬움이 많이 남았다. 웹 개발과 꽤 친숙해진 만큼 다음 프로젝트에서는 좀 더 많은 준비를 해서 욕심을 부려 만족할만한 결과물을 내보고 싶다.
