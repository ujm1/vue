<template>
    <div>
        <p>author:{{ book.author }}</p>
        <p>title:{{ book.title }}</p>
        <!-- 이렇게 reactive로 객체를 가져와 쓸 수 있다 -->
        <p>athor의 author:{{ author }}</p>
        <p>title의 title:{{ title }}</p>
    </div>
</template>

<script>
import { reactive, toRef } from 'vue';

export default {
    setup () {
        const book= reactive({
            author:'Vue Team',
            year:'2024',
            title:'Vue3 기본',
            description: '당신은 이 책을 읽습니다',
            price: '22000'
        })

        const author= toRef(book, 'author') //book이라는 객체에 있는 author 를 가져옴 (기본값이므로 ref 사용 : toRef)
        //순수참조이므로, book의 내용이 바뀌면 이것도 같이 바뀜

        const title=toRef(book, 'title')

        return {
            book, author, title
        }
    }
}
</script>

<style lang="scss" scoped>

</style>