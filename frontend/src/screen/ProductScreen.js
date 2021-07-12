import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Card, Image, ListGroup } from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";
import products from "../products";

export default function ProductScreen({ match }) {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <Link to="/" className="btn btn-dark my-3">
        GO BACK
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} Review`}
              />
            </ListGroup.Item>

            <ListGroup.Item>Price: &#x20B9;{product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>
                    <strong>&#x20B9;{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  {" "}
                  <Button
                    className="btn"
                    type="button"
                    disabled={product.countInStock == 0}
                  >
                    Add to Cart
                  </Button>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
