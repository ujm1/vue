<template>
    <div>
        <h2>회원 목록</h2>
        <hr>
        <div>
            <div v-for="member in members" :key="member.id"> <!-- member.id를 pk로 잡아줌 -->
                <MemberItem
                :id="member.id"
                :name="member.name"
                :sal="member.sal"
                @click="goPage(member.id)"
                >


                </MemberItem>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getMembers } from '@/api/members'
import { MemberItem } from '@/components/members/MemberItem.vue'
import router from '@/router';

// members.js에서 export했기 때문에 여기서 import로 쓸 수 있은

const members=ref([])

const fetchMembers = async () => {
  console.log('members.value1->', members.value)
  try {
    //const {data , header}   = await getMembers()
    const { data } = await getMembers()
    members.value = data
    console.log('members.value2->', members.value)
  } catch (error) {
    console.error(error)
  }
} //ajax
fetchMembers() //함수 호출해서 쓰기

const goPage=()=>router.push({name:'MemberDetail'});

const goMemberDetail=(id)=> {
    //router.push('/posts'+id);
    console.log('MemberListView goPage MemberDetail id->', id);
    console.log('MemberDetail typeof id->', typeof id);

    //router.pushScopeId({name:'MemberDetail'});
    router.push({
        name:'MemberDetail',
        params:{
            id
        }
    })
}
</script>

<style lang="scss" scoped>

</style>