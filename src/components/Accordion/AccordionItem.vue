<template>
  <div>
    <div @click="toggle" class="flex items-center justify-between cursor-pointer my-2 group">
      <div class="flex items-center">
        <span
          class="h-8 w-8 rounded flex items-center justify-center mr-4 rotate-45 p-2"
          :class="numberColor"
        >
          <span class="-rotate-45 text-white text-sm group-hover:font-semibold">{{
            subNumber
          }}</span>
        </span>
        <span
          :class="[isOpen ? contentColor : 'text-gray-800', { 'uppercase font-semibold': isOpen }]"
          class="p-1.5 group-hover:font-semibold text-base"
          >{{ subTitle.title }}</span
        >
      </div>
      <span class="text-xl">{{ isOpen ? '-' : '+' }}</span>
    </div>
    <div
      :style="{ '--before-color': subTitle.beforeColor }"
      v-if="isOpen"
      class="pl-10 verticalLine"
    >
      <div
        v-for="(content, contentIndex) in subTitle.contents"
        :key="contentIndex"
        :style="{ '--before-color': subTitle.beforeColor }"
        class="pl-6 horizontalLine ml-4 mb-2"
      >
        <p :class="contentColor" class="text-base">{{ content }}</p>
      </div>
      <div
        v-for="(inner, index) in subTitle.innerSubTitles"
        :key="index"
        class="mt-2 pl-4 ml-4 text-base"
      >
        <div
          :style="{ '--before-color': subTitle.beforeColor }"
          @click="toggleInner(index)"
          class="flex items-center horizontalLine2"
          :class="{
            'cursor-pointer': inner.contents.length > 0
          }"
        >
          <span
            :class="[
              inner.contents.length > 0 && !isInnerOpen[index] ? 'text-gray-800' : contentColor,
              {
                'font-semibold ': isInnerOpen[index] && inner.contents.length > 0,
                'hover:font-semibold': inner.contents.length > 0
              }
            ]"
            class="ml-2"
            >{{ inner.title }}</span
          >
          <span v-if="inner.contents.length > 0" class="text-xl ml-auto">{{
            isInnerOpen[index] ? '-' : '+'
          }}</span>
        </div>
        <div
          :style="{ '--before-color': subTitle.beforeColor }"
          v-if="isInnerOpen[index]"
          class="pl-4 verticalLineInner"
        >
          <div
            v-for="(innerContent, innerContentIndex) in inner.contents"
            :key="innerContentIndex"
            class="pl-4"
          >
            <p
              :style="{
                '--before-color': subTitle.beforeColor
              }"
              :class="contentColor"
              class="horizontalLineInner ml-2"
            >
              {{ innerContent }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  subTitle: Object,
  subNumber: String,
  contentColor: String,
  numberColor: String
});

const isOpen = ref(false);
const isInnerOpen = ref([]);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const toggleInner = (index) => {
  isInnerOpen.value[index] = !isInnerOpen.value[index];
};
</script>

<style>
.verticalLine,
.verticalLineInner,
.horizontalLine,
.horizontalLine2,
.horizontalLineInner {
  position: relative;
}

.verticalLine::before {
  content: '';
  display: block;
  height: calc(100% - 0.5em);
  /* height: 100%; */
  width: 1px;
  position: absolute;
  left: 2.5em;
  top: 0;
  background-color: var(--before-color) !important;
}

.verticalLineInner::before {
  content: '';
  display: block;
  /* height: 100%; */
  height: calc(100% - 0.7em);
  width: 1px;
  position: absolute;
  left: 20px;
  top: 0;
  background-color: var(--before-color) !important;
}

.horizontalLine::before {
  content: '';
  display: block;
  height: 1.2px;
  width: 20px;
  position: absolute;
  left: -5px;
  top: 14px;
  background-color: var(--before-color) !important;
}

.horizontalLine2::before {
  content: '';
  display: block;
  height: 1.2px;
  width: 20px;
  position: absolute;
  left: -21px;
  top: 13px;
  background-color: var(--before-color) !important;
}

.horizontalLineInner::before {
  content: '';
  display: block;
  height: 1.2px;
  width: 15px;
  position: absolute;
  left: -20px;
  top: 14px;
  background-color: var(--before-color) !important;
}
</style>
