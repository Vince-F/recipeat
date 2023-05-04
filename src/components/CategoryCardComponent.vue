<script setup lang="ts">
import { VCard } from "vuetify/components";
import { useRouter } from "vue-router";
import type { ICategory } from "../models/iCategory";

const props = defineProps<{
  category: ICategory;
}>();

const router = useRouter();

function openCategory() {
  router.push({ name: "recipesList", query: { categoryName: props.category.name } });
}
</script>

<template>
  <a href="javascript:void(0)" @click="openCategory">
    <v-card class="category-card">
      <template v-slot:title>
        {{ category.name }}
      </template>

      <template v-slot:subtitle>
        Recipes: {{ category.numberOfRecipes }}
      </template>

      <template v-slot:text>
        <img :src="category.imageUrl" alt="" />
      </template>
    </v-card>
  </a>
</template>

<style scoped>
a {
  text-decoration: none;
}

.category-card {
  width: 13rem;
  height: 13rem;
}

@media screen and (max-width: 45rem) {
  .category-card {
    width: 10rem;
    height: 10rem;
  }
}
</style>