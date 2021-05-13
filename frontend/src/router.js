// import Vue from "vue";
// import Router from "vue-router";

// Vue.use(Router);

// export default new Router({
//   mode: "history",
//   routes: [
//     {
//       path: "/",
//       alias: "/posts",
//       name: "posts",
//       component: () => import("./components/PostsList")
//     },
//     {
//       path: "/posts/:id",
//       name: "post-details",
//       component: () => import("./components/Post")
//     },
//     {
//       path: "/add",
//       name: "add",
//       component: () => import("./components/AddPost")
//     }
//   ]
// });


import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('./views/BoardAdmin.vue')
    },
    {
      path: '/mod',
      name: 'moderator',
      // lazy-loaded
      component: () => import('./views/BoardModerator.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    },

    {
            path: "/add",
            name: "add",
            component: () => import("./components/AddPost.vue")
          },
          {
                  path: "/posts/:id",
                  name: "post-details",
                  component: () => import("./components/Post.vue")
                },
                {
                        path: "/posts",
                        // alias: "posts",
                        name: "posts",
                        component: () => import("./components/PostsList.vue")
                      },
                      {
                        path: "/comments/:id",
                        // alias: "posts",
                        name: "comment",
                        component: () => import("./components/Comment.vue")
                      },
  ]
});
