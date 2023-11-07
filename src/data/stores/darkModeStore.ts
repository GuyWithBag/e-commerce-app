import { create } from "zustand";
import { ProductModel } from "../productModel";

const store = (set: any) => ({
    isDarkMode: false, 
    setDarkMode: (value: boolean) => {
        set((store: any) => ({
            isDarkMode: value
        })) 
    }, 
    toggleDarkMode: () => {
        set((store: any) => ({
            isDarkMode: !store.isDarkMode
        })) 
    }
}) 

export const useDarkModeStore = create(store)
