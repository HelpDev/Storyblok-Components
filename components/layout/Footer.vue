<template>
  <footer class="relative bg-primary-500 pt-8 pb-6 mt-20">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-primary-500 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold text-white">
            {{ $t('footer.title') }}
          </h4>
          <h5 class="text-lg mt-1 mb-2 text-primary-100">
            {{ $t('footer.subtitle') }}
          </h5>
          <div class="mt-6" v-if="items">
            <a
              v-for="item in items"
              :key="item.icon"
              :class="`bg-white shadow-lg font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 inline-block transition-colors hover:fill-child-white hover:bg-social-${item.icon}`"
              target="_blank"
              :href="item.link.url || item.link.cached_url"
            >
              <social-icon :icon-name="item.icon" />
            </a>
          </div>
        </div>
        <div class="w-full lg:w-6/12 pt-3 lg:pt-0 lg:px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-6/12 px-4 ml-auto">
              <h5 class="text-2xl font-semibold text-white">
                {{ $t('footer.thanks') }}
              </h5>

              <a
                href="https://helpdev.org"
                alt="Helpdev"
                target="_blank"
                rel="nofollow"
              >
                <img
                  class="h-10 w-auto mt-2"
                  src="https://raw.githubusercontent.com/HelpDev/Storyblok-Components/main/assets/images/helpdev.png"
                  alt="Logo Helpdev"
                />
              </a>

              <a
                href="https://www.storyblok.com/"
                alt="Storyblok"
                target="_blank"
                rel="nofollow"
              >
                <img
                  class="h-10 w-auto"
                  src="https://raw.githubusercontent.com/HelpDev/Storyblok-Components/main/assets/images/storyblok.png"
                  alt="Logo Storyblok"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data(context) {
    return {
      items: context.$store.state.social.items
    };
  },
  watch: {
    $route() {
      this.items = this.$store.state.social.items;
    }
  }
};
</script>
