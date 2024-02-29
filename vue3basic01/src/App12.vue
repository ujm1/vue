<template>
    <div>
        <h2 v-if="visible">Hello World</h2>
        <!-- 임의로 정의한 visible은 기본으로 false로 되어있기에 이게 안뜨고 -->
        <h2 v-else>false입니다</h2>
        <!-- 이게 뜬다. -->

        <button v-on:click="visible=!visible">toggle</button>
        <!-- 버튼을 누르면, visible의 기본값이었던 false가 true로 변경되며 -->
        <!-- Hello World로 바뀐다 -->
        
        <hr/>
        <button v-on:click="type = 'A'">A</button>
        <button v-on:click="type = 'B'">B</button>
        <button v-on:click="type = 'C'">C</button>
        <button v-on:click="type = 'D'">D</button>

        <h2 v-if="type==='A'">A입니다.</h2>
        <!-- 기본값으로 A를 잡았이게 이게 기본이나 -->
        <h2 v-else-if="type==='B'">B입니다.</h2>
        <h3 v-else-if="type==='C'">C입니다.</h3>
        <h4 v-else>A,B,C가 아닙니다.</h4>
        <hr/>

        <hr/>
        <template v-if="visible">
        <h1>Title</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        </template>
        <!-- 위의 toggle로 visible 변경해 , 원래 false여서
            템플릿으로 지정한 파트 전체가 안보이다가, 클릭했을때 true 되서 보이게됨 -->

        <hr/>
        <h1 v-show="ok">Title입니다</h1>
        <!-- 임의의 ok : true로 되어있어서 보임-->
        <button v-on:click="ok=!ok">show toggle</button>
        <!-- 클릭시 ok가 false가 됨 -> v-show가 false가 되서 보이지 않음-->
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup () {
        const visible=ref(false)
        const type=ref('A')
        const ok= ref(true)

        return {visible, type, ok}
    }
}
</script>

<style lang="scss" scoped>

</style>