<template>
    <div>
        <div :style="styleObject">
        dslfk jasdl;kfajsdflk
        
        </div>
        <button @click="fontIncrease('-')">-</button>
        <button v-on:click="fontIncrease('+')">+</button>
        <!-- 앞선 코드와 동일 동작 -->

        <button v-on:click="colorChange">colorChange</button>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
    setup () {
        const styleObject=reactive( {
            color:'red',
            fontSize:'13px'
        })

        const fontSizeInt=ref(13)

        const colorValue=ref('')
        
        const fontIncrease= sign=>{
            console.log('fontIncrease click start...');
            console.log('fontIncrease click start...'+sign);
            // sign이 +, -가 된다. 즉 인자에 해당하는 개념이 sign 인듯?
            
            if(sign==='+') {
                fontSizeInt.value++;
                styleObject.fontSize=fontSizeInt.value+'px'

            } else {
                fontSizeInt.value--;
                styleObject.fontSize=fontSizeInt.value+'px'
            }
        }

            const colorChange= () => {
                console.log('colorValue.value click->'+colorValue.value);
                //첫번째 클릭시 
                if(colorValue.value==='red') {
                    colorValue.value='blue'
                    styleObject.color=colorValue.value

                } else { 
                    colorValue.value='red'
                    styleObject.color=colorValue.value
                }
            }
        

        return {styleObject, fontSizeInt, colorValue, 
            fontIncrease, colorChange}
    }
}
</script>

<style lang="scss" scoped>

</style>