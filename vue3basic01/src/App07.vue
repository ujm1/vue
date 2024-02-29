<template>
    <div>

    </div>
</template>

<script>
import {reactive, readonly} from 'vue'
export default {
    setup () {
        const original=reactive({
            count:0,
        })
        const copy=readonly(original) //readonly라 직접 변화시킬 순 없고
        //original을 거쳐서 읽을 수만 있음, 즉 original의 count를 그대로 가져옴
        original.count++
        //copy.count++ <- 이런식으로 하면 오류가 콘솔에 출력된다는 것
        console.log('original->'+original.count) //f12
        console.log('copy->'+copy.count);
        
        return {original}
    }
}
</script>

<style lang="scss" scoped>

</style>