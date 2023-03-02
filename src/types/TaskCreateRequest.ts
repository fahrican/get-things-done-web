import {Priority} from "@/types/Priority";

export interface TaskCreateRequest {
    description: string
    isReminderSet: boolean
    startedOn: string | null
    finishedOn: string | null
    priority: Priority
    timeInterval: string
    timeTaken: number | null
    isTaskOpen: boolean
}
// TaskRequest