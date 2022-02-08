import PageHero from '~/components/page/PageHero.vue';

export default {
  title: 'PageHero',
  component: PageHero
};

const Template = (args) => ({
  components: { PageHero },
  props: Object.keys(args),
  template: '<PageHero v-bind="{blok: $props}" />'
});

export const Default = Template.bind({});

Default.args = {
  type: 'home',
  title: 'Page Title',
  subtitle: 'Page Subtitle',
  image: {
    filename: 'https://via.placeholder.com/800x600?text=HelpDev'
  },
  actionLink: '/path',
  actionText: 'Button'
};

Default.argTypes = {
  type: {
    options: ['page', 'home'],
    control: { type: 'select' }
  }
};
