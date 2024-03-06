<template>
  <div>
    <!-- 일반 자바스크립트에서 form의 기본 동작 이벤트(새로고침)를 하지 않도록  제어하는 이벤트. 
    Vue에서는 대신에 v-on:submit.prevent 를 사용 -->
    <form @submit.prevent>
      <input v-model.lazy="title" type="text" placeholder="Title" />
      <textarea v-model="contents" placeholder="Contents"></textarea>
      <hr />
      <button @click="save(title, contents)">저장</button>
    </form>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  setup() {
    const title = ref('')
    const contents = ref('')
    const save = (title, contents) => {
      console.log(`저장되었습니다. title: ${title}, contents: ${contents}`)
    }
    // watch는 이전값, 현재값 모두 필요한 경우 사용.
    // watchEffect는 현재값만 필요할 때 사용.
    // watchEffect는 감시하는 대상을 명시적으로 지정하지 X
    watchEffect(() => {
      console.log('watchEffect')
      save(title.value, contents.value)
    })

    return {
      title,
      contents,
      save
    }
  }
}
</script>

<style lang="scss" scoped></style>
