import "../styles/Products.css";

export default function ProductRow() {
  return (
    <div className="productRow">
      <span>Name</span>
      <span>Category</span>
      <span>Price</span>
      <span>Stock</span>
      <span>Actions</span>
    </div>
  );
}