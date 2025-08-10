import {createContext, useEffect, useMemo, useState} from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'green_cart:cart';

export function CartProvider({children}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) setItems(JSON.parse(raw));
        } catch {
            // ignore
        }
    }, []);

    useEffect(() => {
        console.log('cart updated', items);
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch {
            // ignore
        }
    }, [items]);

    const addItems = (item, qty = 1) => {
        if (!item?.id) {
            console.error('Item must have a valid id');
            return;
        }
        const found = items.find((product) => product.id === item.id);
        if (found) {
            setQty(found.id, found.qty + qty);
        } else {
            setItems((prev) => [...prev, { ...item, qty }]);
        }
    };

    const removeItems = (id) => setItems((prev) => prev.filter((p) => p.id !== id));

    const setQty = (id, qty) =>
        setItems((prev) =>
            prev.map((p) => (p.id === id ? {...p, qty: Math.max(1, qty)} : p))
        );

    const clear = () => setItems([]);

    const {totalPrice, totalQty} = useMemo(
        () => ({
            totalPrice: items.reduce((sum, i) => sum + i.price * i.qty, 0),
            totalQty: items.reduce((sum, i) => sum + i.qty, 0),
        }),
        [items]
    );

    const value = {items, add: addItems, remove: removeItems, setQty, clear, totalPrice, totalQty};

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;