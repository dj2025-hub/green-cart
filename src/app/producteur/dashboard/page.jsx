import React, {useMemo, useState} from "react";
import Button from "../../../components/ui/button.jsx";
import {Card, CardContent, CardHeader, CardTitle} from "../../../components/ui/card.jsx";
import Input from "../../../components/ui/input.jsx"
import Label from "../../../components/ui/label.jsx";
import Textarea from "../../../components/ui/textarea.jsx";
import TopBar from "../../../components/topbar.jsx";
import products from "../../../data/products";
import {ChartContainer, ChartTooltip, ChartTooltipContent,} from "../../../components/ui/chart.jsx"
import {Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from "recharts"

function ProducerDashboardPage() {
    const [form, setForm] = useState({
        name: "",
        price: "",
        category: "",
        region: "",
        dlc: "",
        description: "",
    });

    const seasonal = useMemo(
        () => [
            {mois: "Jan", ventes: 80},
            {mois: "Fév", ventes: 90},
            {mois: "Mar", ventes: 120},
            {mois: "Avr", ventes: 160},
            {mois: "Mai", ventes: 210},
            {mois: "Juin", ventes: 260},
            {mois: "Juil", ventes: 300},
            {mois: "Aoû", ventes: 280},
            {mois: "Sep", ventes: 220},
            {mois: "Oct", ventes: 180},
            {mois: "Nov", ventes: 130},
            {mois: "Déc", ventes: 100},
        ],
        []
    );

    const clusters = useMemo(
        () => [
            {segment: "Familles", clients: 120},
            {segment: "Étudiants", clients: 75},
            {segment: "Urbains engagés", clients: 95},
        ],
        []
    );

    const myProducts = products.slice(0, 3);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 via-emerald-50 to-white">
            <TopBar/>
            <div className="grid gap-6">
                <div className="grid gap-6 md:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Prévision saisonnière (mock)</CardTitle>
                        </CardHeader>
                        <CardContent className="h-56">
                            <ChartContainer
                                className="h-full w-full"
                                config={{
                                    ventes: {
                                        label: "Ventes",
                                        color: "hsl(var(--chart-1))",
                                    },
                                }}
                            >
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={seasonal}>
                                        <XAxis dataKey="mois"/>
                                        <YAxis/>
                                        <ChartTooltip content={<ChartTooltipContent/>}/>
                                        <Line type="monotone" dataKey="ventes" stroke="#16a34a" strokeWidth={2}/>
                                    </LineChart>
                                </ResponsiveContainer>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Clustering clients (mock)</CardTitle>
                        </CardHeader>
                        <CardContent className="h-56">
                            <ChartContainer
                                className="h-full w-full"
                                config={{
                                    clients: {
                                        label: "Clients",
                                        color: "hsl(var(--chart-2))",
                                    },
                                }}
                            >
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={clusters}>
                                        <XAxis dataKey="segment"/>
                                        <YAxis/>
                                        <ChartTooltip content={<ChartTooltipContent/>}/>
                                        <Bar dataKey="clients" fill="#65a30d" radius={6}/>
                                    </BarChart>
                                </ResponsiveContainer>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Conseils personnalisés</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-zinc-700">
                            • Augmentez la disponibilité en Juin–Août (demande élevée).
                            <br/>
                            • Pack anti-gaspillage pour DLC {"<"} 3 jours.
                            <br/>
                            • Proposez 10% de remise aux étudiants le mardi.
                        </CardContent>
                    </Card>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Publier un produit</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form
                                className="grid gap-4"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert("Produit publié (simulation).");
                                }}
                            >
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Nom</Label>
                                    <Input
                                        id="name"
                                        value={form.name}
                                        onChange={(e) => setForm((form) => ({...form, name: e.target.value}))}
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="price">Prix €/kg</Label>
                                        <Input
                                            id="price"
                                            type="number"
                                            min="0"
                                            step="0.1"
                                            value={form.price}
                                            onChange={(e) => setForm((f) => ({...f, price: e.target.value}))}
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="dlc">DLC</Label>
                                        <Input
                                            id="dlc"
                                            type="date"
                                            value={form.dlc}
                                            onChange={(e) => setForm((f) => ({...f, dlc: e.target.value}))}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="category">Catégorie</Label>
                                        <Input
                                            id="category"
                                            placeholder="Ex: Légumes"
                                            value={form.category}
                                            onChange={(e) => setForm((f) => ({...f, category: e.target.value}))}
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="region">Région</Label>
                                        <Input
                                            id="region"
                                            placeholder="Ex: Île-de-France"
                                            value={form.region}
                                            onChange={(e) => setForm((f) => ({...f, region: e.target.value}))}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        value={form.description}
                                        onChange={(e) => setForm((f) => ({...f, description: e.target.value}))}
                                        rows={4}
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <Button type="submit" className="bg-green-600 hover:bg-green-700">
                                        Publier
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() =>
                                            setForm({
                                                name: "",
                                                price: "",
                                                category: "",
                                                region: "",
                                                dlc: "",
                                                description: "",
                                            })
                                        }
                                    >
                                        Effacer
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Mes produits (exemple)</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            {myProducts.map((p) => (
                                <div key={p.id} className="flex items-center gap-3">
                                    <img
                                        src={p.image || "/placeholder.svg?height=56&width=56&query=product"}
                                        alt={`Image de ${p.name}`}
                                        className="h-14 w-14 rounded object-cover border"
                                        loading="lazy"
                                    />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">{p.name}</p>
                                        <p className="text-xs text-zinc-600">{p.pricePerKg.toFixed(2)} € / kg</p>
                                    </div>
                                    <Button size="sm" variant="outline">
                                        Modifier
                                    </Button>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default ProducerDashboardPage;