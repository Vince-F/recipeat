import { ref, computed } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";
import type { IRecipeOverview } from "@/models/iRecipeOverview";
import type { IRecipeDetailed } from "@/models/iRecipeDetailed";
import type { ICategory } from "@/models/iCategory";

export const useRecipeStore = defineStore("recipe", () => {
  const recipesOverviews: Ref<IRecipeOverview[]> = ref([]);
  const receipesDetailed: Ref<Map<string, IRecipeDetailed>> = ref(new Map());

  // let's save date in indexDB = https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB

  const categories = computed((): ICategory[] => {
    const categories: Map<string, ICategory> = new Map();
    recipesOverviews.value.forEach((recipeOverview) => {
      if (categories.has(recipeOverview.category)) {
        const category = categories.get(recipeOverview.category);
        if (category) {
          category.numberOfRecipes++;
        }
      } else {
        categories.set(recipeOverview.category, {
          name: recipeOverview.category,
          imageUrl: recipeOverview.imagePlaceholderUrl,
          numberOfRecipes: 1
        });
      }
    });
    return Array.from(categories.values());
  });

  /* test data */
  recipesOverviews.value.push({
    "recipe_id": 165815,
    "name": "Aglio e oilo",
    "keywords": null,
    "category": "Pâtes",
    "dateCreated": "2023-04-10 08:36:02",
    "dateModified": "2023-04-10 11:16:54",
    "imageUrl": "/index.php/apps/cookbook/webapp/recipes/165815/image?size=thumb",
    "imagePlaceholderUrl": "/index.php/apps/cookbook/webapp/recipes/165815/image?size=thumb16"
  },
  {
      "recipe_id": 165727,
      "name": "Pain (style baguette, hydratation haute)",
      "keywords": "48h,Baguette,Farine T110,Farine T65,Fermentation longue,Mélange de farines,Pain",
      "category": "Pain",
      "dateCreated": "2023-04-10 07:16:01",
      "dateModified": "2023-04-10 08:08:34",
      "imageUrl": "/index.php/apps/cookbook/webapp/recipes/165727/image?size=thumb",
      "imagePlaceholderUrl": "/index.php/apps/cookbook/webapp/recipes/165727/image?size=thumb16"
  });

  receipesDetailed.value.set("165815", {
    "id": "165815",
    "name": "Aglio e oilo",
    "description": "Une recette de pâtes stylée à essayer.\nOn ajoute de la Maïzena dans l'eau de cuisson des pâtes si les pâtes sont de mauvais qualité pour compenser l’absence d'amidon. L'amidon est utile pour épaissir la sauce.",
    "url": "",
    "image": "/Aglio_e_olio_i.png",
    "prepTime": "PT0H10M0S",
    "cookTime": "PT0H40M0S",
    "totalTime": null,
    "recipeCategory": "Pâtes",
    "keywords": "",
    "recipeYield": 2,
    "tool": [
        "Grande casserole",
        "verre doseur",
        "Mixer plongeant",
        "Four"
    ],
    "recipeIngredient": [
        "2g de Maïzena si pâtes de mauvaise qualité",
        "16g de sel",
        "2,5L d'eau",
        "240g de spagetti",
        "Quelques pincées de piment d'espelette",
        "1-2 cuillère de paprika",
        "Huile d'olive",
        "10 gousses d'ail",
        "Persil frais"
    ],
    "recipeInstructions": [
        "Préparer les gousses d'ail : couper les gousses en deux et supprimer le germe, les placer dans un plat allant au four, couvrir d'huile à hauteur.",
        "Placer l'ail 40 minutes dans un four préchauffé à 125°C.",
        "Chauffer l'eau avec le sel (et la Maïzena si pâtes de mauvaise qualité).",
        "Une fois l'ail confit, mixer avec l'huile de cuisson, le persil, le paprika, le miment un 1-2 louches d'eau de cuisson des pâtes pour obtenir une crème.",
        "Une fois les pâtes cuites, les égoutter et les remettre dans la casserole. Verser la crème dessus et remuer quelques minutes pour que la crème imprègne les pâtes.",
        "Servir."
    ],
    "nutrition": {
        "@type": "NutritionInformation"
    },
    "@context": "http://schema.org",
    "@type": "Recipe",
    "dateModified": "2023-04-10T11:16:54+0000",
    "dateCreated": "2023-04-10T08:36:02+0000",
    "printImage": true,
    "imageUrl": "/index.php/apps/cookbook/webapp/recipes/165815/image?size=full"
  });

  return { recipesOverviews, receipesDetailed, categories };
})
