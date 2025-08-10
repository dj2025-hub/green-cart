import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Leaf } from "lucide-react";
import Button from "./ui/button.jsx";
import CartDrawer from "./cart-drawer.jsx";

function TopBar({ showProducerCta = true }) {
  return (
      <header
          className="w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70"
          role="banner"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <Link
              to="/"
              className="flex items-center gap-2"
              aria-label="GreenCart accueil"
          >
            <Leaf className="h-6 w-6 text-green-600" aria-hidden="true" />
            <span className="font-semibold text-zinc-900" style={{ fontFamily: "Rounded, sans-serif" }}>
            GreenCart
          </span>
          </Link>
          <nav
              className="ml-6 hidden md:flex items-center gap-6"
              aria-label="Navigation principale"
          >
            <Link
                to="/catalog"
                className="text-sm text-zinc-700 hover:text-zinc-900"
            >
              Catalogue
            </Link>
            <Link to="/account" className="text-sm text-zinc-700 hover:text-zinc-900">
              Mon compte
            </Link>
            {showProducerCta && (
                <Link
                    to="/producer/dashboard"
                    className="text-sm text-zinc-700 hover:text-zinc-900"
                >
                  Espace producteur
                </Link>
            )}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <CartDrawer>
              <Button variant="outline" size="sm" className="gap-2">
                <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                <span>Panier</span>
              </Button>
            </CartDrawer>
          </div>
        </div>
      </header>
  );
}

export default TopBar;