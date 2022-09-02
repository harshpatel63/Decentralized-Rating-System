import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import ProductsPage from "./components/Products/ProductsPage";

let productsList = [];

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route
                        path="/product/:id"
                        exact
                        element={(props) => (
                            <ProductsPage
                                {...props}
                                productsList={productsList}
                            />
                        )}
                    />
                </Routes>
            </Router>

            <Footer />
        </div>
    );
}

export default App;
