import {Priority} from "@/types/Priority";

export interface TaskUpdateRequest {
    description: string | null
    isReminderSet: boolean | null
    startedOn: string | null
    finishedOn: string | null
    priority: Priority | null
    timeInterval: string | null
    timeTaken: number | null
    isTaskOpen: boolean | null
}