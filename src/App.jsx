import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import ProductsPage from "./components/Products/ProductsPage";

let productsList = [];

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/products" element={<Products />} />
                    <Route
                        path="/product/:id"
                        // children={}
                    >
                        {/* <ProductsPage productsList={productsList} /> */}
                    </Route>
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
