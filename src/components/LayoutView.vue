<script setup>
import LayoutSection from '../components/LayoutSection.vue';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const scrollY = ref(window.scrollY);
const windowHeight = ref(window.innerHeight);
const windowWidth = ref(window.innerWidth);

const updateDimensions = () => {
  scrollY.value = window.scrollY;
  windowWidth.value = window.innerWidth;
  windowHeight.value =
    (windowWidth.value < 1000 ? window.innerHeight * 0.6 : window.innerHeight) - 80;
};

onMounted(() => {
  window.addEventListener('scroll', updateDimensions);
  window.addEventListener('resize', updateDimensions);
  updateDimensions();
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateDimensions);
  window.removeEventListener('resize', updateDimensions);
});

const useColor = computed(
  () =>
    (scrollY.value > windowHeight.value && route.path === '/') ||
    (route.path !== '/news' && !route.path.startsWith('/news/') && route.path !== '/')
);
</script>

<template>
  <div class="lView min-h-screen" :class="{ '': useColor }">
    <LayoutSection class="min-h-screen" :use-margin="false">
      <template #body>
        <slot name="menubar"></slot>
        <div class="lg:flex lg:items-center">
          <div class="min-h-screen w-full">
            <slot name="body"></slot>
          </div>
        </div>
      </template>
    </LayoutSection>
  </div>
</template>

<style scoped></style>
