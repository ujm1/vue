<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reverseMessage }}</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  setup() {
    const message = ref('안녕 Vue3')
    const reverseMessage = ref('')
    const reverseCall = () => {
      console.log('reverseCall 즉시실행함!!!')
      reverseMessage.value = message.value.split('').reverse().join('-')
    }
    watch(message, reverseCall)

    return {
      message,
      reverseMessage
    }
  }
}
</script>

<style lang="scss" scoped></style>
