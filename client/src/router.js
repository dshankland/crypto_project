import Vue from 'vue';
import Router from 'vue-router';
import SummaryView from '@/views/SummaryView.vue';
import PortfolioView from '@/views/PortfolioView.vue';

Vue.use(Router);

export const router = new Router ({
  routes: [
    {
      path: '',
      name: 'home',
      component: SummaryView,
      props:true
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
      props: true
    }
  ]
})
