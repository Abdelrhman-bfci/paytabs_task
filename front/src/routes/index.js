import Vue from "vue";
import Router from "vue-router";
import { isLogged, notHasPermissions } from "../utils/auth";
// import { ROUTER_DEFAULT_CONFIG } from "Config/index";
// import { routerBeforeEachFunc } from "Config/interceptors/router";

Vue.use(Router);

import DashboardLayout from "src/pages/Dashboard/Layout/DashboardLayout.vue";
// GeneralViews
import NotFound from "src/pages/GeneralViews/NotFoundPage.vue";
// // Dashboard pages
// import Overview from "src/pages/Dashboard/Dashboard/Overview.vue";
// // import Stats from 'src/pages/Dashboard/Dashboard/Stats.vue'
//
// import Login from "src/pages/Dashboard/Pages/Login2.vue";
// // import Register from 'src/pages/Dashboard/Pages/Register.vue'
// import Register from "src/pages/Dashboard/Pages/Register2.vue";
// // import photoGallery from "../views/pages/photoGallery.vue";
// import RegisterGuest from "src/pages/Dashboard/Pages/RegisterGuest.vue";
// import ResetPassword from "src/pages/Dashboard/Pages/ResetPassword.vue";
// import Lock from "src/pages/Dashboard/Pages/Lock.vue";
// import logout from "src/views/pages/Logout";
//
import intro from "src/views/pages/intro";
// import examPage from "src/views/pages/exam-page";
// import studentList from "src/views/pages/students-list";
// import guest from "src/views/guest/index";
// import results from "src/views/pages/results";
// // import startExam from  "src/views/courses/start-exam";
// import startExam from 'src/views/courses/start-exam';
// import Report from 'src/views/guest/guest-report'
import VueRouter from "vue-router";
//
// let startexam = {
//
//   path: "/start-exam/:exam/:id?",
//   name: "startexam",
//   component: startExam
// };
//
// let guestReport = {
//
//   path: "/guest-report/:stu_id/:exam_type?",
//   name: "guestreport",
//   component: Report
// }
// // let startexam = {
//
// //   path: "/start-exam/:exam/:id?",
// //   name: "startexam",
// //   component: startExam
// // };
//
//
// let loginPage = {
//   path: "/login",
//   name: "Login",
//   component: Login
// };
//
//
// let exampage = {
//   path: "/exam-page",
//   name: "exam-page",
//   component: examPage
// };
//
// let registerGuest ={
//   path: "/guest-register",
//   name: "register-guest",
//   component: RegisterGuest
// }



let introPage = {
  name: 'Intro',
  path: '/intro',
  component: intro
};
// let photosGallery = {
//   name: 'Photo Gallery',
//   path: '/photo-gallery',
//   component: photoGallery
// };

// let resultPage = {
//   name: 'results',
//   path: '/results',
//   component: results
// };

// let guestPage = {
//   name: 'guest',
//   path: '/exam/guests',
//   component:guest,
// };
//
// let registerPage = {
//   path: "/register",
//   name: "Register",
//   component: Register
// };
//
// let resetPasswordPage = {
//   path: "/reset-password/:token",
//   name: "ResetPassword",
//   component: ResetPassword
// };
//
// let lockPage = {
//   path: "/lock",
//   name: "Lock",
//   component: Lock
// };

const router = new VueRouter({
  routes: configRoutes(), // short for routes: routes
  mode: "history",
  linkActiveClass: "active"
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    !isLogged()
      ? next({ path: "/intro", params: { nextUrl: to.fullPath } })
      : next();
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  // scroll to top when rout change
  window.scrollTo(0, 0);
});

