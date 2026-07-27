import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import "./styles/app.css";

function App() {
  const [products, setProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("inventory")) || [];
  });

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(products));
  }, [products]);

  return (
    <BrowserRouter>
      <div className="layout">
        {/* Top Header */}
        <header className="header">
          <h3>Inventory Management System</h3>
          <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/Products">Products</Link>
            <Link to="/Settings">Settings</Link>
          </nav>
        </header>

        {/* Main Content Area */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard products={products} />} />
            <Route
              path="/Products"
              element={<Products products={products} setProducts={setProducts} />}
            />
            <Route path="/Settings" element={<Settings setProducts={setProducts}/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;