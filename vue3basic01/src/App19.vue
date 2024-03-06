<template>
    <div>

    </div>
</template>

<script>
import {ref} from 'vue';
export default {
    setup () {
        const message=ref('')
        watch(message, (newValue, oldValue) => {
            //dom~

            //api~
            //state 변경
            console.log('newValue:',newValue);
            console.log('oldValue:',oldValue);
        })

        return {message,}
    }
}
</script>

<style lang="scss" scoped>

</style>