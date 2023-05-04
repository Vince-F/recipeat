<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { VList } from "vuetify/components";
import { useRecipeStore } from "../stores/recipesStore";

const props = defineProps<{
  categoryName: string;
}>();

const store = useRecipeStore();
const router = useRouter();

const recipesList = computed(() => {
  return store.recipesOverviews
    .filter((recipeOverview) => {
      return props.categoryName === "" || recipeOverview.category === props.categoryName;
    }).map((recipe) => {
      return {
        title: recipe.name,
        prependAvatar: recipe.imageUrl,
        value: recipe.recipe_id
      };
    });
});

function openRecipe(value: { id: unknown; value: boolean; path: unknown[]; }) {
  router.push({ name: "recipeView", params: { id: value.id as string } });
}
</script>

<template>
<v-list :items="recipesList" select-strategy="classic" @click:select="openRecipe" />
</template>