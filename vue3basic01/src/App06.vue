<template>
    <div>
        <button v-on:click="increment">Click {{state.count}}</button>
        <!-- <button v-on:click="increment">Deep Click{{state.deep.count}}</button> -->
        <!-- 이러면 클릭했을때 같이 증가하고, f12에서 수정해줘야 count가 다르게 적용됨 -->
        <button v-on:click="incrementDeep">Deep Click{{state.deep.count}}</button>
    </div>
</template>

<script>
import {reactive} from 'vue';
export default {
    setup () { //컴포넌트 인스턴스가 생성되기 전에 실행. 즉 static같은 기본값
        const state=reactive({
            count:0,
            deep:{
                count:0,
            },
        })        

        const increment=()=>{state.count++ 
            state.deep.count++}
            // 이렇게 구현했기에 클릭하면 같이 증가되지만, 
            //f12에서 직접 변화시키면, count가 따로 들어감.

            const incrementDeep=()=>{state.deep.count++}
        return {
            state, increment, incrementDeep
        } //이렇게 구현했기에, Click 누르면 같이 증가, Deep Click 누르면 deep만 따로 증가.


    }
}
</script>

<style lang="scss" scoped>

</style>