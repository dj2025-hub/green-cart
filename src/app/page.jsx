import {Link} from 'react-router-dom';
import TopBar from '../components/topbar.jsx';
import Button from '../components/ui/button.jsx';
import {Leaf, Sprout} from 'lucide-react';
import placeholder from '../assets/placeholder.svg';

function HomePage() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 via-emerald-50 to-white">
            <TopBar/>
            <main className="flex-1">
                <section className="relative">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                            <div className="space-y-6">
                                <div
                                    className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-medium">
                                    <Sprout className="h-4 w-4" aria-hidden="true"/>
                                    <span>Favoriser le circuit court & lutter contre le gaspillage</span>
                                </div>
                                <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
                                    GreenCart — le marché local, responsable et accessible
                                </h1>
                                <p className="text-lg text-zinc-700">
                                    Découvrez des produits locaux près de chez vous, soutenez les producteurs et
                                    réduisez le gaspillage alimentaire.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <Button asChild className="bg-green-600 hover:bg-green-700">
                                        <Link to="/catalog" aria-label="Voir les produits">
                                            Voir les produits
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline">
                                        <Link to="/producteur/dashboard" aria-label="Espace producteur">
                                            Espace producteur
                                        </Link>
                                    </Button>
                                </div>
                                <p className="text-sm text-zinc-600">
                                    Plateforme écoresponsable, design sobre, images optimisées et chargement
                                    paresseux.
                                </p>
                            </div>
                            <div className="relative">
                                <img
                                    src={placeholder}
                                    alt="Marché local avec fruits et légumes de saison"
                                    className="w-full rounded-xl border object-cover shadow-sm"
                                    loading="lazy"
                                />
                                <div
                                    className="absolute -bottom-4 -left-4 bg-white rounded-lg border shadow p-3 flex items-center gap-2">
                                    <Leaf className="h-5 w-5 text-green-600" aria-hidden="true"/>
                                    <span className="text-sm">Sobriété numérique</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 grid gap-6 sm:grid-cols-2">
                            <div className="rounded-xl border bg-white p-6">
                                <h3 className="font-semibold text-zinc-900">Pour les consommateurs</h3>
                                <p className="text-sm text-zinc-700 mt-2">
                                    Compte personnel, catalogue filtré, commande en ligne, panier, historique, avis,
                                    tableau de bord empreinte carbone et économies.
                                </p>
                            </div>
                            <div className="rounded-xl border bg-white p-6">
                                <h3 className="font-semibold text-zinc-900">Pour les producteurs</h3>
                                <p className="text-sm text-zinc-700 mt-2">
                                    Compte producteur, publication des produits, gestion des commandes, dashboard
                                    avec
                                    prévisions de ventes et clustering client.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="border-t py-8 text-center text-sm text-zinc-600">
                © {new Date().getFullYear()} GreenCart — Tous droits réservés
            </footer>
        </div>
    );
}

export default HomePage;