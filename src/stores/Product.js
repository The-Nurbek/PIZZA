import axios from "axios";
import { defineStore } from "pinia";

export const useStoreProduct = defineStore("product", {
  state: () => ({
    product: null,
    productBasket: [],
    productOrigins: [],
    defultproductSort: 'По популярности',
    defultproductSortGetProd: '',
    sorted: false,
    productSort: '',
    search:'',
    sortingProductsTitle: [
      { id: 0, name: 'Все', isActive: false },
      { id: 1, name: 'Мясные', isActive: false },
      { id: 2, name: 'Вегетарианская', isActive: false },
      { id: 3, name: 'Гриль', isActive: false },
      { id: 4, name: 'Острые', isActive: false },
      { id: 5, name: 'Закрытые', isActive: false },
    ]
  }),
  getters: {
    productCount() {
      return this.productBasket.length;
    }
  },
  actions: {
    async getProduct() {
      try {
        const response = await axios.get(
          this.defultproductSortGetProd ? `https://64de99a3825d19d9bfb2bcac.mockapi.io/vue-pizza?sortBy=${this.defultproductSortGetProd}&order=desc`
            : "https://64de99a3825d19d9bfb2bcac.mockapi.io/vue-pizza"
        );
        response.data.forEach(el => {
          el.totle = 0;
          el.amount = 0;
        });
        this.product = response.data;
        this.productOrigins = response.data;
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    },
  },
});