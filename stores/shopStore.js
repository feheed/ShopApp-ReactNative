import { makeAutoObservable } from "mobx";
import api from "./api";
class ShopStore {
  constructor() {
    makeAutoObservable(this);
  }
  shops = [];
  fetchShops = async () => {
    console.log("123");
    try {
      console.log("456");
      const res = await api.get("/shops");
      console.log("789");
      this.shops = res.data;

      console.log(res);
    } catch (error) {
      console.log("01011");
      console.log(
        "🚀 ~ file: shopStore.js ~ line 15 ~ ShopStore ~ fetchShops= ~ error",
        error
      );
    }
  };
}
const shopStore = new ShopStore();
shopStore.fetchShops();
export default shopStore;
