export interface TaskRequest {
    id: number
    description: string
    isReminderSet: boolean
    createdOn: string
    startedOn: string
    finishedOn: string
    priority: number
    timeInterval: string
    timeTaken: number
    isTaskOpen: boolean
}