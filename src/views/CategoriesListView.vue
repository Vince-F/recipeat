<script lang="ts" setup>
import { VAppBar, VMain, VIcon } from "vuetify/components";
import CategoryCardListComponent from "../components/CategoryCardListComponent.vue";
</script>

<template>
<v-app-bar title="Recipeat" color="primary">
  <template v-slot:prepend>
    <v-icon icon="mdi-home" />
  </template>
</v-app-bar>
<VMain>
  <CategoryCardListComponent />
</VMain>
</template>