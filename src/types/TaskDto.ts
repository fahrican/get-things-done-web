import {Priority} from "@/types/Priority";

export interface TaskDto {
    id: number
    description: string
    isReminderSet: boolean
    createdOn: string
    startedOn: string
    finishedOn: string
    priority: Priority
    timeInterval: string
    timeTaken: number
    isTaskOpen: boolean
}