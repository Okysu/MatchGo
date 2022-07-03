import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import { useStatusStore } from "@/stores/status";
let store: any = null;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: LoginView,
      meta: {
        title: '登录/注册',
        subtitle: 'MatchGo'
      }
    },
    {
      path: "/admin",
      name: "admin",
      redirect: "/home",
      component: () => import("@/views/AdminView.vue"),
      meta: {
        title: '管理中心',
        subtitle: 'MatchGo'
      },
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/HomeView.vue"),
          meta: {
            title: '总览',
            subtitle: 'MatchGo'
          }
        },
        {
          path: "/make",
          name: "make",
          component: () => import("@/views/MakeView.vue"),
          meta: {
            title: '创建的比赛',
            subtitle: 'MatchGo'
          }
        },
        {
          path: "/join",
          name: "join",
          component: () => import("@/views/JoinView.vue"),
          meta: {
            title: '参加的比赛',
            subtitle: 'MatchGo'
          }
        },
        {
          path: "/all",
          name: "all",
          component: () => import("@/views/AllView.vue"),
          meta: {
            title: '正在进行的比赛',
            subtitle: 'MatchGo'
          }
        },
        {
          path: "/like",
          name: "like",
          component: () => import("@/views/LikeView.vue"),
          meta: {
            title: '收获到的点赞',
            subtitle: 'MatchGo'
          }
        },
        {
          path: "/comment",
          name: "comment",
          component: () => import("@/views/CommentView.vue"),
          meta: {
            title: '收获到的评论',
            subtitle: 'MatchGo'
          }
        },
        {
          path: "/trophy",
          name: "trophy",
          component: () => import("@/views/TrophyView.vue"),
          meta: {
            title: '收获到的奖项',
            subtitle: 'MatchGo'
          }
        },
        {
          path: "/recommend",
          name: "recommend",
          component: () => import("@/views/RecommendView.vue"),
          meta: {
            title: '获得推荐的比赛内容',
            subtitle: 'MatchGo'
          }
        },
        {
          path: "/set",
          name: "set",
          component: () => import("@/views/SetView.vue"),
          meta: {
            title: '修改个人资料',
            subtitle: 'MatchGo'
          }
        },
        {
          path: "/put",
          name: "put",
          component: () => import("@/views/PutView.vue"),
          meta: {
            title: '提交工单',
            subtitle: 'MatchGo'
          }
        },
        {
          path: "/about",
          name: "about",
          component: () => import("@/views/AboutView.vue"),
          meta: {
            title: '关于本系统',
            subtitle: 'MatchGo'
          }
        },
        {
          path: '/:pathMatch(.*)*',
          meta: {
            title: '你来错地方了',
            subtitle: 'MatchGo'
          },
          component: () =>
            import('@/views/errors/404.vue')
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () =>
        import('@/views/errors/404.vue')
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (store === null) {
    store = useStatusStore()
  }
  if (to.meta.title && typeof to.meta.title === 'string') {
    document.title = to.meta.title + ' - ' + to.meta.subtitle
  }
  if (to.name !== 'index' && !store.Login()) {
    next('/')
  }
  if (to.name == 'index' && store.Login()) {
    next('/admin')
  }
  next()
})
export default router;
