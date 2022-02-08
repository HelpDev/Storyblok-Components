<template>
  <div
    :class="`mx-auto flex justify-between py-8 px-1 sm:px-6 max-w-6xl
       ${
         blok.isSide
           ? 'flex-col md:flex-row'
           : 'flex-col-reverse md:flex-row-reverse'
       }`"
  >
    <div
      v-if="blok.image.filename"
      class="mx-4 w-80 h-80 rounded-full bg-cover shadow-lg"
      :style="{ backgroundImage: `url(${blok.image.filename})` }"
    ></div>

    <p
      :class="`leading-8 font-medium  ${
        blok.image.filename ? 'max-w-3xl' : ''
      }`"
      v-html="renderText(blok.text)"
    ></p>
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
  setup() {
    function renderText(text) {
      if (!this?.$storyapi?.richTextResolver) {
        return text;
      }

      return text ? this.$storyapi.richTextResolver.render(text) : '';
    }

    return {
      renderText
    };
  }
};
</script>
