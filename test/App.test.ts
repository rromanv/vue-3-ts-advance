import { mount } from '@vue/test-utils'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'

import { router } from '@/router'
import App from '@/App.vue'

const head = createHead()
const pinia = createPinia()

test('mount component', async () => {
  expect(App).toBeTruthy()

  const wrapper = mount(App, {
    global: {
      plugins: [router, head, pinia],
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})
