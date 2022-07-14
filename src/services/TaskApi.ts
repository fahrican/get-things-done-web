import Api from "@/services/Api";

export default {
    getTasks() {
        return Api().get('/api/open-tasks')
    }
}