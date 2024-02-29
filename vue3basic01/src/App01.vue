<template>
  <div>
    <button v-on:click="increment">Counter:{{ counter }}</button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  setup() {
    const counter = ref(0);
    const increment= ()=>counter.value++;

    onMounted(
      ()=>{console.log("컴포넌트가 마운트 되었음");} //그냥 f12 콘솔에만 나오는거
    )

    return {
      counter, increment //이러면 Counter:0 버튼 나오고 누를때마다 숫자 증가
    }
  }
}
</script>

<style lang="scss" scoped></style>
