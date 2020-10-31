import Vue from 'vue';
import Router from 'vue-router';
import ShowList from './components/ShowList.vue';
import Show from './components/Show.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'showList',
      component: ShowList
    },
    {
      path: '/show/:id',
      name: 'show',
      component: Show
    }
  ]
});
