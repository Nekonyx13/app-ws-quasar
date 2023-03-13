<template>
  <q-page class="row items-center justify-evenly">
    <time-card />
  </q-page>
</template>

<script setup lang="ts">
import { useTrackStore } from 'stores/track';
import { computed } from 'vue';
import TimeCard from 'components/TimeCard.vue';

const trackStore = useTrackStore();

const tracks = computed(() => trackStore.tracks);
</script>
