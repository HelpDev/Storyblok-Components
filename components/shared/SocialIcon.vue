
<template>
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :style="{width: '1.25rem', fill: `#${icon.hex}`}"
  >
    <path :d="icon.path"></path>
  </svg>
</template>

<script>
import simpleIcons from 'simple-icons';

export default {
  props: {
    iconName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { iconName } = props;

    const icon = simpleIcons.get(iconName);

    return {
      icon
    };
  }
};
</script>
