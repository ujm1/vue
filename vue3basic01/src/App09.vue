<template>
    <div>
        <h2>{{ teacher.name }}</h2>
        <h3>강의가 있습니까?</h3>
        <p>{{ hasLecture }}</p> 
        <!-- computed : 계산 -->
        <p>{{ hasLecture }}</p>
        <p>{{ existLecture() }}</p>
        <!-- 일반 메소드 : 단순호출 -->
        <p>{{ existLecture() }}</p>
        <button v-on:click="counter++">Counter:{{ counter }}</button>
        <h2>이름</h2>
        <p>{{ fullName }}</p>

    </div>
</template>

<script>
import { reactive, computed, ref } from 'vue';

export default {
    setup () {
            const teacher=reactive({
                name: 'ktg',
                lectures: ['HTML','JSP','vue3'],
            })

            const hasLecture=computed(()=>{
                console.log('computed');
                return teacher.lectures.length>0? '있음': '없음';

            });

            const existLecture=()=>{
                console.log('method');
                return teacher.lectures.length>0? '있음': '없음';
            };

            const counter=ref(0);

            const firstName=ref('강');
            const lastName=ref('태광');

            const fullName=computed({
                get() {return firstName.value+' '+lastName.value},

                set(value) { [firstName.value, lastName.value]=value.split(' ')}
            })

            console.log('console 출력:', fullName.value);

            fullName.value='K TK'
            //이렇게하면 firstName을 K로, lastName을 TK로 됨. computed가 계산해서
            //그래서 화면에는 ktg, K TK로 나오지만 콘솔 출력엔 강 태광으로 나옴

        return {
            teacher, hasLecture, existLecture, counter, firstName, lastName, fullName
        }
    }
}
</script>

<style lang="scss" scoped>

</style>