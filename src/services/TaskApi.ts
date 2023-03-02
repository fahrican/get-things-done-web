import Api from "@/services/Api";
import {TaskCreateRequest} from "@/types/TaskCreateRequest";
import {TaskUpdateRequest} from "@/types/TaskUpdateRequest";

export default {
    getTask(id: number) {
        return Api().get(`/tasks/${id}`)
    },
    getTasks(status: string) {
        return Api().get(`/tasks?status=${status}`)
    },
    createTask(data: TaskCreateRequest) {
        return Api().post('/tasks', data)
    },
    deleteTask(id: number) {
        return Api().delete(`/tasks/${id}`)
    },
    updateTask(id: number, data: TaskUpdateRequest) {
        return Api().patch(`/tasks/${id}`, data)
    },
}