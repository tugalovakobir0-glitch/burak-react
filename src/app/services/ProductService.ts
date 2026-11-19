import axios from "axios";
import { serverApi } from "../../lib/config";
import { Product, ProductInquare } from "../../lib/types/products";
import { retrieveTopUsers } from "../screens/homePage/selector";

class ProductService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

  public async getProducts(input: ProductInquare): Promise<Product[]> {
    try {
      let url = `${this.path}/product/all?order=${input.order}&page=${input.page}&limit=${input.limit}`;
      if (input.productCollection)
        url += `&productCollection=${input.productCollection}`;
      if (input.search) url += `&search=${input.search}`;
      const result = await axios.get(url);
      console.log("result:", result);
      return result.data;
    } catch (err) {
      console.log("Error getProducts:", err);
      throw err;
    }
  }
  public async getProduct(productId: string): Promise<Product> {
    try {
      const url = `${serverApi}/product/${productId}`;

      const result = await axios.get(url, { withCredentials: true });
      console.log("getProduct:", result);

      return result.data;
    } catch (err) {
      console.log("Error getProducts:", err);
      throw err;
    }
  }
}

export default ProductService;
