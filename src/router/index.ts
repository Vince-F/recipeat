import { createRouter, createWebHistory } from 'vue-router'
import CategoriesListView from "../views/CategoriesListView.vue";
import RecipesListView from "../views/RecipesListView.vue";
import RecipeView from "../views/RecipeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: "/categories"
    },
    {
      path: "/categories",
      name: "categoriesList",
      component: CategoriesListView
    }, 
    {
      path: "/recipes",
      name: "recipesList",
      component: RecipesListView
    },
    {
      path: "/recipe/:id",
      name: "recipeView",
      component: RecipeView
    }
  ]
})

export default router
