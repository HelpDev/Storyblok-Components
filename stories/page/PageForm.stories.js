import PageForm from '~/components/page/PageForm.vue';

export default {
  title: 'PageForm',
  component: PageForm
};

const Template = (args) => ({
  components: { PageForm },
  props: Object.keys(args),
  template: '<PageForm v-bind="{blok: $props}" />'
});

export const Default = Template.bind({});

Default.args = {
  url: 'https://helpdev.org'
};
