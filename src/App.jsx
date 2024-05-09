import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewCustomer from "./pages/NewCustomer";
import Search from "./pages/Search";
import "./App.css";
import "./styles/custom.scss";

function App() {
    return (
        <Router>
            <h1>Simple Customer Info API</h1>
            <ul className="nav">
                <li>
                    <strong>Pages:</strong>
                </li>
                <li>
                    <Link to="/">New Customer Form</Link>
                </li>
                <li>
                    <Link to="/search">Search Customers</Link>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<NewCustomer />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </Router>
    );
}

export default App;
