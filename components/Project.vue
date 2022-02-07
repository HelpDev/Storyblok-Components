<template>
  <div class="flex-grow">
    <component
      v-for="hero in blok.hero"
      :key="hero._uid"
      :blok="hero"
      :is="hero.component"
    />

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
  }
};
</script>
