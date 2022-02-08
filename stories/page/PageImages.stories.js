import PageImages from '~/components/page/PageImages.vue';

export default {
  title: 'PageImages',
  component: PageImages
};

const Template = (args) => ({
  components: { PageImages },
  props: Object.keys(args),
  template: '<PageImages v-bind="{blok: $props}" />'
});

export const Default = Template.bind({});

Default.args = {
  images: [
    {
      filename: 'https://via.placeholder.com/800x600?text=HelpDev'
    },
    {
      filename: 'https://via.placeholder.com/800x600?text=HelpDev'
    },
    {
      filename: 'https://via.placeholder.com/800x600?text=HelpDev'
    },
    {
      filename: 'https://via.placeholder.com/800x600?text=HelpDev'
    },
    {
      filename: 'https://via.placeholder.com/800x600?text=HelpDev'
    },
    {
      filename: 'https://via.placeholder.com/800x600?text=HelpDev'
    }
  ]
};
