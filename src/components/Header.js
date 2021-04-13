import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import cart from "../download.jpg";
import { Link } from "react-router-dom";
function Header(props) {
  console.log("header", props);
  return (
    <div>
      <div className="add-to-cart">
        <span
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            zIndex: "1",
            backgroundColor: "black",
            color: "white",
            fontSize: "30px",
            borderRadius: "50%",
            height: "40px",
            width: "40px",
          }}
        >
          {props.cardData.length}
        </span>
        <Link to="/cart">
          <Image
            src={cart}
            alt="cart image"
            height="80px"
            style={{
              position: "absolute",
              top: "1%",
              right: "1%",
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
