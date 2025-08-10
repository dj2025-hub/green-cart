import React, {useContext, useState} from "react";
import CartContext from "../context/cart.jsx";
import Button from "./ui/button.jsx";
import Input from "./ui/input.jsx";
import {Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "./ui/sheet.jsx";
import {Minus, Plus, Trash2} from "lucide-react";

function CartDrawer({children}) {
    const [open, setOpen] = useState(false);
    const {items, totalPrice, totalQty, setQty, remove, clear} = useContext(CartContext);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="w-full sm:max-w-md">
                <SheetHeader>
                    <SheetTitle>Mon panier</SheetTitle>
                </SheetHeader>
                <div className="mt-4 grid gap-4">
                    {items.length === 0 ? (
                        <p className="text-sm text-zinc-600">Votre panier est vide.</p>
                    ) : (
                        <ul className="grid gap-4">
                            {items.map((item) => (
                                <li key={item.id} className="flex items-center gap-3">
                                    <img
                                        src={item.image || "/placeholder.svg?height=64&width=64&query=product%20photo"}
                                        alt={`Image de ${item.name}`}
                                        className="h-16 w-16 rounded object-cover border"
                                        loading="lazy"
                                    />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium" style={{fontFamily: "Rounded, sans-serif"}}>
                                            {item.name}
                                        </p>
                                        <p className="text-xs text-zinc-600">{item.price?.toFixed(2)} €</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            aria-label="Diminuer la quantité"
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent click from bubbling
                                                setQty(item.id, item.qty - 1);
                                            }}
                                        >
                                            <Minus className="h-4 w-4" aria-hidden="true"/>
                                        </Button>
                                        <Input
                                            aria-label="Quantité"
                                            className="w-12 text-center"
                                            type="number"
                                            min={1}
                                            value={item.qty}
                                            onChange={(e) => {
                                                e.stopPropagation(); // Prevent change event from bubbling
                                                setQty(item.id, parseInt(e.target.value || "1", 10));
                                            }}
                                        />
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            aria-label="Augmenter la quantité"
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent click from bubbling
                                                setQty(item.id, item.qty + 1);
                                            }}
                                        >
                                            <Plus className="h-4 w-4" aria-hidden="true"/>
                                        </Button>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            aria-label="Supprimer l'article"
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent click from bubbling
                                                remove(item.id);
                                            }}
                                        >
                                            <Trash2 className="h-4 w-4" aria-hidden="true"/>
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <SheetFooter className="mt-6">
                    <div className="w-full grid gap-3">
                        <div className="flex items-center justify-between text-sm">
                            <span>Total articles</span>
                            <span className="font-medium">{totalQty}</span>
                        </div>
                        <div className="flex items-center justify-between text-base">
                            <span>Total TTC</span>
                            <span className="font-semibold">{totalPrice.toFixed(2)} €</span>
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                className="flex-1"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent click from bubbling
                                    clear();
                                }}
                            >
                                Vider
                            </Button>
                            <Button
                                className="flex-1 bg-green-600 hover:bg-green-700"
                                onClick={(e) => e.stopPropagation()} // Prevent click from bubbling
                            >
                                Passer au paiement
                            </Button>
                        </div>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default CartDrawer;