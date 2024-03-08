<template>
    <div>
        <h2>회원(Member) 수정</h2>
        <hr class="my-4">
        <MemberForm 
            v-model:sal="form.sal"
            v-model:name="form.name"
            @submit.prevent="memberUpdate" 
            >
            <template #action>
                <button type="button" class="btn btn-outline-danger"
                @click="goDetailPage">취소</button>
                <button type="button" class="btn btn-primary">수정</button>
            </template>

        </MemberForm>
    </div>
</template>

<script setup>
import { useRoute, userRouter } from 'vue-router'
import {getMemberById} from '@/api/members'
import MemberForm from '@/components/members/MemberForm.vue'


const route=useRoute()
const router=userRouter()
//route는 이동, router는 이동하는 경로에 대한 패스, 정보 등을 가져올 떄
const id=parseInt(route.params.id);

const form=ref({
    sal:null,
    name:null,
});

const fetchMember=async()=>{
    const {data}=await getMemberById(id);
    console.log('MemberEditValue id', id);
    console.log('MemberEditValue data->',data);
}

const setFrom=({sal,name})=>{
    form.toValue.sal=parseInt(sal);
    form.value.name=name;
}
fetchMember();

const memberUpdate=async()=> {
    try {
        console.log('MemberEditValue memberUpdate form.value->',form.value);

        const {data}=await updateMember(id, {...form.value})
        console.log('await... updateMember data->', data);

        router.push({name:'MemberDetail', params:{id}});
    } catch (error) {
        console.error(error);
    }
}
const goDetailPage=()=>router.push({name:'MemberDetail',params:{id}});

</script>

<style lang="scss" scoped>

</style>