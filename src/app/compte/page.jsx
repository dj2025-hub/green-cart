import React from "react";
import TopBar from "../../components/topbar.jsx";
import Button from "../../components/ui/button.jsx";
import Input from "../../components/ui/input.jsx";
import Label from "../../components/ui/label.jsx";

function AccountPage() {
    return (
        <div className="min-h-screen bg-emerald-50/30">
            <TopBar/>
            <main className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-10">
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <h1 className="text-xl font-semibold">Se connecter</h1>
                    <form className="mt-6 grid gap-4" aria-label="Formulaire de connexion">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="vous@example.com"/>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Mot de passe</Label>
                            <Input id="password" type="password"/>
                        </div>
                        <Button className="bg-green-600 hover:bg-green-700">Se connecter</Button>
                    </form>
                    <p className="mt-4 text-sm text-zinc-700">
                        Pas de compte ?{" "}
                        <a href="#" className="text-green-700 underline">
                            Créer un compte
                        </a>
                    </p>
                </div>
            </main>
        </div>
    );
}

export default AccountPage;