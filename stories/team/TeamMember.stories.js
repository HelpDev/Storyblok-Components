import TeamMember from '~/components/team/TeamMember.vue';

export default {
  title: 'TeamMember',
  component: TeamMember
};

const Template = (args) => ({
  components: { TeamMember },
  props: Object.keys(args),
  template: '<TeamMember v-bind="{blok: $props}" />'
});

export const Default = Template.bind({});

Default.args = {
  name: 'Quique Fdez Guerra',
  role: 'Founder',
  quote: 'Example of quote',
  twitter: 'https://twitter.com/helpdev_',
  linkedin: 'https://linkedin.com'
};
