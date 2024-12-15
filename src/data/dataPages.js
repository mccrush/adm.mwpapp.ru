export const dataPages = [
  {
    id: '3',
    path: '/',
    name: 'users',
    title: 'Пользователи',
    component: () => import('./../pages/PageUsers.vue'),
    position: 1,
    showMenu: true,
    group: 1
  },
  {
    id: '2',
    path: '/login',
    name: 'login',
    title: 'Авторизация',
    component: () => import('./../pages/PageLogin.vue'),
    position: 1,
    showMenu: false,
    group: 1
  },

]