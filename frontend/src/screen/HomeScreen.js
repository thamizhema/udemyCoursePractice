import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

// import products from "../products";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("/api/products/");
      setProducts(data);
      console.log(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>product</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
