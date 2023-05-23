import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '@/views/ArticleView'
import CreateView from '@/views/CreateView'
import DetailView from '@/views/DetailView'
import ProductDetailView from '@/views/ProductDetailView'
import SignUpView from '@/views/accounts/SignUpView'
import LogInView from '@/views/accounts/LogInView'
import ProfileView from '@/views/accounts/ProfileView'
import ProductsView from '@/views/ProductsView'
import ExchangeView from '@/views/ExchangeView'
import ArticleEdit from '@/components/ArticleEdit'
import CommentEdit from '@/components/CommentEdit'
import BankView from '@/views/BankView'
import GoogleView from '@/views/login/GoogleView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/boards',
    name: 'ArticleView',
    component: ArticleView
  },
  {
    path: '/:id/edit',
    name: 'ArticleEdit',
    component: ArticleEdit
  },
  {
    path: '/create',
    name: 'CreateView',
    component: CreateView
  },
  {
    path: '/signup',
    name: 'SignUpView',
    component: SignUpView
  },

  {
    path: '/products',
    name: 'ProductsView',
    component: ProductsView
  },
  {
    path: 'product/:id',
    name: 'ProductDetailView',
    component: ProductDetailView,
  },
  {
    path: '/exchange',
    name: 'ExchangeView',
    component: ExchangeView
  },
  {
    path: '/login',
    name: 'LogInView',
    component: LogInView
  },
  {
    path: '/profile',
    name: 'ProfileView',
    component: ProfileView
  },

  {
    path: '/:id',
    name: 'DetailView',
    component: DetailView,
  },
  {
    path: '/:id/comment/:commentId',
    name: 'CommentEdit',
    component: CommentEdit,
  },
  {
    path: '/kakaoview',
    name: "KakaoView",
    component: () => import("../views/login/KakaoView.vue")
  },
  {
    path: '/bank',
    name: 'BankView',
    component: BankView
  },
  {
    path: '/google',
    name: "GoogleView",
    component: GoogleView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
