<template>
    <div>
        <h2>보간법</h2>
        <p>{{message}}</p> 
        <!-- 클릭시 하나씩 느낌표 추가됨 -->
        <p v-once>{{ message }}</p>
        <!-- 한번만 됨. 근데 안되는데.. -->
        <button v-on:click="message=message+'!'">Click!</button> 
        <hr/>
        <h2>HTML</h2>
        <p>{{ rawHtml }}</p>
        <!-- 문자열로 인식해 메시지 <strong>어쩌고~ 가 그대로 출력 -->
        <p v-html="rawHtml"></p>
        <!-- html 태그 <strong>을 인식-> html에 태그가 적용됨 -->
        <hr/>
        <h2>속성 바인딩</h2>
        <div :title="dynamicTitle">마우스를 올려보세요</div> 
        <!-- 마우스 올렸을 때 안녕하세요!@@@@!! 뜸 -->
        <input type="text" value="홍길동" :disabled="isInputDisabled"/>
        <input v-bind="attrs"/>
        <hr/>
        {{ message.split('').reverse().join('-') }} <br>
                <!-- !-요-세-하-녕-안 -->
        {{ isInputDisabled? "y" : "n" }}
                <!-- 기본값 faluse니까 n으로 출력 -->
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup () {
        const message=ref('안녕하세요!')
        const rawHtml=ref('<strong>안녕하세요</strong>')
        const dynamicTitle=ref('안녕하세요!@@@@@!!') 
        const isInputDisabled=ref(false)
        const attrs= ref ({ //속성 부여
            type: 'text', //텍스트박스
            value: 'abc', //abc가 기본값으로 들어가있음
            disable: false //입력가능
        })

        return {
            message, rawHtml, dynamicTitle, isInputDisabled, attrs
        }
    }
}
</script>

<style lang="scss" scoped>

</style>