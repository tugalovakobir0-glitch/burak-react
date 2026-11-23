import React from "react";
import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveFineshedOrder } from "./selector";
import { useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";
import { Product } from "../../../lib/types/products";
import { OrderItem } from "../../../lib/types/order";

const fineshedOrdersRetriever = createSelector(
  retrieveFineshedOrder,
  (fineshedOrder) => ({ fineshedOrder }),
);

export default function FinishedOrders() {
  const { fineshedOrder } = useSelector(fineshedOrdersRetriever);
  return (
    <TabPanel value={"3"}>
      <Stack>
        {fineshedOrder?.map((order) => {
          return (
            <Box key={order._id} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {order.orderItems.map((item: OrderItem) => {
                  const product: Product = order.productData.filter(
                    (ele: Product) => item.productId === ele._id,
                  )[0];
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  return (
                    <Box key={item._id} className={"orders-name-price"}>
                      <img src={imagePath} className={"order-dish-img"} />
                      <p className={"title-dish"}>{product.productName}</p>
                      <Box className={"price-box"}>
                        <p>${item.itemPrice}</p>
                        <img src={"/icons/close.svg"} />
                        <p>{item.itemQuantity}</p>
                        <img src={"/icons/pause.svg"} />
                        <p style={{ marginLeft: "15px" }}>
                          ${item.itemQuantity * item.itemPrice}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price</p>
                  <p>${order.orderTotal - order.orderDelivery}</p>
                  <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
                  <p>Delivery cost</p>
                  <p>${order.orderDelivery}</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                </Box>
              </Box>
            </Box>
          );
        })}

        {!fineshedOrder ||
          (fineshedOrder.length === 0 && (
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              <img
                src={"/icons/noimage-list.svg"}
                style={{ width: 300, height: 300 }}
              />
            </Box>
          ))}
      </Stack>
    </TabPanel>
  );
}
