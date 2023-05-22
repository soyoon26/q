import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '../router'

const API_URL = 'http://127.0.0.1:8000' // 요청보낼 API server 도메인 변수에

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    user_id: null,
    username: null,
    isLogin: false,
    articles: [],
    content_author: null,
    comments: [],
    products: [],
    token: null,
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false // token이 있으면 true
    },
  },
  mutations: {
    GET_PRODUCTS(state, products) {
      console.log('data전달')
      state.products = products
    },
    GET_ARTICLES(state, articles) {
      state.articles = articles // 받아온 데이터 state에 저장
    },
    ADD_ARTICLE(state, article) {
      state.articles.push(article)
      // console.log('어디로이동할건지비밀임')
      // router.push({name : 'DetailView'})
    },
    ADD_COMMENT(state, comment) {
      state.comments.push(comment)
    },
    SET_COMMENTS(state, comments) {
      state.comments = comments
    }, // 댓글 목록 업데이트 반영하기
    // signup & login -> 완료하면 토큰 발급
    SIGN_UP(state, token) {
      state.token = localStorage.getItem('jwt1')
      state.isLogin = true
      state.username = username.value
      router.push({ name: 'App' })
    },
    LOGOUT(state) {
      state.isLogin = false
      state.username = null
    },
    SAVE_TOKEN(state, payload) {
      // state.token = token //token 저장
      state.token = payload.token
      state.username = payload.username
      console.log(state.token)
      localStorage.setItem('jwt', state.token) // 이걸 저장
      // state.token = localStorage.getItem('jwt')
      state.isLogin = true
      state.user_id = payload.user_id
      // state.username = payload.username.value
      console.log(state.token)
      console.log(state.username, '썅 ㅋㅋ')
      router.push({ name: 'App' }) // store/index.js $router 접근 불가 -> import를 해야함
      console.log(this.isLogin)
    },
  },
  actions: {
    getArticles(context) {
      axios({
        method: 'get',
        url: `${API_URL}/boards/`, // 요청보낼 경로 확인
        // headers : {
        //   Authorization : `Token ${ context.state.token }`
        // }
      })
        .then((res) => {
          // console.log(res, context)
          context.commit('GET_ARTICLES', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    createArticle({ commit, state }, articleData) {
      return new Promise((resolve, reject) => {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${state.token}`,
          },
        };
        console.log(state.token)
        axios.post(`${API_URL}/boards/create/`, articleData, config)
          .then(response => {
            commit('ADD_ARTICLE', response.data)
            resolve(response) // 비동기 작업 완료 후 성공 결과 전달
          })
          .catch(error => {
            console.log('글 생성 에러')
            console.error(error)
            reject(error) // 비동기 작업 중 실패한 경우 에러 전달
          })
      })
    },

    submitComment({ commit, state }, { article_id, content }) {
      // 토큰 값을 헤더에 추가하여 API 요청을 보냅니다.
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${state.token}`,
        },
      };

      const data = {
        content: content, // 요청 데이터를 딕셔너리 형식으로 구성
      };

      axios.post(`${API_URL}/boards/${article_id}/comment/`, JSON.stringify(data), config)
        .then(response => {
          commit('ADD_COMMENT', response.data)
          console.log(response.data)
          console.log('한번만 ㅜㅜ')
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateComments({ commit, state }) {
      axios.get(`${API_URL}/boards/comments/`, { // 주소 변경해야 함
        headers: {
          'Authorization': `Token ${state.token}`,
        },
      })
        .then((res) => {
          commit('SET_COMMENTS', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getProducts(context) {
      console.log('actions도착')
      axios({
        method: 'get',
        url: `${API_URL}/products/deposit-products/`,
      })
        .then((res) => {
          console.log(res, context)
          context.commit('GET_PRODUCTS', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    signup({ commit }, payload) {
      const username = payload.username
      const password1 = payload.password1
      const password2 = payload.password2
      // const password2 = payload.password2

      axios({
        method: 'post',
        url: `${API_URL}/accounts/signup/`,
        data: {
          username,
          password1,
          password2,
        },
      })
        .then((res) => {
          console.log(res)
          commit('SIGN_UP', res.data.key)
        }) // store에 저장해야 여러군데에서 token을 쓸 수 있음
        .catch(error => {
          // 오류 응답 처리
          if (error.response && error.response.data && error.response.data.non_field_errors) {
            const errorMessages = error.response.data.non_field_errors;
            // 알림창으로 오류 메시지 표시
            alert(errorMessages.join('\n'));
          }
        });
        // .catch((err) => {
        //   console.log('왜')
        //   console.log(axios.data)
        //   console.log(err)
        // })
    },
    login({ commit }, payload) {
      const username = payload.username
      const password = payload.password
      console.log(username)
      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username,
          password,
        },
      })
        .then((res) => {
          console.log('이게 진짜', res.data)
          const token = res.data.key
          commit('SAVE_TOKEN', { token, username })
          console.log(username)
          console.log('흠냐릥')

          console.log('_________')
        })

        //   commit('SAVE_TOKEN', { key: res.data.key, userId: user_id } )
        //   console.log(username)
        // })
        .catch((err) => console.log(err))
    },
    logout({ commit }) {
      localStorage.removeItem('jwt')
      commit('LOGOUT')
    },
  },

  modules: {},
})
