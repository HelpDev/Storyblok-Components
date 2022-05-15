<template>
  <header class="relative bg-primary-500 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center py-2 flex-wrap lg:py-6 lg:space-x-10"
      >
        <div class="flex justify-between w-full lg:w-auto">
          <nuxt-link :to="localePath('/')" class="logo">
            <img
              class="h-8 w-auto sm:h-10"
              src="@/assets/images/logo_landscape_white.png"
              alt="Logo"
            />
          </nuxt-link>
        </div>
        <nav
          class="lg:flex lg:flex-1 lg:justify-center lg:space-x-10 mt-2 lg:mt-0 w-screen lg:max-w-screen-md overflow-x-scroll overscroll-y-none whitespace-nowrap"
        >
          <nuxt-link
            v-for="menuItem in menu"
            :key="menuItem.text"
            :to="localePath(menuItem.link)"
            class="text-base font-medium text-white hover:text-primary-700 text-center hover:border-primary-700 mr-3 lg:mr-0"
          >
            {{ $t(menuItem.text) }}
          </nuxt-link>
        </nav>
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
  setup(context) {
    console.log(context.store.state.menu.items);
    console.log(context.store.state.menu.logo);
    const menu = [
      // { link: 'projects', text: 'menu.projects' },
      { link: 'collaborate', text: 'menu.collaborate' },
      { link: 'team', text: 'menu.team' },
      // { link: 'articles', text: 'menu.articles' },
      { link: 'contact', text: 'menu.contact' }
    ];

    return { menu };
  }
};
</script>
