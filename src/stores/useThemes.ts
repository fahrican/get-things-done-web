import {defineStore} from "pinia";
import {computed} from "vue";


export const useThemes = defineStore({
    id: 'themeSelect',
    state: () => (
        {
            ActiveTheme: "emerald",
            availableThemes: ['emerald', 'dark', 'forest', 'synthwave']
        }
    ),
    getters: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        getTheme() {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return computed(() => this.ActiveTheme)
        }
    },
    actions: {
        setTheme(val: string) {
            this.ActiveTheme = val;
        }
    }

})