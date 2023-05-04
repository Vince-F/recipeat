<script setup lang="ts">
import { computed } from "vue";
import { useRecipeStore } from "../stores/recipesStore";
import TimerComponent from "./TimerComponent.vue";

const props = defineProps<{
  id: string
}>();

const store = useRecipeStore();

const recipe = computed(() => {
  return store.receipesDetailed.get(props.id);
});
</script>

<template>
<div v-if="!recipe">
  This recipe doesn't exist.
</div>
<div v-else>
  <h1>{{ recipe.name }}</h1>
  <img :src="recipe.imageUrl" alt="" />
  <p>{{ recipe.description }}</p>
  <p>For: {{ recipe.recipeYield }} people</p>
  <h2>Preparation time</h2>
  <TimerComponent :duration="recipe.prepTime" />
  <h2>Cooking time</h2>
  <TimerComponent :duration="recipe.cookTime" />
  <div class="section">
    <h2>Tools</h2>
    <ul class="offset-list">
      <li v-for="tool in recipe.tool" :key="tool">{{ tool }}</li>
    </ul>
  </div>
  <div class="section">
    <h2>Ingredients</h2>
    <ul class="offset-list">
      <li v-for="ingredient in recipe.recipeIngredient" :key="ingredient">{{ ingredient }}</li>
    </ul>
  </div>
  <div class="section">
    <h2>Steps</h2>
    <ol class="offset-list">
      <li v-for="step in recipe.recipeInstructions" :key="step">{{ step }}</li>
    </ol>
  </div>  
</div>
</template>

<style scoped>
.offset-list {
  margin-left: 2rem;
}

.section {
  margin-top: 2rem;
}
</style>