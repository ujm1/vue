<template>
    <div>
        <h2>{{ MemberItem.name }}</h2>
        <p>{{ MemberItem.sal }}</p>
        <hr class="my-4">
        <div class="row g-2">
            <div class="col-auto">
                <button class="btn btn-outline-dark">이전글</button>

            </div>
            <div class="col-auto">
                <button class="btn btn-outline-dark">다음글</button>
                
            </div>
            <div class="col-auto me-auto"></div>
            <div class="col-auto">
                <button class="btn btn-outline-dark" @click="goListPage">목록</button>

            </div>
            <div class="col=auto">
                <button class="btn btn-outline-primary" @click="goEditPage">수정</button>
            </div>
        </div>
        <hr class="my-4">
        <p>params:{{ $route.params }}</p>
        <p>Query:{{ $route.query }}</p>
        <p>hash:{{ $route.hash }}</p>
    </div>
</template>

<script setup>
import {userRouter} from 'vue-router'

import {ref} from 'vue'
import { getMemberById } from '@/api/members';


const props=defineProps({
    id:String
})

//const route-useRoute();
//const {id:idRef} = toRefs(props);
const router=userRouter()
//const routeid=route.params.id;
const member=ref({
    name:null,
    sal:null
})

const fetchMember=async()=>{
    console.log('1.memberPostValue props.id->',props.id);
    //오류 발생 지점
    const {data}=await getMemberById(props.id);
    console.log('2.memberDetailValue props.id->',props.id);
    //console.log('3.PostDetailValue data->',data);
    SetMember(data)
}
const SetMember=({name,sal})=>{
    member.value.name=name,
    member.value.sal=sal 
    //post.value.createdAt=createAt;
}
fetchMember()

const goListPage=()=>router.posh({name:'MemberList'})

const goMemberUpdatePage=()=>router.push({
    name:'MemberEdit',
    params: {id: props.id}
})

</script>

<style lang="scss" scoped>

</style>