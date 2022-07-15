import Api from "@/services/Api";
import CreateTaskRequest from "@/types/CreateTaskRequest";

export default {
    getOpenTasks() {
        return Api().get('/api/open-tasks')
    },
    createTask(data: CreateTaskRequest) {
        return Api().post('/api/create', data)
    }
}