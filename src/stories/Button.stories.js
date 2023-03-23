import FnButton from '../packages/Button/src/index.vue'

export default {
  title: 'Example/Button',
  component: FnButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
}

const Template = (args) => ({
  components: { FnButton },
  setup() {
    return { args }
  },
  template: '<fn-button v-bind="args" />',
})


export const Default = Template.bind({})
Default.args = {
  label: 'Button',
}

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}

