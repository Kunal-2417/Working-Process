import React, { useState, useContext } from "react";
// import "./Portfolio.css";
import "./Cards.css";
import { Card, CardGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CompareContext } from '../../context/CompareContext.jsx';
import { CartContext } from "../../context/CartContext";
const Cards = (props) => {
  const { addToCompare } = useContext(CompareContext);
  const { addToCart } = useContext(CartContext);

  const handleAddToCompare = () => {
    const newItem = {
      title: props.title,
      image: props.image,
      totalLike: props.totalLike,
      category: props.category,
    };

    addToCompare(newItem);

  };
  const handleAddToCart = () => {
    const newItem = {
      title: props.title,
      image: props.image,
      totalLike: props.totalLike,
      category: props.category,
    };

    addToCart(newItem);

  };


  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleClick = () => {
    const link = props.link; // Replace with the actual link prop value
    window.open(link, '_blank');
  };

  return (
    <>
      <CardGroup>
        <Card onClick={toggleModal} className="card-grid">
          <Card.Img
            className="card-img"
            variant="bottom"
            src={props.image}
            alt=""
            onClick={toggleModal}
          />
          <Card.Body>
            <Card.Title className="card-title">
              <strong>{props.title}</strong>
            </Card.Title>
            <Card.Text>
              <i className="far fa-heart"></i> {props.totalLike}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content d_flex">
            <div className="modal-img left">
              <img src={props.image} alt="" />
            </div>
            <div className="modal-text right">
              {/* <span>Featured - Design</span> */}
              <h1>{props.title}</h1>
              <p>
                {props.totalLike}
              </p>
              <p>
                
              </p>
              <div className="button f_flex mtop">
                <button className="apply-btn" onClick={handleAddToCompare}>
                  Add to Compare
                </button>
                
                <button className="apply-btn" onClick={handleAddToCart}>
                  Add to Cart
                </button>
                <button className="apply-btn" onClick={handleClick}>
                  Buy on {props.category }
                </button>
              </div>
              <button
                className="close-modal apply-btn"
                onClick={toggleModal}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
