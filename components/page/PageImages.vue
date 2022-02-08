<template>
  <div class="flex flex-wrap max-w-6xl mx-auto py-8 px-1 sm:px-6">
    <img
      v-for="image in blok.images"
      :key="image.filename"
      :src="image.filename"
      class="w-2/4 my-10 object-cover shadow-lg"
    />
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
