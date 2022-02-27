import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
// import products from '../products'
// import products from '../products'
const Product = (props) => {
  return (
    <Card className="py-3 rounded my-3">
      <Link to={`/product/${props.product._id}`}>
        <Card.Img src={props.product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${props.product._id}`}>
          <Card.Title as="div">
            <strong>{props.product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            {/* {props.product.rating} from {props.product.numReviews} reviews */}
            <Rating
              value={props.product.rating}
              text={`${props.product.numReviews} reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text as="h3">${props.product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
