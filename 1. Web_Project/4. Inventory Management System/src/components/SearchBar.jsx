import { useState } from "react";
import "../styles/Products.css";
import ProductForm from "./ProductForm";

export default function SearchBar({ products, onAddProduct }) {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [result, setResult] = useState([]);

function checkSearch() {
  if (searchTerm.trim() === "" && categoryFilter === "") {
    setResult([]);
    return; 
  }
  const filtered = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter === "" ||
        product.category.toLowerCase() === categoryFilter.toLowerCase()) (product.price) (product.quantity)
    );
  });

  setResult(filtered);
}


  return (
    <div className="searchBar">
      <h3>Products Management</h3>

      <button className="add-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close Form" : "+ Add Product"}
      </button>

      {showForm && (
        <ProductForm
          onSave={onAddProduct}
          closeForm={() => setShowForm(false)}
        />
      )}

      {/* Search Section */}
      <div className="searchBox">
        <input
          type="text"
          placeholder="🔍 Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Electronic">Electronic</option>
          <option value="Mobile Accessory">Mobile Accessory</option>
          <option value="Cosmetics">Cosmetics</option>
        </select>

        <button onClick={checkSearch}>Search</button>
      </div>

      {/* Render Results OUTSIDE searchBox */}
      {result.length > 0 && (
        <div className="searchResults">
          {result.map((product) => (
            <div key={product.id}>
              {product.name} - {product.category} - {product.price} -{product.quantity}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}