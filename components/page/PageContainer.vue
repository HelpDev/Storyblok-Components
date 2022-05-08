<template>
  <div>
    <component
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component"
      :class="`w-${width}`"
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
