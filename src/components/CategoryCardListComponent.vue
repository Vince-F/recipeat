<script setup lang="ts">
import CategoryCardComponent from "./CategoryCardComponent.vue";
import { useRecipeStore } from "../stores/recipesStore";

const recipesStore = useRecipeStore();
</script>

<template>
  <div class="category-card-container">
    <CategoryCardComponent v-for="category in recipesStore.categories" :key="category.name"
      :category="category" />
  </div>
</template>

<style scoped>
.category-card-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>