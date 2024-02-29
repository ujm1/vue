<template>
    <div>
        <h2>반응형 메시지
        </h2>
        <p>{{ reactiveMessage }}</p>
        <button v-on:click="addReactiveMessage">Add Message</button>
        <h2>일반 메시지</h2>
        <p>{{ simpleMessage }}</p>
        <button v-on:click="addsimpleMessage">Add Message</button>
    </div>
</template>

<script>
import {onBeforeMount, onMounted, ref} from 'vue';

export default {
    setup () {
        console.log('setup()');
        const reactiveMessage=ref('안녕 reactiveMessage')
        const addReactiveMessage=()=>{
            reactiveMessage.value = reactiveMessage.value+'!'
        } //ref니까 value
        //이러면 누를때마다 뒤에 !가 붙는다

        let simpleMessage='Hello simple Message';
        const  addSimpleMessage=()=>{
            simpleMessage=simpleMessage+'?'
        } //그냥 let으로 잡아줬으니까 

        onMounted(()=> {console.log('onMounted');})

        onBeforeMount(()=>{console.log('onBeforeMount');})


        return {
            reactiveMessage, simpleMessage, addReactiveMessage,addSimpleMessage
        }
    }
}
</script>

<style lang="scss" scoped>

</style>