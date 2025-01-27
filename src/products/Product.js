import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Product(props) {
  const price = props.product.price;
  const addToCart = props.addToCart;
  let percentOff;
  let offPrice = `${price}Ks`;


  if (props.percentOff && props.percentOff > 0) {
    percentOff = (
      <div
        className="badge bg-dim py-2 text-white position-absolute"
        style={{ top: "0.5rem", right: "0.5rem" }}
      >
        {props.percentOff}% OFF
      </div>
    );
    offPrice = (
      <>
        <del>{price}Ks</del> {price - (props.percentOff * price) / 100}Ks
      </>
    );
  }
  let productData = props.product;

  return (
    <div className="col">
      <div className="card shadow-sm">
        <Link to= {"/products/" + productData.id} href="!#" replace>
          {percentOff}
          <img
            className="card-img-top bg-dark cover"
            height="200"
            alt=""
            src={productData.image}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title text-center text-dark text-truncate">
            {productData.name}
          </h5>
          <p className="card-text text-center text-muted mb-0">{offPrice}</p>
          <div className="d-grid d-block">
            <button className="btn btn-outline-dark mt-3" onClick={() => addToCart(productData)}>
              <FontAwesomeIcon icon={["fas", "cart-plus"]} /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
