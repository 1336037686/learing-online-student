import Vue from 'vue'
import Router from 'vue-router'
import LayOutContent from '@/views/Layout/content.vue'
import Layout from '@/views/Layout/index.vue'
import CourseDetail from '@/views/CourseDetail/index.vue'
import Course from '@/views/AllCourse/index.vue'
import SelectCourse from '@/views/SelectCourse/index.vue'
import JumpPage from '@/views/JumpPage/index.vue'
import Resource from '@/views/AllResource/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/default',
      children: [
        {
          path: 'default',
          name: 'default',
          component: LayOutContent,
        },
        {
          path: 'courseDetail/:id',
          name: 'courseDetail',
          component: CourseDetail,
        },
        {
          path: 'selectCourse/:data',
          name: 'selectCourse',
          component: SelectCourse,
        },
        {
          path: 'jumpPage/:data',
          name: 'jumpPage',
          component: JumpPage,
        },
        {
          path: 'course/:type',
          name: 'course',
          component: Course,
        },
        {
          path: 'resource/:type',
          name: 'resource',
          component: Resource,
        }
      ]
    }
  ]
})
