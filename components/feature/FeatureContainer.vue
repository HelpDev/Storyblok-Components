<template>
  <div class="container items-center max-w-6xl m-auto">
    <div
      class="grid grid-cols-4 gap-8 mt-10 mb-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-6 "
    >
      <component
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
        :is="blok.component"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
};
</script>
