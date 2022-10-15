import Vue from 'vue'
import VueRouter from 'vue-router'
import FifaLogin from '@/components/FifaLogin'
import FifaMain from '@/components/FifaMain'
import FifaRegister from '@/components/FifaRegister'
import FifaFeedback from '@/components/FifaFeedback'

Vue.use(VueRouter)

const routes = [
  {
	  path: '/',
	  name: 'FifaLogin',
	  component: FifaLogin
  },
  {
	  path: '/FifaMain',
	  name: 'FifaMain',
	  component: FifaMain
  },
  {
	  path: '/FifaFeedback',
	  name: 'FifaFeedback',
	  component: FifaFeedback
  },
  {
	  path: '/FifaRegister',
	  name: 'FifaRegister',
	  component: FifaRegister
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
