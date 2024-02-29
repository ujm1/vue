<template>
    <div>
        <div :style="styleObject">
sadfvasdfasdfasdfvsasdf asdf sadfasdfads
    </div>
    <button v-on:click="fontSize--">-</button>
    <button v-on:click="fontSize++">+</button>
</div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
    setup () {
        
        const fontSize=ref(13);
        const styleObject = computed(
        ()=>{
        return {
            color: 'red',
            fontSize : fontSize.value + 'px',
        }
    }
    )

    return {fontSize, styleObject}
    }
}
</script>

<style lang="scss" scoped>

</style>