<template>
  <div :class="`w-${width}`">
    <component
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component"
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
  },
  computed: {
    width() {
      return `h${this.blok.width}`;
    }
  }
};
</script>
