<template v-html="source">
  <span v-html="source" :style="{ width: size }" />
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    type: {
      type: String
    },
    size: {
      type: String,
      default: '1rem'
    }
  },
  setup(props) {
    const { icon, type = 'solid' } = props;

    const source = ref(null);

    async function initSource() {
      const image = await import(`heroicons/${type}/${icon}.svg?raw`);
      source.value = image.default;
    }

    initSource();

    return {
      source
    };
  }
};
</script>

<style scoped>
span >>> svg {
  width: inherit;
}
</style>
