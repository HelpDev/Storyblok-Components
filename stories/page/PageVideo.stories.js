import PageVideo from '~/components/page/PageVideo.vue';

export default {
  title: 'PageVideo',
  component: PageVideo
};

const Template = (args) => ({
  components: { PageVideo },
  props: Object.keys(args),
  template: '<PageVideo v-bind="{blok: $props}" />'
});

export const Default = Template.bind({});

Default.args = {
  url: 'https://www.youtube.com/embed/Zv-zKqs2tUI'
};
