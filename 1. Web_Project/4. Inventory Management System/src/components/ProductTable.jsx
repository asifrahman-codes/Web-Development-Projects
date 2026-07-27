import "../styles/Products.css";

export default function ProductTable({ products, onDeleteProduct }) {

  if (products.length === 0) {
    return <p style={{ textAlign: "center", padding: "20px" }}>No products found.</p>;
  }

  return (
    <div className="productTable">
      {products.map((item, index) => (
        <div className="table-row" key={item.id || index}>
          <span className="col-name">{item.name}</span>
          <span className="col-cat">{item.category}</span>
          <span className="col-price">${item.price}</span>
          <span className="col-stock">
            <span className={Number(item.quantity) < 5 ? "badge-low" : "badge-in"}>
              {item.quantity}
            </span>
          </span>
          <span className="col-action">
            <button className="delete-btn" onClick={() => onDeleteProduct(item.id)}>Delete</button>
          </span>
        </div>
      ))}
    </div>
  );
}