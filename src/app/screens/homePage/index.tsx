import { Container } from "@mui/material";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";

import { setPopularDishes } from "./slice";

import { Product } from "../../../lib/types/products";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { error } from "console";
/** REDUX SLICE &  SLECTOR  **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());

  useEffect(() => {
    const product = new ProductService();

    product
      .getProduct({
        page: 1,
        limit: 4,
        order: "productViews",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        setPopularDishes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={"home-page"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
