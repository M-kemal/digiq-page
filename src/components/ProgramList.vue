<script setup>
defineProps({
  program: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <li class="p-4 flex flex-col md:flex-row md:justify-between items-start md:items-center">
    <div>
      <h2 class="text-xl font-semibold">{{ program.name }}</h2>
      <p class="text-gray-700">University: {{ program.university }}</p>
    </div>
    <a :href="program.website" target="_blank" class="text-blue-500 hover:underline mt-2 md:mt-0"
      >Visit Website</a
    >
  </li>
</template>

<style></style>
