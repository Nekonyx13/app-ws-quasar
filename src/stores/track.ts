import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Time } from 'components/models';

export const useTrackStore = defineStore('track', () => {
  const myTimes = ref<Time[]>([]);

  return {};
});
