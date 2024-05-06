<script>
// why optional API?
// the test was written in a different way
// (methods does not exposed to use in Description test file)

import { debounce } from '@/utils/debounce.js'
export default {
  props: { userInfo: Object },
  data() {
    return {
      textMessage: ''
    }
  },
  methods: {
    isBalanced(text) {
      const balancedMessage = 'The text is balanced.'
      const unBalancedMessage = 'The text is not balanced.'

      this.textMessage = ''
      const stack = []

      for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i)

        if (char === '{' || char === '(' || char === '[') {
          stack.push(char)
        } else if (char === ']') {
          if (stack[stack.length - 1] != '[' || stack.length === 0) {
            this.textMessage = unBalancedMessage
            break
          } else {
            stack.pop()
          }
        } else if (char === ')') {
          if (stack.length === 0 || stack[stack.length - 1] != '(') {
            this.textMessage = unBalancedMessage
            break
          } else {
            stack.pop()
          }
        } else if (char === '}') {
          if (stack[stack.length - 1] != '{' || stack.length === 0) {
            this.textMessage = unBalancedMessage
            break
          } else {
            stack.pop()
          }
        }
      }

      if (stack.length !== 0) this.textMessage = unBalancedMessage
      else if (!this.textMessage) this.textMessage = balancedMessage
    },

    descriptionInput() {}
  },

  created() {
    this.descriptionInput = debounce((event) => {
      this.isBalanced(event.target.value)
    }, 1000)
  }
}
</script>

<template>
  <div class="mx-auto flex w-full max-w-96 flex-col">
    <p class="text-base text-white sm:text-xl">
      Username:
      <span class="font-bold">{{ userInfo ? userInfo.username : '' }}</span>
    </p>
    <p class="text-base text-white sm:text-xl">
      Email:
      <span class="font-bold">{{ userInfo ? userInfo.email : '' }}</span>
    </p>

    <div class="mt-2">
      <input id="description" class="input w-full" @input="descriptionInput" />
      <div v-if="textMessage">{{ textMessage }}</div>
    </div>
  </div>
</template>
