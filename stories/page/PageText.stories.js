import PageText from '~/components/page/PageText.vue';

export default {
  title: 'PageText',
  component: PageText
};

const Template = (args) => ({
  components: { PageText },
  props: Object.keys(args),
  template: '<PageText v-bind="{blok: $props}" />'
});

export const Default = Template.bind({});

Default.args = {
  isSide: false,
  image: {
    filename: 'https://via.placeholder.com/800x600?text=HelpDev'
  },
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et mattis sem. Vestibulum hendrerit, tortor volutpat ornare pulvinar, magna diam aliquam nunc, at mollis ante arcu ac est. Fusce semper rhoncus dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus hendrerit leo laoreet, pulvinar augue ac, rutrum ligula. Cras ac velit accumsan lectus sollicitudin mattis. Pellentesque accumsan lacus id facilisis fermentum. Donec ipsum odio, consectetur nec ex non, scelerisque molestie metus. In hac habitasse platea dictumst. Nullam sollicitudin ut velit non mollis. Nullam ut lectus quis lorem euismod venenatis nec sed est. Cras nec sagittis erat, nec eleifend ex. Etiam nec facilisis magna, non ultrices nibh. Vestibulum consectetur non diam id euismod.'
};
