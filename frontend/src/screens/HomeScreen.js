import React, { useEffect, useState } from "react";
// import axios from "axios";
// import products from "../products";
import { Row, Col, Spinner } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
function HomeScreen() {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  useEffect(() => {
    // async function fetchProducts() {
    //   const { data } = await axios.get("api/products/");
    //   setProducts(data);
    // }
    // fetchProducts();
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={2} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
