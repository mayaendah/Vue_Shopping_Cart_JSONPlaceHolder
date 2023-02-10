import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'AllProduct',
    component: () => import(/* webpackChunkName: "about" */ '../views/AllProduct.vue')
  },
  {
    path: '/detail/:id',
    name: 'DetailPesanan',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailPesanan.vue')
  },
  {
    path: '/keranjang',
    name: 'KeranjangPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/KeranjangPage.vue')
  },
  {
    path: '/sukses-pesan',
    name: 'SuksesPesan',
    component: () => import(/* webpackChunkName: "about" */ '../views/SuksesPesan.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
