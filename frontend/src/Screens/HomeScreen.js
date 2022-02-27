import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../Component/Product";
import { useEffect } from "react";
import { listProducts } from "../redux/action/productActions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Component/Loader";
import Message from "../Component/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => {
    return state.productList;
  });
  const { products, loading, error } = productList;
  console.log(error);
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" childern={error} />
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
