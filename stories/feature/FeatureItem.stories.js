import FeatureItem from '~/components/feature/FeatureItem.vue';

export default {
  title: 'FeatureItem',
  component: FeatureItem
};

const Template = (args) => ({
  components: { FeatureItem },
  props: Object.keys(args),
  template: '<FeatureItem v-bind="{blok: $props}" />'
});

export const Default = Template.bind({});

Default.args = {
  page: '/path',
  icon: 'puzzle',
  title: 'Feature title',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et mattis sem.'
};
