import axios from "axios";
import { serverApi } from "../../lib/config";
import { Product, ProductInquare } from "../../lib/types/products";
import { LoginInput, Member, MemberInput } from "../../lib/types/member";

class MemberService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

  public async getTopUsers(): Promise<Member[]> {
    try {
      const url = this.path + "/member/top-users";
      const result = await axios.get(url);
      console.log("result:", result);
      return result.data;
    } catch (err) {
      console.log("Error getProduct:", err);
      throw err;
    }
  }
  public async getRestaurant(): Promise<Member> {
    try {
      const url = this.path + "/member/get-restaurant";
      const result = await axios.get(url);
      console.log("result:", result);
      const restaurant: Member = result.data;
      return restaurant;
    } catch (err) {
      console.log("Error getProduct:", err);
      throw err;
    }
  }
  public async signup(input: MemberInput): Promise<Member> {
    try {
      const url = this.path + "/member/signup";
      const result = await axios.post(url, input, { withCredentials: true });

      const member: Member = result.data.member;
      localStorage.setItem("memberData", JSON.stringify(member));
      console.log("member:", member);
      return member;
    } catch (err) {
      console.log("Error signup:", err);
      throw err;
    }
  }
  public async login(input: LoginInput): Promise<Member> {
    try {
      const url = this.path + "/member/login";
      const result = await axios.post(url, input, { withCredentials: true });

      const member: Member = result.data.member;
      localStorage.setItem("memberData", JSON.stringify(member));
      console.log("member:", member);
      return member;
    } catch (err) {
      console.log("Error login:", err);
      throw err;
    }
  }
}

export default MemberService;
