<template>
  <div class="container items-center max-w-6xl m-auto mt-5">
    <div
      class="aspect-w-16 aspect-h-9 mb-10 h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl mx-5 sm:mx-10 xl:mx-20"
    >
      <iframe
        :src="blok.url"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
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
