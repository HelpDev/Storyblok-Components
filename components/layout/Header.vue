<template>
  <header class="relative bg-primary-500 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center py-2 flex-wrap lg:py-6 lg:space-x-10"
      >
        <div v-if="logo" class="flex justify-between w-full lg:w-auto">
          <nuxt-link :to="localePath('/')" class="logo">
            <img class="h-8 w-auto sm:h-10" :src="logo" alt="Logo" />
          </nuxt-link>
        </div>
        <nav
          v-if="menu"
          class="lg:flex lg:flex-1 lg:justify-center lg:space-x-10 mt-2 lg:mt-0 w-screen lg:max-w-screen-md overflow-x-scroll overscroll-y-none whitespace-nowrap"
        >
          <template v-for="item in menu">
            <nuxt-link
              v-if="item.link.linktype === 'story'"
              :key="item.name"
              :to="localePath(`/${item.link.url || item.link.cached_url}`)"
              :target="item.target"
              class="text-base font-medium text-white hover:text-primary-700 text-center hover:border-primary-700 mr-3 lg:mr-0"
            >
              {{ item.name }}
            </nuxt-link>

            <a
              v-else
              :key="item.name"
              :target="item.target"
              :href="item.link.url || item.link.cached_url"
              class="text-base font-medium text-white hover:text-primary-700 text-center hover:border-primary-700 mr-3 lg:mr-0"
            >
              {{ item.name }}
            </a>
          </template>
        </nav>
        <div
          v-if="availableLocales && availableLocales.length > 0"
          class="flex items-center justify-end absolute right-0 top-1 lg:relative lg:w-0"
        >
          <t-dropdown
            :fixedClasses="{
              button:
                'block px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
              wrapper: 'inline-flex flex-col',
              dropdownWrapper: 'relative z-10',
              dropdown:
                'origin-top-right absolute right-0 w-24 rounded shadow bg-white mt-1',
              enterClass: 'opacity-0 scale-95',
              enterActiveClass: 'transition transform ease-out duration-100',
              enterToClass: 'opacity-100 scale-100',
              leaveClass: 'opacity-100 scale-100',
              leaveActiveClass: 'transition transform ease-in duration-75',
              leaveToClass: 'opacity-0 scale-95'
            }"
          >
            <div
              slot="trigger"
              slot-scope="{
                mousedownHandler,
                focusHandler,
                blurHandler,
                keydownHandler
              }"
              class="flex"
            >
              <t-button
                variant="outline-secondary"
                @mousedown="mousedownHandler"
                @focus="focusHandler"
                @blur="blurHandler"
                @keydown="keydownHandler"
                class="text-white"
              >
                <TranslateIcon class="w-4" />
              </t-button>
            </div>

            <div class="py-1 rounded-md shadow-xs">
              <nuxt-link
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                >{{ locale.name }}</nuxt-link
              >
            </div>
          </t-dropdown>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import TranslateIcon from 'heroicons/outline/translate.svg?inline';

export default {
  components: {
    TranslateIcon
  },
  data(context) {
    return {
      menu: context.$store.state.menu.items,
      logo: context.$store.state.menu.logo
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    }
  }
};
</script>
