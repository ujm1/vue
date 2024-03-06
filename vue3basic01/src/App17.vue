<template>
  <div>
    <h2>input value</h2>
    <input type="text" v-model="inputValue" />

    <div>{{ inputValue }}</div>
    <!-- 실시간으로 입력하는 값을 출력 -->
    <div>{{ typeof inputValue }}</div>
    <!-- 실시간으로 입력하는 타입을 출력 -->
    <h2>textarea value</h2>
    <textarea v-model="textareaValue"> </textarea>
    <div>{{ textareaValue }}</div>
    <hr />
    <h2>checkbox value</h2>
    <label for="checkbox">{{ checkboxValue }}</label>
    <input
      type="checkbox"
      id="checkbox"
      v-model="checkboxValue"
      true-value="Yes"
      false-value="No"
    />
    <h3>checkBox value</h3>
    <label type="checkbox" value="html" v-model="checkboxValues"> HTML</label>
    <label type="checkbox" value="jsp" v-model="checkboxValues"> JSP</label>
    <label type="checkbox" value="javascript" v-model="checkboxValues">JavaScript</label>
    <div>{{ checkboxValues }}</div>
    <hr />
    <h2>radio value</h2>
    <label>
      <input type="radio" name="type" value="O" v-model="radioValue" />
      O형
    </label>
    <label>
      <input type="radio" name="type" value="A" v-model="radioValue" />
      A형
    </label>
    <div>{{ radioValue }}</div>
    <hr>
    <h2>select value</h2>
    <select v-model="selectValue">
        <option value="html">html 수업</option>
        <option value="jsp">jsp 수업</option>
        <option value="javascript">javascript 수업</option>
    </select>
    <div>{{ selectValue }}</div>

  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const inputValue = ref('')
    const textareaValue = ref('')
    const checkboxValue = ref('Yes')
    const checkboxValues = ref([])
    const radioValue=ref('0');

    return {
      inputValue,
      textareaValue,
      checkboxValue,
      checkboxValues,
      radioValue,
    }
  }
}
</script>

<style lang="scss" scoped></style>
