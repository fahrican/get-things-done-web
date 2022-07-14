import Api from "@/services/Api";

export default {
    getTasks() {
        return Api().get('/api/open-tasks')
    },
    createTask(data: { is_reminder_set: boolean; created_on: string; description: string; priority: number; time_interval: string; time_taken: number; is_task_open: boolean }) {
        return Api().post('/api/create', data)
    }
}