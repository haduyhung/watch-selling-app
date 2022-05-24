import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { dataProducts } from "../../common/Data";
import { useGetAllProductsQuery } from "../../features/productsApi";
import { WatchesContainer } from "./style";
import { addToCart } from "../../features/cartSlice";

type Props = {};

const Watches = (props: Props) => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetAllProductsQuery("");
  console.log("data", data);
  const handleAddToCart = (product: dataProducts) => {
    dispatch(addToCart({ ...product, cartQuantity: 0 }));
  };
  return (
    <WatchesContainer>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className="products-list">
          {data.map((product: dataProducts) => (
            <div className="product" key={product.id}>
              <Link to={`/DetailProduct/${product.id}`}>
                <img
                  className="product-img"
                  src={product.img}
                  alt={product.name}
                />
              </Link>
              <div className="product-info">
                <Link to={`/DetailProduct/${product.id}`}>
                  <h3 className="product-name">{product.name}</h3>{" "}
                </Link>
                <h3 className="product-series">class {product.series}</h3>
                {product.promotion > 0 ? (
                  <h3 className="product-promotion">{product.promotion}</h3>
                ) : null}
                <h3 className="product-price">{product.price} vnđ</h3>
              </div>
              <div
                className="product-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </WatchesContainer>
  );
};

export default Watches;
