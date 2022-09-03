import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import ProductPage from "./components/Products/ProductPage";
import Home from "./Home";

let productsList = [];

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route
                        path="/product/:id"
                        element={<ProductPage productsList={productsList} />}
                    />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
