import React from "react";
import "../styles/Dashboard.css";
import StatsCard from "../components/StatsCard";

export default function Dashboard({ products }) {
  // Calculate real-time stats
  const totalProducts = products.length;
  const totalStock = products.reduce((acc, item) => acc + Number(item.quantity), 0);
  const lowStock = products.filter((item) => Number(item.quantity) > 0 && Number(item.quantity) < 5).length;
  const outOfStock = products.filter((item) => Number(item.quantity) === 0).length;

  return (
    <div className="dashboard">
      <header className="page-header">
        <h2>📊 Dashboard</h2>
      </header>

      <div className="stats-grid">
        <StatsCard title="Total Products" value={totalProducts} color="blue" />
        <StatsCard title="Total Stock" value={totalStock} color="green" />
        <StatsCard title="Low Stock" value={lowStock} color="orange" />
        <StatsCard title="Out Of Stock" value={outOfStock} color="red" />
      </div>

      <div className="recent-section">
        <h3>Recent Products</h3>
        <div className="recent-list">
          {products.slice(-3).reverse().map((item, index) => (
            <div className="recent-item" key={index}>
              <span>{item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className={
                Number(item.quantity) === 0 ? "status-out" : 
                Number(item.quantity) < 5 ? "status-low" : "status-in"
              }>
                {Number(item.quantity) === 0 ? "Out of Stock" : 
                 Number(item.quantity) < 5 ? "Low Stock" : "In Stock"}
              </span>
            </div>
          ))}
          {products.length === 0 && <p style={{padding:'10px', color:'#888'}}>No products yet.</p>}
        </div>
      </div>
    </div>
  );
}