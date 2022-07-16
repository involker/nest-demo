const Index = () => import('@/views/home');
const Login = () => import('@/views/login');
const routes = [
  { path: '/', component: Index },
  {
    path: '/login', component: Login, meta: {
      noLogin: true
    }
  },
]
export default routes;