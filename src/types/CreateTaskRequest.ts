interface CreateTaskRequest {
    description: string
    is_reminder_set: boolean
    created_on: string
    priority: number
    time_interval: string
    time_taken: number
    is_task_open: boolean
}

export default CreateTaskRequest