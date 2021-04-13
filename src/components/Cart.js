import React from "react";
import { Card, Button } from "react-bootstrap";

function Cart(props) {
  console.log("Cart", props);
  return (
    <div>
      <h1>Welcome to the cart</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          alt="image"
          src={props.cardData[0].cardData.image.iphone}
        />
        <Card.Body>
          <Card.Title>Price : {props.cardData[0].cardData.price}</Card.Title>
          <Card.Title>Name :{props.cardData[0].cardData.name} </Card.Title>
          <Button
            variant="primary"
            onClick={() => props.removeFromCartHandler()}
          >
            Remove from Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cart;
