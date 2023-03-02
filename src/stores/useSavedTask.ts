import {defineStore} from "pinia";
import {PropType} from "vue";
import {TaskDto} from "@/types/TaskDto";

export const useSavedTask = defineStore("selectedTask", {
    state: () => ({
        saveTask: Object as PropType<TaskDto>
    }),
    getters: {
        getSavedTask: (state) => {
            state.saveTask
        }
    },
    actions: {
        storeTask(selectedTask: TaskDto) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.saveTask = selectedTask;
        }
    }
});