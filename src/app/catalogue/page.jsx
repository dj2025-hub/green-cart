import React, {useContext, useMemo, useState} from "react";
import {Link} from "react-router-dom";
import TopBar from "../../components/topbar.jsx";
import CartContext from "../../context/cart.jsx";
import products from "../../data/products";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "../../components/ui/accordion.jsx";
import Checkbox from "../../components/ui/checkbox.jsx";
import Label from "../../components/ui/label.jsx";
import Slider from "../../components/ui/slider.jsx";
import Button from "../../components/ui/button.jsx";
import Badge from "../../components/ui/badge.jsx";
import {Star} from "lucide-react";

const categories = [
    "Fruits",
    "Légumes",
    "Produits laitiers",
    "Viande",
    "Boulangerie",
];
const regions = [
    "Auvergne-Rhône-Alpes",
    "Île-de-France",
    "Bretagne",
    "Occitanie",
    "Provence-Alpes-Côte d'Azur",
    "Nouvelle-Aquitaine",
];

function ProductCard({product}) {
    const {add} = useContext(CartContext);

    const dlcDays = Math.ceil(
        (new Date(product.dlc).getTime() - Date.now()) / (24 * 3600 * 1000)
    );

    const addToCart = (product, qty) => {
        add({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            dlc: product.dlc,
            qty,
        })
    };

return (
    <div className="group rounded-xl border bg-white overflow-hidden flex flex-col h-full max-h-96">
        <Link
            to={`/product/${product.id}`}
            className="relative"
            aria-label={`Voir ${product.name}`}
        >
            <img
                src={product.image}
                alt={`Photo de ${product.name}`}
                className="h-48 w-full object-cover"
                loading="lazy"
            />
        </Link>
        <div className="p-3 flex-1 flex flex-col gap-2 ">
            <div className="flex items-center justify-between gap-2">
                <h3
                    className="font-semibold text-zinc-900 w-1/2"
                    style={{fontFamily: "Rounded, sans-serif"}}
                >
                    {product.name}
                </h3>
                <Badge variant="secondary">{product.region}</Badge>
            </div>
            <p className="text-xs text-zinc-600">
                {product.producer} • Catégorie: {product.category}
            </p>
            <div
                className="mt-auto flex items-center gap-1 text-amber-500"
                aria-label={`Note ${product.rating || 0}/5`}
            >
                {Array.from({length: 5}).map((_, i) => (
                    <Star
                        key={i}
                        className={`h-4 w-4 ${
                            i < Math.round(product.rating || 0)
                                ? "fill-amber-400"
                                : "fill-zinc-200 text-zinc-300"
                        }`}
                        aria-hidden="true"
                    />
                ))}
            </div>
            <div className="flex items-center justify-between">
                <p className="text-sm">
                    <span className="font-semibold">{product.pricePerKg.toFixed(2)} €</span>
                    <span className="text-zinc-600"> / kg</span>
                </p>
                <p
                    className="text-xs text-zinc-600"
                    aria-label={`DLC dans ${dlcDays} jours`}
                >
                    DLC: {dlcDays} j
                </p>
            </div>
            <div className="">
                <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() =>
                        addToCart(
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
            </div>
        </div>
    </div>
);
}

function CataloguePage() {
    const [selected, setSelected] = useState({
        categories: [],
        regions: [],
        dlc: [],
    });
    const [priceRange, setPriceRange] = useState([0, 12]);

    const filtered = useMemo(() => {
        return products
            .filter((p) =>
                selected.categories.length ? selected.categories.includes(p.category) : true
            )
            .filter((p) =>
                selected.regions.length ? selected.regions.includes(p.region) : true
            )
            .filter((p) => {
                const price = p.pricePerKg;
                return price >= priceRange[0] && price <= priceRange[1];
            })
            .filter((p) => {
                if (selected.dlc.length === 0) return true;
                const days = Math.ceil(
                    (new Date(p.dlc).getTime() - Date.now()) / (24 * 3600 * 1000)
                );
                const matchers = {
                    "3-": days < 3,
                    "3-7": days >= 3 && days <= 7,
                    "7+": days > 7,
                };
                return selected.dlc.some((k) => matchers[k]);
            });
    }, [selected, priceRange]);

    const toggle = (key, value) => {
        setSelected((prev) => {
            const current = new Set(prev[key]);
            current.has(value) ? current.delete(value) : current.add(value);
            return {...prev, [key]: Array.from(current)};
        });
    };

    return (
        <div className="min-h-screen bg-emerald-50/40">
            <TopBar/>
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid gap-8 md:grid-cols-[280px_1fr]">
                <aside className="rounded-xl border bg-white p-4 h-fit" aria-label="Filtres catalogue">
                    <h2
                        className="font-semibold mb-2"
                        style={{fontFamily: "Rounded, sans-serif"}}
                    >
                        Filtres
                    </h2>
                    <Accordion type="multiple" defaultValue={["cat", "reg", "dlc", "price"]} className="w-full">
                        <AccordionItem value="cat">
                            <AccordionTrigger className="text-sm">Catégorie</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid gap-2">
                                    {categories.map((c) => (
                                        <Label key={c} className="flex items-center gap-2 font-normal">
                                            <Checkbox
                                                checked={selected.categories.includes(c)}
                                                onCheckedChange={() => toggle("categories", c)}
                                                aria-label={`Catégorie ${c}`}
                                            />
                                            {c}
                                        </Label>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="reg">
                            <AccordionTrigger className="text-sm">Régions</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid gap-2">
                                    {regions.map((r) => (
                                        <Label key={r} className="flex items-center gap-2 font-normal">
                                            <Checkbox
                                                checked={selected.regions.includes(r)}
                                                onCheckedChange={() => toggle("regions", r)}
                                                aria-label={`Région ${r}`}
                                            />
                                            {r}
                                        </Label>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="dlc">
                            <AccordionTrigger className="text-sm">
                                Date limite de consommation
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="grid gap-2">
                                    {[
                                        {key: "3-", label: "Moins de 3 jours"},
                                        {key: "3-7", label: "Entre 3 et 7 jours"},
                                        {key: "7+", label: "Plus de 7 jours"},
                                    ].map((o) => (
                                        <Label key={o.key} className="flex items-center gap-2 font-normal">
                                            <Checkbox
                                                checked={selected.dlc.includes(o.key)}
                                                onCheckedChange={() => toggle("dlc", o.key)}
                                                aria-label={o.label}
                                            />
                                            {o.label}
                                        </Label>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="price">
                            <AccordionTrigger className="text-sm">Prix au kg</AccordionTrigger>
                            <AccordionContent>
                                <div className="px-1 py-2">
                                    <Slider
                                        min={0}
                                        max={12}
                                        step={0.5}
                                        value={priceRange}
                                        onValueChange={(v) => setPriceRange(v)}
                                        aria-label="Filtre de prix"
                                    />
                                    <div className="mt-2 text-xs text-zinc-700">
                                        {priceRange[0].toFixed(1)} € — {priceRange[1].toFixed(1)} €
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </aside>
                <section aria-label="Catalogue de produits" className="grid gap-4">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-zinc-700">
                            {filtered.length} produit{filtered.length > 1 ? "s" : ""} trouvé
                            {filtered.length > 1 ? "s" : ""}
                        </p>
                        <div className="flex gap-2">
                            {selected.categories.map((c) => (
                                <Badge
                                    key={c}
                                    variant="secondary"
                                    className="bg-emerald-50 text-emerald-800 border-emerald-200"
                                >
                                    {c}
                                </Badge>
                            ))}
                            {selected.regions.map((r) => (
                                <Badge
                                    key={r}
                                    variant="secondary"
                                    className="bg-emerald-50 text-emerald-800 border-emerald-200"
                                >
                                    {r}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((p) => (
                            <li key={p.id} className="h-96">
                                <ProductCard product={p}/>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default CataloguePage;