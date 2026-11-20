import { useState } from "react";
import { CartItem } from "../../lib/types/search";

const useBasket = () => {
  const cartJson: string | null = localStorage.getItem("cartData");
  const currenCart = cartJson ? JSON.parse(cartJson) : [];

  const [cartItems, setCartIterms] = useState<CartItem[]>(currenCart);

  const onAdd = (input: CartItem) => {
    const exist: any = cartItems.find(
      (item: CartItem) => input._id === item._id,
    );
    if (exist) {
      const cartUpdate = cartItems.map((item: CartItem) =>
        item._id === input._id
          ? { ...exist, quantity: exist.quantity + 1 }
          : item,
      );
      setCartIterms(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    } else {
      const cartUpdate = [...cartItems, { ...input }];
      setCartIterms(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  };
  const onRemove = (input: CartItem) => {
    const exist: any = cartItems.find(
      (item: CartItem) => input._id === item._id,
    );
    if (exist.quantity === 1) {
      const cartUpdate = cartItems.filter(
        (item: CartItem) => item._id !== input._id,
      );
      setCartIterms(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    } else {
      const cartUpdate = cartItems.map((item: CartItem) =>
        item._id === input._id
          ? { ...exist, quantity: item.quantity - 1 }
          : item,
      );
      setCartIterms(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  };
  const onDelete = (input: CartItem) => {
    const cartUpdate = cartItems.filter(
      (item: CartItem) => item._id !== input._id,
    );
    setCartIterms(cartUpdate);
    localStorage.setItem("cartData", JSON.stringify(cartUpdate));
  };

  const onDeleteAll = () => {
    setCartIterms([]);
    localStorage.removeItem("cartData");
  };
  return {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
  };
};

export default useBasket;
