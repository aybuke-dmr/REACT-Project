import { products } from "../../Helper/data";
const ProductCard = () => {
  return (
    <section className="card-container">
      {products.map((product) => (
        <div className="cards">
          <div className="price">
            <h3>{product.price} $</h3>
          </div>
          <img src={product.image}/>
          <div className="card-over"></div>
        </div>
      ))}
    </section>
  );
};
export default ProductCard;