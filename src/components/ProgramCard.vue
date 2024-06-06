<script setup>
defineProps({
  program: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="card">
    <h2 class="text-xl font-semibold mb-2">{{ program.name }}</h2>
    <p class="text-gray-700 mb-2">University: {{ program.university }}</p>
    <a :href="program.website" target="_blank" class="text-blue-500 hover:underline"
      >Visit Website</a
    >
  </div>
</template>

<style>
.card {
  @apply border border-transparent  rounded-3xl overflow-hidden  bg-gradient-to-b from-[#fff] to-[#F4F7FA] shadow-2xl hover:shadow-lg transition-all duration-300 ease-linear p-4 sm:p-6;
}
</style>
