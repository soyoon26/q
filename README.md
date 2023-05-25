![그림1](https://github.com/FinanceProduct/final_pjt/assets/116616569/95aa40db-b979-45c3-99f2-a580ca1776bb)

## Mission

해외에서의 국내 은행 이용 편의성 제공

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

디렉터리 구조

## 주요기능

#### 메인 페이지

---메인화면---

사이트에 대한 소개입니다.

상단의 네비게이션 바와 본문의 사진을 통해 원하는 기능으로 이동할 수 있습니다.

#### 주변 은행 찾기

---대충 구글맵 검색하는 사진---

Google Map에서 나의 현재 위치 혹은 원하는 위치에 있는 국내 은행을 검색해볼 수 있습니다.

선택한 은행을 로그인한 구글 계정에 저장할 수 있습니다.

#### 금융상품

---대충 금융상품 목록---

국내 은행의 예금과 적금 상품을 비교할 수 있습니다.

원하는 은행별로, 금리 순으로 상품을 확인할 수 있습니다.

---금융상품 상세 페이지---

관심있는 상품의 상세정보를 확인하고 즐겨찾기에 추가할 수 있습니다.

#### 커뮤니티

---대충 글 목록---

게시판에서 은행 업무 관련 질문과 의견을 나눌 수 있습니다.

---대충 게시글 상세 화면---

게시글에서 댓글을 통해 작성자와 소통할 수 있습니다.

---대충 게시글 작성 화면---

로그인한 회원에 한해 게시글을 작성할 수 있습니다.

---대충 게시글 수정 화면---

자신이 작성한 글을 수정할 수 있습니다.

#### 회원

---회원가입, 로그인 화면---

일반 계정 혹은 구글 계정을 통해 회원가입 및 로그인이 가능합니다.

---프로필 화면---

내가 즐겨찾기 한 상품, 내가 쓴 글과 댓글을 확인할 수 있습니다.

---

## 협업과정

#### 팀원 및 업무 분담

#### 개발기록

대충...........노션 캘린더에 작성하면 ㄱㅊ할듯ㄱ

## 회고

문돌이의 글실력을 보여줄 기회 ! 
(라고 말하고 gpt에세 셰익스피어풍으로 작성해오라고 시키기 ㅋㅋ
