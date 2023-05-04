<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import { VAppBar, VMain, VIcon } from "vuetify/components";
import RecipesListComponent from "../components/RecipesListComponent.vue";

const route = useRoute();
const router = useRouter();

const categoryName = computed(() => {
  return route.query.categoryName ? "" + route.query.categoryName : "";
});
const categoryTitle = computed(() => {
  return "Category: " + (categoryName.value || "All");
});

function goToPreviousStep() {
  router.push({ name: "categoriesList" });
}
</script>

<template>
<v-app-bar :title="categoryTitle" color="primary">
  <template v-slot:prepend>
    <a href="javascript:void(0)" @click="goToPreviousStep">
      <v-icon icon="mdi-arrow-left" />
    </a>
  </template>
</v-app-bar>
<VMain>
  <RecipesListComponent :category-name="categoryName" />
</VMain>
</template>