import PageTitle from '~/components/page/PageTitle.vue';

export default {
  title: 'PageTitle',
  component: PageTitle
};

const Template = (args) => ({
  components: { PageTitle },
  props: Object.keys(args),
  template: '<PageTitle v-bind="{blok: $props}" />'
});

const Default = Template.bind({});

Default.args = {
  text: 'Page Title',
  subtitle: 'Page Subtitle',
  h: 0,
  align: 'center'
};

Default.argTypes = {
  h: { table: { disable: true } },
  align: {
    options: ['left', 'center', 'right'],
    control: { type: 'select' }
  }
};

export const H1 = Template.bind({});
H1.args = {
  ...Default.args,
  h: 1
};
H1.argTypes = Default.argTypes;

export const H2 = Template.bind({});
H2.args = {
  ...Default.args,
  h: 2
};
H2.argTypes = Default.argTypes;

export const H3 = Template.bind({});
H3.args = {
  ...Default.args,
  h: 3
};
H3.argTypes = Default.argTypes;

export const H4 = Template.bind({});
H4.args = {
  ...Default.args,
  h: 4
};
H4.argTypes = Default.argTypes;
