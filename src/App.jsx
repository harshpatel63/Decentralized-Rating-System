import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hospitals from "./components/Hospitals/Hospitals";
import HospitalPage from "./components/Hospitals/HospitalPage";
import Home from "./Home";
import About from "./About";

let hospitalList = [];

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hospitals" element={<Hospitals />} />
                    <Route
                        path="/hospital/:id"
                        element={<HospitalPage hospitalList={hospitalList} />}
                    />
                    <Route path="/about" element={<About />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
