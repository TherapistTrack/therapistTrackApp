import { fn } from '@storybook/test'
import MyButton from './ButtonSimple.vue'

const meta = {
  component: MyButton,
  args: { onClick: fn() }
}

export default meta

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    msg: 'Button',
    color: '#F0F'
  }
}
