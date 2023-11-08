import { create } from "zustand";

const store = (set: any) => ({
    isDarkMode: false, 
    setDarkMode: (value: boolean) => {
        set((store: any) => {
            if (value) {
                document.querySelector("body")?.setAttribute("data-theme", "dark")
            } else {
                document.querySelector("body")?.setAttribute("data-theme", "light")
            }
            return {
                isDarkMode: value
            }
        }) 
    }, 
    toggleDarkMode: () => {
        set((store: any) => ({
            isDarkMode: !store.isDarkMode
        })) 
    }
}) 

export const useDarkModeStore = create(store)
