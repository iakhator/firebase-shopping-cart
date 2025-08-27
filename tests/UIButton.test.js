import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import UIButton from '../components/ui/UIButton.vue'

// Mock Element Plus Button component
const ElButtonStub = {
  name: 'ElButton',
  props: ['size', 'icon', 'loading', 'disabled', 'class'],
  template: `
    <button
      :class="[$props.class]"
      :disabled="disabled || loading"
      :data-size="size"
      :data-loading="loading"
      :data-icon="icon ? 'has-icon' : 'no-icon'"
      @click="$emit('click', $event)"
    >
      <slot />
    </button>
  `,
  emits: ['click'],
}

// Create a global computed function for the component
global.computed = vi.fn((fn) => ({ value: fn() }))

describe('UIButton.vue', () => {
  const createWrapper = (props = {}, slots = {}) => {
    return mount(UIButton, {
      props,
      slots,
      global: {
        stubs: {
          'el-button': ElButtonStub,
        },
      },
    })
  }

  describe('Component Rendering', () => {
    it('renders successfully', () => {
      const wrapper = createWrapper()
      expect(wrapper.exists()).toBe(true)
    })

    it('renders with default label', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Save')
    })

    it('renders with custom label', () => {
      const wrapper = createWrapper({ label: 'Submit Form' })
      expect(wrapper.text()).toContain('Submit Form')
    })

    it('renders as a button element', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('button').exists()).toBe(true)
    })
  })

  describe('Props Handling', () => {
    it('passes size prop correctly', () => {
      const wrapper = createWrapper({ size: 'large' })
      expect(wrapper.find('button').attributes('data-size')).toBe('large')
    })

    it('handles different variant types', () => {
      const variants = ['primary', 'secondary', 'plain', 'transparent', 'mild']

      variants.forEach((variant) => {
        const wrapper = createWrapper({ variant })
        expect(wrapper.exists()).toBe(true)
      })
    })

    it('disables button when disabled prop is true', () => {
      const wrapper = createWrapper({ disabled: true })
      expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    })

    it('disables button when loading prop is true', () => {
      const wrapper = createWrapper({ loading: true })
      expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    })

    it('shows loading state', () => {
      const wrapper = createWrapper({ loading: true })
      expect(wrapper.find('button').attributes('data-loading')).toBe('true')
    })

    it('handles icon prop', () => {
      const iconObj = { name: 'test-icon' }
      const wrapper = createWrapper({ icon: iconObj })
      expect(wrapper.find('button').attributes('data-icon')).toBe('has-icon')
    })

    it('handles null icon', () => {
      const wrapper = createWrapper({ icon: null })
      expect(wrapper.find('button').attributes('data-icon')).toBe('no-icon')
    })
  })

  describe('Slot Rendering', () => {
    it('renders icon slot content', () => {
      const wrapper = createWrapper(
        {},
        {
          icon: '<i class="test-icon">left-icon</i>',
        },
      )
      expect(wrapper.html()).toContain('test-icon')
    })

    it('renders icon-right slot content', () => {
      const wrapper = createWrapper(
        {},
        {
          'icon-right': '<i class="test-icon-right">right-icon</i>',
        },
      )
      expect(wrapper.html()).toContain('test-icon-right')
    })

    it('renders both icon slots', () => {
      const wrapper = createWrapper(
        {},
        {
          icon: '<span class="left">L</span>',
          'icon-right': '<span class="right">R</span>',
        },
      )
      expect(wrapper.html()).toContain('left')
      expect(wrapper.html()).toContain('right')
    })
  })

  describe('User Interactions', () => {
    it('emits click event when clicked', async () => {
      const wrapper = createWrapper()
      await wrapper.find('button').trigger('click')

      expect(wrapper.emitted().click).toBeTruthy()
      expect(wrapper.emitted().click).toHaveLength(1)
    })

    it('emits click event multiple times', async () => {
      const wrapper = createWrapper()

      await wrapper.find('button').trigger('click')
      await wrapper.find('button').trigger('click')

      expect(wrapper.emitted().click).toHaveLength(2)
    })

    it('passes event object in click emission', async () => {
      const wrapper = createWrapper()
      await wrapper.find('button').trigger('click')

      expect(wrapper.emitted().click[0]).toBeDefined()
      expect(wrapper.emitted().click[0][0]).toBeDefined()
    })
  })

  describe('State Combinations', () => {
    it('handles disabled and loading states together', () => {
      const wrapper = createWrapper({ disabled: true, loading: true })
      expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    })

    it('is enabled when neither disabled nor loading', () => {
      const wrapper = createWrapper({ disabled: false, loading: false })
      expect(wrapper.find('button').attributes('disabled')).toBeUndefined()
    })

    it('shows correct icon behavior when loading', () => {
      const icon = { name: 'test' }
      const wrapper = createWrapper({ icon, loading: true })

      expect(wrapper.find('button').attributes('data-loading')).toBe('true')
    })
  })

  describe('Edge Cases', () => {
    it('handles empty label', () => {
      const wrapper = createWrapper({ label: '' })
      expect(wrapper.exists()).toBe(true)
    })

    it('handles undefined props gracefully', () => {
      const wrapper = createWrapper({
        variant: undefined,
        size: undefined,
        label: undefined,
      })
      expect(wrapper.exists()).toBe(true)
    })

    it('handles boolean false for disabled', () => {
      const wrapper = createWrapper({ disabled: false })
      expect(wrapper.find('button').attributes('disabled')).toBeUndefined()
    })

    it('handles boolean false for loading', () => {
      const wrapper = createWrapper({ loading: false })
      expect(wrapper.find('button').attributes('data-loading')).toBe('false')
    })
  })

  describe('Accessibility', () => {
    it('maintains button semantics', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('button').element.tagName).toBe('BUTTON')
    })

    it('properly sets disabled attribute for accessibility', () => {
      const wrapper = createWrapper({ disabled: true })
      expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    })

    it('indicates loading state for assistive technology', () => {
      const wrapper = createWrapper({ loading: true })
      expect(wrapper.find('button').attributes('data-loading')).toBe('true')
    })
  })

  describe('Component Integration', () => {
    it('passes variant prop to el-button component', () => {
      const wrapper = createWrapper({ variant: 'secondary' })
      const elButton = wrapper.findComponent({ name: 'ElButton' })

      expect(elButton.exists()).toBe(true)
      expect(elButton.props('class')).toBeDefined()
    })

    it('integrates with el-button properly for different sizes', () => {
      const wrapper = createWrapper({ size: 'large' })
      const elButton = wrapper.findComponent({ name: 'ElButton' })

      expect(elButton.props('size')).toBe('large')
    })

    it('passes loading state to el-button', () => {
      const wrapper = createWrapper({ loading: true })
      const elButton = wrapper.findComponent({ name: 'ElButton' })

      expect(elButton.props('loading')).toBe(true)
    })

    it('passes disabled state to el-button', () => {
      const wrapper = createWrapper({ disabled: true })
      const elButton = wrapper.findComponent({ name: 'ElButton' })

      expect(elButton.props('disabled')).toBe(true)
    })

    it('passes icon prop to el-button when not loading', () => {
      const icon = { name: 'test-icon' }
      const wrapper = createWrapper({ icon, loading: false })
      const elButton = wrapper.findComponent({ name: 'ElButton' })

      expect(elButton.props('icon')).toEqual(icon)
    })

    it('does not pass icon prop to el-button when loading', () => {
      const icon = { name: 'test-icon' }
      const wrapper = createWrapper({ icon, loading: true })
      const elButton = wrapper.findComponent({ name: 'ElButton' })

      expect(elButton.props('icon')).toBeNull()
    })
  })
})
