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
    userid: null,
    username: null,
    isLogin: false,
    articles: [],
    content_author: null,
    comments: [],
    products: [],
    options: [],
    token: null,
    isSub: false,
    depositProduct: {
      isSubscribed: false,  //상품 저장 상태 
    },
    user: {
      isSubscribed: false,
    },
    productId : null,
  
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false // token이 있으면 true
    },
  },
  mutations: {
    REMOVE_BOARD(state, articleId) {
      const index = state.articles.findIndex(article => article.id === articleId);
      if (index !== -1) {
        state.articles.splice(index, 1);
      }
    },
    GET_PRODUCTS(state, products) {
      state.products = products
    },
    GET_OPTIONS(state, options) {
      state.options = options
    },
    GET_ARTICLES(state, articles) {
      state.articles = articles 
    },
    ADD_ARTICLE(state, article) {
      state.articles.push(article)
    },
    ADD_COMMENT(state, comment) {
      state.comments.push(comment)
    },
    SET_COMMENTS(state, comments) {
      state.comments = comments
      console.log(state.comments)
    }, 
    SIGN_UP(state, token) {
      state.token = token; // 가져온 토큰을 state.token에 저장
      console.log(state.token, '이게 나와야 됨');
      state.isLogin = true;
      state.username = username.value;
      router.push({ name: 'home' });
    },
    LOGOUT(state) {
      state.isLogin = false
      state.username = null
      state.username = null
    },
    SAVE_TOKEN(state, payload) {
      // state.token = token //token 저장
      state.token = payload.token
      state.userid = payload.userid
      state.username = payload.username
      console.log(state.token)
      localStorage.setItem('jwt', state.token) // 이걸 저장
      state.isLogin = true
      router.push({ name: 'home' }) 
    },
    SET_SUB_STATUS(state, isSub) {
      state.isSub = isSub;
    },
    SAVE_USERID(state, userid) {
      state.userid = userid;
    },
    REMOVE_BOARD(state, boardforId) {
      const index = state.articles.findIndex(article => article.id === boardforId);
      if (index !== -1) {
        state.articles.splice(index, 1);
      }
      alert('글 삭제가 완료되었습니다.')
      console.log(state.aricles)
    },
  },
  actions: {
    checkSub({ commit, state }) {
      const ut = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${state.token}`,
        },
      };
      return axios
        .get(`${API_URL}/products/subscribed-products/`,ut)
        .then((response) => {
          const ids = response.data.map((item) => item.id);
          const productIdCheck = state.productId; 
          
      if (ids.includes(productIdCheck)) {
        commit('SET_SUB_STATUS', true); 
      } else {
        commit('SET_SUB_STATUS', false); 
      }
    })
    .catch((error) => {
      console.log(error);
    });
        
    },
    getArticles(context) {
      axios({
        method: 'get',
        url: `${API_URL}/boards/`, // 요청보낼 경로 확인
      })
        .then((res) => {
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
            resolve(response) 
          })
          .catch(error => {
            console.error(error)
            reject(error) 
          })
      })
    },

    submitComment({ commit, state }, { article_id, content }) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${state.token}`,
        },
      };

      const data = {
        content: content, 
      };

      axios.post(`${API_URL}/boards/${article_id}/comment/`, JSON.stringify(data), config)
        .then(response => {
          commit('ADD_COMMENT', response.data)
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateComments({ commit, state }) {
      axios.get(`${API_URL}/boards/comments/`, { 
        headers: {
          'Authorization': `Token ${state.token}`,
        },
        
      })
        .then((res) => {
          commit('SET_COMMENTS', res.data)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
          state.comments= []
        })
    },
    getProducts(context) {
      axios({
        method: 'get',
        url: `${API_URL}/products/deposit-products/`,
      })
        .then((res) => {
          context.commit('GET_PRODUCTS', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getOptions(context) {
      axios({
        method: 'get',
        url: `${API_URL}/products/deposit-options/`,
      })
        .then((res) => {
          context.commit('GET_OPTIONS', res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    
    signup({ commit, state }, payload) {
      const username = payload.username;
      const password1 = payload.password1;
      const password2 = payload.password2;
    
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
          commit('SIGN_UP', res.data.key);
    
          const userToken = {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${res.data.key}`,
            },
          };
    
          return axios
            .get(`${API_URL}/accounts/user/`, userToken)
            .then((res) => {
              const userId = res.data.pk;
              commit('SAVE_USERID', userId);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((err) => {
          alert('유효한 아이디와 비밀번호를 넣어주세요');
        });
    },
    login({ commit, state }, payload) {
      const userid = payload.userid;
      const username = payload.username;
      const password = payload.password;
      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          userid,
          username,
          password,
        },
      })
        .then((res) => {
          const token = res.data.key;
          commit('SAVE_TOKEN', { token, username });
          console.log(username);
          const userToken = {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${state.token}`,
            },
          };
          return axios
            .get(`${API_URL}/accounts/user/`, userToken)
            .then((res) => {
              const userId = res.data.pk;
              commit('SAVE_USERID', userId);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((err) => {
          alert('아이디와 비밀번호를 확인하세요.');
        });
    },
    
    logout({ commit }) {
      localStorage.removeItem('jwt')
      commit('LOGOUT')
      alert('로그아웃되었습니다.')
    },
    subscribeProduct(context) {
      const state = context.state; // 상태 객체에 접근
      const usertoken = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${state.token}`,
        },
      };
      return axios
        .post(`${API_URL}/products/${state.productId}/subscription/`,null,usertoken)
        .then((response) => {
          if (response.status === 200) {
            context.commit('SET_SUB_STATUS', true);
            context.commit('SET_USER_SUB_STATUS', true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cancelSubscription(context) {
      const state = context.state;
      
      return axios
        .post(`${API_URL}/products/${state.productId}/subscription/`)
        .then((response) => {
          if (response.status === 200) {
            context.commit('SET_SUB_STATUS', false);
            context.commit('SET_USER_SUB_STATUS', false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

  },
  

  modules: {},
})