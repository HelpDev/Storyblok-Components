
<template>
  <div class="p-4 lg:w-1/2">
    <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
      <img
        alt="team"
        class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
        :src="image"
      >
      <div class="flex-grow sm:pl-8">
        <h2 class="title-font font-medium text-lg text-gray-900">{{blok.name}}</h2>
        <h3
          v-if="blok.role"
          class="text-gray-500 mb-3"
        >{{blok.role}}</h3>
        <p
          v-if="blok.quote"
          class="mb-4"
        >{{blok.quote}}</p>
        <a
          v-if="blok.twitter"
          :href="blok.twitter"
          target="_blank"
          rel="nofollow"
          class="inline-flex"
        >
          <social-icon icon-name="twitter" />
        </a>

        <a
          v-if="blok.linkedin"
          :href="blok.linkedin"
          class="inline-flex"
          target="_blank"
          rel="nofollow"
        >
          <social-icon icon-name="linkedin" />
        </a>

      </div>
    </div>
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
  setup(props) {
    const { blok } = props;

    return {
      image: blok.image?.filename || 'https://dummyimage.com/200x200'
    };
  }
};
</script>
