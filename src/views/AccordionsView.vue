<template>
  <LayoutView class="mt-20 text-xl font-normal text-gray-600">
    <template #body>
      <LayoutSection class="mt-20 mb-20">
        <template #body>
          <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <AccordionApp
              v-for="(card, index) in cards"
              :key="index"
              :cardNumber="index + 1"
              :title="card.title"
              :subTitles="card.subTitles"
              :titleColor="card.titleColor"
              :contentColor="card.contentColor"
              :numberColor="card.numberColor"
              :cardTitle="card.cardTitle"
            />
          </div>
        </template>
      </LayoutSection>
    </template>
  </LayoutView>
</template>

<script setup>
import AccordionApp from '@/components/Accordion/AccordionApp.vue';
import LayoutSection from '@/components/LayoutSection.vue';
import LayoutView from '@/components/LayoutView.vue';

import useCard from '../composable/useCard.js';

const { cards } = useCard();
</script>
