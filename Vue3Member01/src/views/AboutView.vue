<template>
    <div>
        <h2>About View</h2>
        <p>{{ $route.path }}</p>
        
        <button class="btn btn-primary" @click="$router.push('/')">
            Home으로 이동
        </button>
        <!-- 이동 경로를 push 메서드를 통해 처리 -->
    </div>
</template>

<script setup>
    import {useRouter} from 'vue-router';

    const route=useRouter();
    console.log('route.path:', route.path)

</script>

<style lang="scss" scoped>
</style>