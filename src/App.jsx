import './App.css'
import './index.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./app/page";
import Catalogue from './app/catalogue/page.jsx';
import Produit from './app/produit/[id]/page.jsx';
import Compte from './app/compte/page.jsx';
import ProducerDashboard from './app/producteur/dashboard/page.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/catalog" element={<Catalogue/>}/>
            <Route path="/product/:id" element={<Produit/>}/>
            <Route path="/producer/dashboard" element={<ProducerDashboard/>}/>
            <Route path="/account" element={<Compte/>}/>
        </Routes>
    )
}

export default App
