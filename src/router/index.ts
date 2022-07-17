import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import OpenTasksView from "@/views/OpenTasksView.vue";
import AllTasksView from "@/views/AllTasksView.vue";
import ClosedTasksView from "@/views/ClosedTasksView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import CreateTaskView from "@/views/CreateTaskView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/open-tasks',
        name: 'open-tasks',
        component: OpenTasksView
    },
    {
        path: '/closed-tasks',
        name: 'closed-tasks',
        component: ClosedTasksView
    },
    {
        path: '/all-tasks',
        name: 'all-tasks',
        component: AllTasksView
    },
    {
        path: '/create-task',
        name: 'create-task',
        component: CreateTaskView
    },
    {
        path: '/',
        redirect: '/open-tasks'
    },
    {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: NotFoundView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
