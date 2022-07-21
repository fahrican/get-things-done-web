import {defineStore} from "pinia";
import {PropType} from "vue";
import {TaskRequest} from "@/types/TaskRequest";

export const useSavedTask = defineStore("selectedTask", {
    state: () => ({
        saveTask: Object as PropType<TaskRequest>
    }),
    getters: {
        getSavedTask: (state) => {
            state.saveTask
        }
    },
    actions: {
        storeTask(selectedTask: TaskRequest) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.saveTask = selectedTask;
        }
    }
});