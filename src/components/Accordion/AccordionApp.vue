<template>
  <div v-if="cardTitle">
    <h1 class="text-3xl mb-4 text-center font-header" :class="titleColor">
      {{ cardTitle }}
    </h1>
    <div class="h-0.5 w-full mb-4" :class="numberColor"></div>
  </div>
  <div
    :class="[
      'border shadow mb-4 flex  flex-col lg:flex-row items-start justify-between bg-accordBg p-4 md:px-6 py-1',
      contentColor
    ]"
  >
    <!-- Number and Title -->
    <div class="flex items-center relative lg:w-[240px] mb-4 lg:mb-0">
      <div
        class="h-10 w-10 flex items-center justify-center mr-4 rotate-45 absolute -left-10 top-12 -translate-y-1/2 rounded"
        :class="numberColor"
      >
        <span class="-rotate-45 text-white">{{ cardNumber }}</span>
      </div>
      <h2 :class="['text-xl  mt-6 ml-5 font-header ', titleColor]">{{ title }}</h2>
    </div>
    <!-- Number and Title -->
    <div class="flex flex-col w-full lg:w-3/4 my-2 lg:ml-20">
      <AccordionItem
        v-for="(sub, index) in subTitles"
        :key="index"
        :subTitle="sub"
        :subNumber="`${cardNumber}.${index + 1}`"
        :contentColor="contentColor"
        :numberColor="numberColor"
      />
    </div>
  </div>
</template>

<script setup>
import AccordionItem from './AccordionItem.vue';

defineProps({
  cardNumber: Number,
  title: String,
  subTitles: Array,
  titleColor: String,
  contentColor: String,
  numberColor: String,
  cardTitle: String
});
</script>
