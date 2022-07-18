const Index = () => import('@/views/home');
const Login = () => import('@/views/login');
const Article = () => import('@/views/article');
const routes = [
  { path: '/', component: Index },
  {
    path: '/login',
    component: Login,
    meta: {
      noLogin: true
    }
  },
  {
    path: '/article',
    component: Article,
  },
]
export default routes;