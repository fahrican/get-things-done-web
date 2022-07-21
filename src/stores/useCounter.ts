import {defineStore} from "pinia";

export const useCounterStore = defineStore("main", {
    state: () => ({
        counter: 0,
        name: "Erik"
    }),
    getters: {
        doubleCount: (state) => {
            state.counter * 2
        }
    },
    actions: {
        reset: () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.counter = 0;
        },
        addOne: () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.counter++;
        }
    }
});