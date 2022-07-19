import Api from "@/services/Api";
import CreateTaskRequest from "@/types/CreateTaskRequest";
import {TaskRequest} from "@/types/TaskRequest";

export default {
    getTask(id: number) {
        return Api().get(`/api/task/${id}`)
    },
    getOpenTasks() {
        return Api().get('/api/open-tasks')
    },
    getClosedTasks() {
        return Api().get('/api/closed-tasks')
    },
    getAllTasks() {
        return Api().get('/api/all-tasks')
    },
    createTask(data: CreateTaskRequest) {
        return Api().post('/api/create', data)
    },
    deleteTask(id: number) {
        return Api().delete(`/api/delete/${id}`)
    },
    updateTaskWithObject(data: TaskRequest) {
        return Api().put('/api/update', data)
    },
    updateTaskWithUri(id: number, data: TaskRequest) {
        return Api().put(`/api/update/${id}`, data)
    },
}