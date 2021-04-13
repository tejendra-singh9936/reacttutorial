import React, { useState } from "react";

import { Card, Button } from "react-bootstrap";
import iphone from "../iphone.png";

function Home(props) {
  console.log("Home", props);
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Home Component</h1>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={iphone} />
        <Card.Body>
          <Card.Title>Apple iPhone12</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Specification
          </Card.Subtitle>
          <Card.Text>
            A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED
            display. Ceramic Shield with four times better drop performance. And
            Night mode on every camera.
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              setCount(count + 1);
              props.addToCardHAndlers({
                id: { count },
                image: { iphone },
                price: 1000,
                name: "i-phone",
              });
            }}
          >
            Add To Cart
          </Button>
          <Button
            style={{ marginLeft: "15px" }}
            variant="danger"
            onClick={() => props.removeFromCartHandler()}
          >
            Remove from Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
