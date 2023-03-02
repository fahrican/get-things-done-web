import Api from "@/services/Api";
import {TaskRequest} from "@/types/TaskRequest";

export default {
    getTask(id: number) {
        return Api().get(`/tasks/${id}`)
    },
    getTasks() {
        return Api().get('/tasks')
    },
    createTask(data: TaskRequest) {
        return Api().post('/tasks', data)
    },
    deleteTask(id: number) {
        return Api().delete(`/tasks/${id}`)
    },
    updateTask(id: number, data: TaskRequest) {
        return Api().patch(`/tasks/${id}`, data)
    },
}