import loadable from '@loadable/component';

const Home = loadable(() => import('../Component/Home'));
const Login = loadable(() => import('../Component/Login'));


export const routeConfig= [
    {
      path: '/login',
      exact: true,
      component: Login,
      id: 1,
      name: '登陆',
      routes: []
    },
    {
      path: '/index',
      exact: false,
      component: Home,
      id: 2,
      name: '首页',
      routes: []
    }
]





