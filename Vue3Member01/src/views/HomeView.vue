<template>
    <div>
        <h2>Home View</h2>
        <p>{{$route.path}}</p>
        <p>{{ $route.name }}</p>
        <button class="btn btn-primary" @click="goAboutPage"> 
        About으로 이동</button>
        <!-- 이동 경로를 아래 함수로 처리 -->
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
const router=useRouter();
const goAboutPage= ()=> {router.push("/about")};
</script>



<style lang="scss" scoped>

</style>