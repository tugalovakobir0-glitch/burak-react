import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./products";

/** REACT APP STATE **/
export interface AppRootState {
  homePage: HomePageState;
  productPage: ProductPageState;
  ordersPage: OrderPageState;
}
/** HOME PAGE **/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** PRODUCTS PAGE **/
export interface ProductPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

export interface OrderPageState {
  pausedOrder: Order[];
  processOrder: Order[];
  fineshedOrder: Order[];
}

/** USERS PAGE **/
