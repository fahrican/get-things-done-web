import Api from "@/services/Api";
import CreateTaskRequest from "@/types/CreateTaskRequest";

export default {
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
    }
}