import { create } from 'zustand';
import {ProductEntity} from "../../types/productType";



type CartItem = ProductEntity & { qty: number };

type CartState = {
    items: CartItem[];
    addItem: (product: ProductEntity) => void;
    removeItem: (id: number) => void;
    clearCart: () => void;
};

const useCartStore = create<CartState>((set, get) => ({
    items: [],
    addItem: (product) => {
        const existing = get().items.find(p => p.id === product.id);
        if (existing) {
            set({
                items: get().items.map(p =>
                    p.id === product.id ? { ...p, qty: p.qty + 1 } : p
                ),
            });
        } else {
            set({ items: [...get().items, { ...product, qty: 1 }] });
        }
    },
    removeItem: (id) =>
        set({ items: get().items.filter(p => p.id !== id) }),
    clearCart: () => set({ items: [] }),
}));

export default useCartStore;