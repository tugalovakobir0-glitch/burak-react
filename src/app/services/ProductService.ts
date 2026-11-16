import axios from "axios";
import { serverApi } from "../../lib/config";
import { Product, ProductInquare } from "../../lib/types/products";

class ProductService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

  public async getProduct(input: ProductInquare): Promise<Product[]> {
    try {
      let url = `${this.path}/product/all?order=${input.order}&page=${input.page}&limit=${input.limit}`;
      if (input.productCollection)
        url += `&productCollection=${input.productCollection}`;
      if (input.search) url += `&search=${input.search}`;
      const result = await axios.get(url);
      console.log("result:", result);
      return result.data;
    } catch (err) {
      console.log("Error getProduct:", err);
      throw err;
    }
  }
}

export default ProductService;
