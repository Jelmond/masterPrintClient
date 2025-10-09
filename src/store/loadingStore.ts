import { create } from "zustand"

export const useLoadingStore = create<LoadingStore>((set) => ({
    isLoading: true,
    setIsLoading: (isLoading) => set({ isLoading }),
}))

interface LoadingStore {
    isLoading: boolean
    setIsLoading: (isLoading: boolean) => void
}