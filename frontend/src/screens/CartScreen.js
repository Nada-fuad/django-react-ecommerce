import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Row,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";
function CartScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  console.log("🚀 ~ CartScreen ~ location:", location);
  const qty = location.search;
  console.log("🚀 ~ CartScreen ~ qty:", qty);
  const dispatch = useDispatch();

  return <div>Cart</div>;
}

export default CartScreen;
