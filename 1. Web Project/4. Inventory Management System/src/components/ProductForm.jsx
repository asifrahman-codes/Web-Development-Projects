import { useState } from "react";

export default function ProductForm({ onSave, closeForm }) {
  const [input, setInput] = useState({
    name: "",
    category: "",
    price: "",
    quantity: ""
  });

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.name || !input.price) return alert("Please fill details");
    
    onSave(input); // Send data to parent
    setInput({ name: "", category: "", price: "", quantity: "" }); // Reset
    closeForm(); // Close the form
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input name="name" value={input.name} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Category:</label>
          <select name="category" value={input.category} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Electronic">Electronic</option>
            <option value="Mobile Accessory">Mobile Accessory</option>
            <option value="Cosmetics">Cosmetics</option>
          </select>
        </div>

        <div className="form-group">
          <label>Price ($):</label>
          <input placeholder="$" type="number" name="price" value={input.price} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Quantity:</label>
          <input type="number" name="quantity" value={input.quantity} onChange={handleChange} required />
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn">Save Product</button>
          <button type="button" onClick={closeForm} className="cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
}