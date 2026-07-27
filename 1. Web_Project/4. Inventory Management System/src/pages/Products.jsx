import "../styles/Products.css";
import SearchBar from "../components/SearchBar";
import ProductRow from "../components/ProductRow";
import ProductTable from "../components/ProductTable";

export default function Product({ products, setProducts }) {
  
  function addProduct(newProduct) {
    // Add unique ID and ensure quantity is a number
    const productWithId = { 
      ...newProduct, 
      id: Date.now(),
      quantity: Number(newProduct.quantity) 
    };
    setProducts([...products, productWithId]);
  }

  function deleteProduct(idToRemove){
    const updatedProducts = products.filter((product) => product.id !== idToRemove);
    setProducts(updatedProducts);
  }

  return (
    <div className="product">
      <SearchBar products={products} onAddProduct={addProduct} />
      <ProductRow />
      <ProductTable products={products} onDeleteProduct={deleteProduct}/>
    </div>
  );
}