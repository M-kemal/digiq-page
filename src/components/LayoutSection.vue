<script setup>
const { useMargin } = defineProps({
  useMargin: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
  <div>
    <div
      :class="{
        'm-auto px-4 w-[24rem] h6:w-[30rem] h8:w-[40rem] k1:w-[64rem] k14:w-[86rem]': useMargin
      }"
    >
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style scoped></style>
