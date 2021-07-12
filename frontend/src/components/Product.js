import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
        <div className="dd">{product.name}</div>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as="div">
            <div className="my-3">
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
                color={"#FF7600"}
              />
            </div>
          </Card.Text>
          <Card.Text as="h3">&#x20B9;{product.price}</Card.Text>
        </Link>
      </Card.Body>
    </Card>
  );
}