function configRoutes() {
  return [
    // {
    //   path: "/",
    //   component: DashboardLayout,
    //   redirect: "/overview",
    //   meta: {
    //     requiresAuth: true
    //   },
    //   children: [
    //     {
    //       path: "/overview",
    //       name: "???????????? ????????????????",
    //       component: Overview
    //     },
    //   {
    //       name: '???????? ??????????',
    //       path: '/gallery',
    //       component: () => import("@/views/users/gallery"),
    //     },
    //     {
    //       path: "/logout",
    //       name: "?????????? ????????????",
    //       component: logout
    //     },
    //     // user viewing his profile
    //     {
    //       name: "???????????? ??????????????",
    //       path: "profile",
    //       component: () => import("@/views/users/show"),
    //       meta: {
    //         requiresAuth: true
    //       }
    //     },
    //
    //
    //     // user viewing another user profile as admin viewing ordinary user or parent view child profile
    //     {
    //       name: "???????????? ??????????????",
    //       path: "user-profile/:id",
    //       component: () => import("@/views/users/ViewUserProfile"),
    //       meta: true
    //     },
    //     {
    //       name: "????????????????????",
    //       path: "users",
    //       component: () => import("@/views/users/index")
    //     },
    //     {
    //       name: "?????????? ???????????????? ??????????????",
    //       path: "edit-user/:id?",
    //       component: () => import("@/views/users/edit")
    //     },
    //     {
    //       name: "?????????? ????????????",
    //       path: "report/:stu_id/:exam_type",
    //       component: () => import("@/views/users/report")
    //     },
    //     {
    //       name: "???????????????? ??????????",
    //       path: "teachers",
    //       component: () => import("@/views/teachers/show")
    //     },
    //     {
    //       name: "????????????????",
    //       path: "/active_teacher",
    //       component: () => import("@/views/teachers/active")
    //     },
    //     {
    //       name: "??????????????????",
    //       path: "auth/teachers",
    //       component: () => import("@/views/teachers/index")
    //     },
    //     {
    //       name: "?????????? ????????????",
    //       path: "student/requests",
    //       component: () => import("../views/teachers/request")
    //     },
    //     {
    //       name: "??????????",
    //       path: "auth/student",
    //       component: () => import("@/views/teachers/student")
    //     },
    //     {
    //       name: "????????????????",
    //       path: "auth/groups",
    //       component: () => import("@/views/teachers/groups")
    //     },
    //     {
    //       name: "???????? ????????????????",
    //       path: "groups/group/students/:id",
    //       component: () => import("@/views/teachers/groupStudents")
    //     },
    //     {
    //       name: "?????????? ????????????",
    //       path: "exams/:exam_type/:id",
    //       component: () => import("@/views/teachers/examCorrection")
    //     },
    //
    //     {
    //       name : "?????????? ???????????????? ??????????",
    //       path: "score",
    //       component: () => import("@/views/teachers/score")
    //     },
    //
    //
    //     {
    //       name: "???????????? ????????????????",
    //       path: "auth/courses",
    //       component: () => import("@/views/courses/index")
    //     },
    //     {
    //       name: "??????????????????",
    //       path: "groups",
    //       component: () => import("@/views/groups/index")
    //     },
    //     {
    //
    //       name: "??????????????",
    //       path: "courses",
    //       component: () => import("../views/courses/courses")
    //     },
    //     {
    //       name: "?????????? ??????????????????",
    //       path: "course/requests",
    //       component: () => import("../views/courses/request")
    //     },
    //     {
    //       name: "???????????? ????????????",
    //       path: "course/:id/:group_id?",
    //       component: () => import("../views/courses/show")
    //     },
    //
    //
    //     {
    //       name: "???????????? ????????????????",
    //       path: "roles",
    //       component: () => import("../views/permission/index")
    //     },
    //     {
    //       name: "???????????? ????????????????",
    //       path: "permissions/:id",
    //       component: () => import("../views/permission/show")
    //     },
    //     {
    //       name: "?????????????? ??????????????",
    //       path: "feedback",
    //       component: () => import("../views/feedback/index")
    //     },
    //     {
    //       name: "?????? ???? ??????????????",
    //       path: "photo-gallery",
    //       component: () => import("../views/photos-gallery/photoGallery.vue")
    //     },
    //     {
    //       name: "??????????????",
    //       path: "message",
    //       component: () => import("../views/pages/Message")
    //     },
    //     {
    //       name: "????????????????????",
    //       path: "exams",
    //       component: () => import("../views/users/exams")
    //     },
    //     {
    //       name:"???????????? ????????????",
    //       path: "exam/:exam/:id",
    //       component: () => import("../views/courses/exam")
    //     },
    //     {
    //       name:" ????????????",
    //       path: "score/review/:exam_type/:id",
    //       component: () => import("../views/courses/scoreReview")
    //     },
    //     //course-groups
    //     {
    //       name: "?????????????? ????????????",
    //       path: "course-groups/:id?",
    //       component: () => import("@/views/courses/course-groups")
    //     },
    //
    //   ]
    // },
    // loginPage,
    introPage,
    // // photosGallery,
    // registerPage,
    // resetPasswordPage,
    // resultPage,
    // exampage,
    // registerGuest,
    // startexam,
    // guestReport,
    // guestPage,

    // lockPage,
    { path: "*", component: intro }
  ];
}

export default router;
