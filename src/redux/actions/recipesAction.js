export const fetchRecipes = (payload) => ({
  type: "FETCH_RECIPES",
  payload,
});

export const selectedRecipe = (payload) => ({
  type: "SELECTED_RECIPE",
  payload,
});
