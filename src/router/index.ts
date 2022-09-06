import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import OpenTasksView from "@/views/OpenTasksView.vue";
import AllTasksView from "@/views/AllTasksView.vue";
import ClosedTasksView from "@/views/ClosedTasksView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import CreateTaskView from "@/views/CreateTaskView.vue";
import SingleTaskView from "@/views/SingleTaskView.vue";
import EditTaskView from "@/views/EditTaskView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/app/open-tasks',
        name: 'open-tasks',
        component: OpenTasksView
    },
    {
        path: '/app/closed-tasks',
        name: 'closed-tasks',
        component: ClosedTasksView
    },
    {
        path: '/app/all-tasks',
        name: 'all-tasks',
        component: AllTasksView
    },
    {
        path: '/app/create-task',
        name: 'create-task',
        component: CreateTaskView
    },
    {
        path: '/app/single-task',
        name: 'single-task',
        component: SingleTaskView
    },
    {
        path: '/app/edit-task',
        name: 'edit-task',
        component: EditTaskView
    },
    {
        path: '/',
        redirect: '/app/open-tasks'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
