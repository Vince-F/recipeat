<script setup lang="ts">
import { VBtn, VCard } from "vuetify/components";
import { ref, computed, watch } from "vue";

const props = defineProps<{
  duration: string
}>();

const ellapsedMinutes = ref<number>(0);
const ellapsedSeconds = ref<number>(0);
const enabled = ref<boolean>(false);
let intervalHandle: number | null = null;
const durationRegexp = /PT(\d+)H(\d+)M(\d+)S/;

function toggle() {
  enabled.value = !enabled.value;
  if (enabled.value) {
    intervalHandle = setInterval(() => {
      ellapsedSeconds.value--;
      if (ellapsedSeconds.value < 0) {
        ellapsedMinutes.value--;
        if (ellapsedMinutes.value < 0) {
          ellapsedMinutes.value = 0;
          ellapsedSeconds.value = 0;
          if (intervalHandle) {
            clearInterval(intervalHandle);
          }
        } else {
          ellapsedSeconds.value = 59;
        }
      }
    }, 1000);
  } else if (intervalHandle) {
    clearInterval(intervalHandle);
  }
}

const minutes = computed(() => {
  const result = durationRegexp.exec(props.duration);
  if (result) {
    return parseInt(result[1]) * 60 + parseInt(result[2]);
  }
  return 0;
});

const seconds = computed(() => {
  const result = durationRegexp.exec(props.duration);
  if (result) {
    return parseInt(result[3]);
  }
  return 0;
});

const displayedEllapsedMinutes = computed(() => {
  return new String(ellapsedMinutes.value).padStart(2, "0");
});

const displayedDllapsedSeconds = computed(() => {
  return new String(ellapsedSeconds.value).padStart(2, "0");
});

function updateEllapsedTime() {
  ellapsedMinutes.value = minutes.value;
  ellapsedSeconds.value = seconds.value;
}

watch(props.duration, updateEllapsedTime, { immediate: true });

</script>

<template>
  <v-card class="time-card">
    <div>
      {{ displayedEllapsedMinutes }} : {{ displayedDllapsedSeconds }}
    </div>
    <VBtn :icon="enabled ? 'mdi-pause' : 'mdi-play'" @click="toggle" />
  </v-card>
  
</template>

<style>
.time-card {
  width: 10rem;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
}
</style>