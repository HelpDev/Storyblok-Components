<template>
  <div v-if="blok.type === Type.Page" class="w-full h-80v max-h-screen">
    <div
      v-if="blok.title"
      class="absolute text-right pr-3 py-2 rounded-br-xl bg-primary-500 text-white w-80 text-3xl z-20"
    >
      <h2>{{ blok.title }}</h2>
    </div>
    <div
      v-if="blok.image"
      class="h-full bg-cover bg-center relative"
      :style="{ backgroundImage: `url(${blok.image.filename})` }"
    >
      <div
        class="absolute bottom-0 py-6 w-full text-center text-3xl lg:text-5xl bg-gray-900  text-white bg-opacity-90 z-20"
      >
        <h2>{{ blok.subtitle }}</h2>
      </div>
    </div>
  </div>
  <div v-else-if="blok.type === Type.Home" class="px-2 py-10 md:px-0">
    <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
      <div class="flex flex-wrap items-center sm:-mx-3">
        <div class="w-full md:w-1/2 md:px-3">
          <div
            class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"
          >
            <h1
              class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              <span class="block font-serif xl:inline">{{ blok.title }}</span>
            </h1>
            <p
              class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl"
            >
              {{ blok.subtitle }}
            </p>
            <div
              v-if="blok.actionLink"
              class="relative flex flex-col sm:flex-row sm:space-x-4"
            >
              <nuxt-link
                :to="localePath(blok.actionLink)"
                class="flex items-center w-full px-10 py-3 mb-3 text-lg text-white bg-primary-500 rounded-md sm:mb-0 hover:bg-primary-700 sm:w-auto"
              >
                {{ blok.actionText }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div
            class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl"
          >
            <img :src="blok.image.filename" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="w-full h-80v max-h-screen">
    No template selected
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
    const Type = {
      Page: 'page',
      Home: 'home'
    };

    return { Type };
  }
};
</script>
