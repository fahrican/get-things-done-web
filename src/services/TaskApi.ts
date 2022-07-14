import Api from "@/services/Api";
import Task from "@/types/Task";

export default {
    getTasks() {
        return Api().get('/api/open-tasks')
    },
    createTask(data: Task) {
        return Api().post('/api/create', data)
    }
}