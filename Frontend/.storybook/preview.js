/** @type { import('@storybook/vue3').Preview } */

import '../src/assets/styles/main.css'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
