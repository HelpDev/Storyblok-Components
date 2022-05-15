<template>
  <div class="fixed right-3 bottom-5 z-50">
    <button
      @click="onClickButton"
      class="text-white px-4 w-auto h-10 bg-blue-700 rounded-full hover:bg-blue-800 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
    >
      <svg
        viewBox="0 0 20 20"
        enable-background="new 0 0 20 20"
        class="w-6 h-6 inline-block mr-1"
      >
        <path
          fill="#FFFFFF"
          d="M17.19,4.155c-1.672-1.534-4.383-1.534-6.055,0L10,5.197L8.864,4.155c-1.672-1.534-4.382-1.534-6.054,0
                                    c-1.881,1.727-1.881,4.52,0,6.246L10,17l7.19-6.599C19.07,8.675,19.07,5.881,17.19,4.155z"
        />
      </svg>
      <span>{{ info.cta }}</span>
    </button>

    <t-dialog
      v-model="showDialog"
      icon="info"
      :showCloseButton="true"
      :okButtonText="info.confirm"
      >{{ settings.bank && info.text }}</t-dialog
    >
  </div>
</template>
<script>
import { ref } from '@vue/composition-api';

export default {
  computed: {
    settings() {
      return this.$store.state.settings.donations;
    }
  },
  data() {
    return {
      info: {}
    };
  },
  async fetch() {
    context.app.$storyapi
      .get(`cdn/stories/`, {
        starts_with: context.localePath('donations'),
        version: 'published'
      })
      .then((donationsRefResponse) => {
        const stories = donationsRefResponse.data.stories;
        const info = stories[0].content;

        this.info = info;
      });
  },
  setup() {
    const showDialog = ref();

    function onClickButton() {
      showDialog.value = true;
    }

    return {
      showDialog,
      onClickButton
    };
  }
};
</script>
