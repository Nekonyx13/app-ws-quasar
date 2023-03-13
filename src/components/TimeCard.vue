<template>
  <div class="tw-bg-green-500 shadow-1">
    <div class="flex items-center justify-between p-4">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1558981405-6d9b9a5d4f4a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            alt=""
          />
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">
            {{ time.name }}
          </div>
          <div class="text-sm text-gray-500">
            {{ time.description }}
          </div>
        </div>
      </div>
      <div class="ml-4 flex-shrink-0 flex">
        <p class="text-sm text-gray-500">{{ time.start }} - {{ time.end }}</p>
      </div>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Happened At</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ time.createdAt }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Happiness</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ time.happiness }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Time } from 'components/models';

interface Props {
  time: Time;
}
const props = withDefaults(defineProps<Props>(), {
  time: () => ({
    id: 0,
    name: 'DEFAULT_NAME',
    description: 'DEFAULT_DESCRIPTION',
    start: '1970-01-01T00:00:00.000Z',
    end: '1970-01-01T01:00:00.000Z',
    createdAt: '2023-01-01T00:00:00.000Z',
    happiness: 0,
  }),
});
</script>
