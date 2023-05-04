<script setup lang="ts">
import { VAppBar, VMain, VIcon } from "vuetify/components";
import { useRoute, useRouter } from "vue-router";
import RecipeComponent from "../components/RecipeComponent.vue";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();

const recipeId = computed<string>(() => {
  return typeof route.params.id === "string" ?  route.params.id : "";
});

function goToPreviousStep() {
  router.back();
}
</script>

<template>
<v-app-bar title="Recipe" color="primary">
  <template v-slot:prepend>
    <a href="javascript:void(0)" @click="goToPreviousStep"><v-icon icon="mdi-arrow-left" /></a>
  </template>
</v-app-bar>
<VMain>
  <RecipeComponent :id="recipeId" />
</VMain>
</template>