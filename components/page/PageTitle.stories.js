import PageTitle from './PageTitle.vue';

export default {
  title: 'PageTitle',
  component: PageTitle
};

const Template = (args) => ({
  components: { PageTitle },
  props: Object.keys(args),
  template: '<PageTitle v-bind="{blok: $props}" />'
});

export const Default = Template.bind({});

Default.args = {
  text: 'Page Title',
  subtitle: 'Page Subtitle'
};
