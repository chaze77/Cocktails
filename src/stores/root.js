import { defineStore } from "pinia";
import axios from "axios";
import { INGREDIENTS_URL, COCKTAILS_URL, COCKTAIL_ID } from "../constants";

export const useRootStore = defineStore("root", {
  state: () => ({
    ingredients: [],
    ingredient: null,
    coctails: [],
    cocktailId: null,
    cocktail: null,
  }),

  actions: {
    async getIngredients() {
      const data = await axios(INGREDIENTS_URL);
      this.ingredients = data?.data?.drinks;
    },
    async getCoctails(ingredient) {
      const data = await axios(`${COCKTAILS_URL}${ingredient}`);
      this.coctails = data?.data?.drinks;
    },

    setIngredient(value) {
      this.ingredient = value;
    },

    setCocktailId(cocktailId) {
      this.cocktailId = cocktailId;
    },

    async getCocktailById(cocktailId) {
      const data = await axios(`${COCKTAIL_ID}${cocktailId}`);
      this.cocktail = data?.data?.drinks[0];
    },
  },
});
