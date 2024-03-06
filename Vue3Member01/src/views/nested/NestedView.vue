<template>
    <div>
        <ul class="nav nav-pills">
            <li class="nav-item">
                <RouterLink class="nav-link"
                active-class="active"
                :to="{name: 'NestedOne', replace: true}">
                <!-- name 이라는 이름으로 이동, 
                    replace를 true로 해서 
                    히스토리에 안담기고 화면 교체 :
                여러번 왔다갔다해도 뒤로가기 두번 누르면 바로 메인으로 이동 -->
                Nested One
                </RouterLink>
            </li>

            <li class="nav-item">
                <RouterLink class="nav-link"
                active-class="active"
                :to="{name: 'NestedTwo', replace: true}">
                
                Nested Two
                </RouterLink>
            </li>
        </ul>
        <hr>
        <RouterView></RouterView> 
        <!-- 이걸 해야됨 -->
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>