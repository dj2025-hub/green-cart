import React, {useContext, useMemo} from "react";
import {Link, useParams} from "react-router-dom";
import TopBar from "../../../components/topbar.jsx";
import Button from "../../../components/ui/button.jsx";
import {Star} from "lucide-react";
import CartContext from "../../../context/cart.jsx";
import products from "../../../data/products.js";

function Detail() {
    const {id} = useParams();
    const product = useMemo(() => products.find((p) => p.id === id), [id]);
    const cart = useContext(CartContext);

    if (!product) {
        return (
            <div className="mx-auto max-w-3xl p-6">
                <p>Produit introuvable.</p>
                <Link to="/catalog" className="text-green-700 underline">
                    Retour au catalogue
                </Link>
            </div>
        );
    }

    const dlcDays = Math.ceil((new Date(product.dlc).getTime() - Date.now()) / (24 * 3600 * 1000));

    return (
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 grid gap-8 lg:grid-cols-2">
            <img
                src={product.image || "/placeholder.svg?height=480&width=640&query=product%20close%20up"}
                alt={`Image de ${product.name}`}
                className="w-full rounded-xl border object-cover"
                loading="lazy"
            />
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold text-zinc-900">{product.name}</h1>
                <div className="flex items-center gap-2 text-sm text-zinc-700">
                    <span>Producteur: {product.producer}</span>
                    <span className="text-zinc-400">•</span>
                    <span>Région: {product.region}</span>
                </div>
                <div className="flex items-center gap-1 text-amber-500" aria-label={`Note ${product.rating ?? 0}/5`}>
                    {Array.from({length: 5}).map((_, i) => (
                        <Star
                            key={i}
                            className={`h-5 w-5 ${i < Math.round(product.rating ?? 0) ? "fill-amber-400" : "fill-zinc-200 text-zinc-300"}`}
                        />
                    ))}
                </div>
                <p className="text-zinc-700">{product.description}</p>
                <div className="flex items-center justify-between">
                    <p className="text-lg">
                        <span className="font-semibold">{product.pricePerKg.toFixed(2)} €</span>
                        <span className="text-zinc-600"> {" / kg"}</span>
                    </p>
                    <p className="text-sm text-zinc-600">DLC: {dlcDays} jours</p>
                </div>
                <Button
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() =>
                        cart.add(
                            {
                                id: product.id,
                                name: product.name,
                                price: product.pricePerKg,
                                image: product.image,
                                dlc: product.dlc,
                            },
                            1
                        )
                    }
                >
                    Ajouter au panier
                </Button>
                <div className="mt-6">
                    <h2 className="font-medium">Avis et commentaires</h2>
                    <p className="text-sm text-zinc-600">
                        Les avis clients apparaîtront ici. Fonctionnalité à venir (notation, modération).
                    </p>
                </div>
            </div>
        </div>
    );
}

function ProductPage() {
    return (
        <div className="min-h-screen bg-emerald-50/40">
            <TopBar/>
            <main>
                <Detail/>
            </main>
        </div>
    );
}

export default ProductPage;