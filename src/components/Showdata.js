import axios from "axios";
import { useEffect, useState } from "react";

const Showdata = (props) => {
  const products = props.data;
  const [getProducts, setgetProducts] = useState([]);
  async function getAllProducts() {
    try {
      const products = await axios.get("http://localhost:4000/product/readAll");
      setgetProducts(products.data.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, [products]);

  async function reduceQuan(id, quan) {
    const findProduct = getProducts.filter((product) => {
      return product.id === id;
    });
    const storeProduct = findProduct[0];
    if (quan > storeProduct.quantity) {
      console.log("can't update");
      return;
    }
    const obj = {
      name: storeProduct.name,
      description: storeProduct.description,
      price: storeProduct.price,
      quantity: storeProduct.quantity - quan,
    };
    try {
      let response = await axios.put(
        `http://localhost:4000/product/update/${id}`,
        obj
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h2>Showdata</h2>
      {getProducts.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.quantity}</p>
          <button
            onClick={() => {
              reduceQuan(product.id, 1);
            }}
          >
            Buy 1
          </button>
          <button
            onClick={() => {
              reduceQuan(product.id, 2);
            }}
          >
            Buy 2
          </button>
          <button
            onClick={() => {
              reduceQuan(product.id, 3);
            }}
          >
            Buy 3
          </button>
        </div>
      ))}
    </>
  );
};
export default Showdata;
