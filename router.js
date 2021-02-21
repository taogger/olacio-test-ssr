import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import course from './pages/course/index.vue'
import home from './pages/home.vue'
import courseList from './components/courseList.vue'
import abroad from './pages/abroad/index.vue'
import teacher from './pages/teacher/index.vue'

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'courseList',
            component: courseList,
        },
        {
            path: '/home',
            name: 'home',
            component: home,
        },
        {
            path: '/course',
            name: '课程',
            component: course
        },
        {
            path: '/abroad',
            name: '留学',
            component: abroad
        },
        {
            path: '/teacher',
            name: '留学',
            component: teacher
        },
    ],
})