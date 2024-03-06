<template>
    <div>
            <ul>
                <template v-for="(item, index) in evenItems" :key="item.id">
                    <li>ID: {{ item.id }},
                        인덱스 : {{ index }}, {{ item.message }}
                    </li>
                </template>
            </ul>
            <hr>
            <ul>
                <li v-for="(value, key) in myObject" :key="key">
                    {{ key }}-{{ value }}
                </li>
            </ul>
    </div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
    setup () {
        const items=reactive([
            {id:1, message: 'java'},
            {id:2, message: 'html'},
            {id:3, message:'css'},
            {id:4, message:'javascript'},
        ]);

        const evenItems= computed(
            ()=> items.filter(item=>item.id%2===0)
        );

        const myObject=reactive({
            title:'제목',
            author:'강태광',
            publishedAt:'2024-03-04',
        
        });

        return {items, evenItems, myObject}
    }
}
</script>

<style lang="scss" scoped>

</style>