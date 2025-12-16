import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useToastStore } from './toastStore'

interface CartItem {
    productId: number
    documentId?: string
    quantity: number
    title: string
    price: number
    oldPrice?: number | null
    image: string
    stock?: number
}

interface CartStore {
    items: CartItem[]
    addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void
    removeFromCart: (productId: number) => void
    updateQuantity: (productId: number, quantity: number) => void
    clearCart: () => void
    getTotalItems: () => number
    getTotalPrice: () => number
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            
            addToCart: (item, quantity = 1) => {
                // Prevent adding products with 0 stock
                if (item.stock !== undefined && item.stock <= 0) {
                    return;
                }
                
                set((state) => {
                    const existingItem = state.items.find(i => i.productId === item.productId)
                    
                    if (existingItem) {
                        // Check if adding quantity would exceed stock
                        const newQuantity = existingItem.quantity + quantity;
                        if (item.stock !== undefined && newQuantity > item.stock) {
                            return state; // Don't update if it would exceed stock
                        }
                        
                        // Show toast notification
                        useToastStore.getState().showToast('Товар был добавлен в корзину', 'success')
                        
                        return {
                            items: state.items.map(i =>
                                i.productId === item.productId
                                    ? { ...i, quantity: newQuantity }
                                    : i
                            )
                        }
                    }
                    
                    // Show toast notification
                    useToastStore.getState().showToast('Товар был добавлен в корзину', 'success')
                    
                    return {
                        items: [...state.items, { ...item, quantity }]
                    }
                })
            },
            
            removeFromCart: (productId) => {
                set((state) => ({
                    items: state.items.filter(item => item.productId !== productId)
                }))
            },
            
            updateQuantity: (productId, quantity) => {
                set((state) => ({
                    items: state.items.map(item =>
                        item.productId === productId
                            ? { ...item, quantity }
                            : item
                    )
                }))
            },
            
            clearCart: () => {
                set({ items: [] })
            },
            
            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0)
            },
            
            getTotalPrice: () => {
                return get().items.reduce((total, item) => total + (item.price * item.quantity), 0)
            }
        }),
        {
            name: 'cart-storage',
        }
    )
) 