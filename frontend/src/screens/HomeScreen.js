import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

function HomeScreen() {
  return (
    <div>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={2} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
