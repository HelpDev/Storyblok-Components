<template>
  <div class="flex flex-col text-center w-full">
    <div
      :class="`pt-${9 - blok.h} pb-${
        5 - blok.h
      } px-1 sm:px-6 max-w-6xl mx-auto w-full text-${
        blok.align
      } font-serif font-extrabold bg-opacity-90 z-20 text-${6 - blok.h}xl`"
    >
      <component :is="titleH">{{ blok.text }}</component>
    </div>

    <component
      :is="subtitleH"
      v-if="blok.subtitle"
      :class="`w-full px-1 sm:px-6 max-w-6xl mx-auto leading-relaxed text-base text-${blok.align}`"
    >
      {{ blok.subtitle }}
    </component>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    titleH() {
      return `h${this.blok.h}`;
    },
    subtitleH() {
      return `h${Number(this.blok.h) + 1}`;
    }
  }
};
</script>
