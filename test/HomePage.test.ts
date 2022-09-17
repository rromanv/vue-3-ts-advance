import { mount } from '@vue/test-utils'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'

import { router } from '@/router'
import HomePage from '@/pages/HomePage.vue'

const head = createHead()
const pinia = createPinia()

test('mount component', async () => {
  expect(HomePage).toBeTruthy()

  const wrapper = mount(HomePage, {
    global: {
      plugins: [router, head, pinia],
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  expect(wrapper.text()).toContain('Home Page')
  expect(wrapper.text()).toContain('The counter is: 0')

  await wrapper.get('button').trigger('click')
  expect(wrapper.text()).toContain('The counter is: 1')

  await wrapper.get('button').trigger('click')
  expect(wrapper.text()).toContain('The counter is: 2')
})
