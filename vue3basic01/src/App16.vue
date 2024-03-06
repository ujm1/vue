<template>
    <div id="modifiers">
        <div @click="clickDiv">
            div영역
            <p @click="clickP">
                p영역
                    <span @click="clickSpan">
                        span영역
                            <a href="https://naver.com" @click="clickA"> a 영역</a>
                    </span>
            </p>
        </div>
            <button @click.once="clickDiv">once</button>
    </div>
</template>

<script>
export default {
    setup () {
        const clickDiv=()=>{
            console.log('clickDiv');
        }
        const clickP=()=>{console.log('clickP');}
        const clickSpan=()=>{console.log('clickSpan');}
        const clickA=e=>{alert('어떤 기능~')}

        return {clickDiv, clickP, clickSpan, clickA}
    }
}
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
    padding : 40px;
}
#modifiers div {
    background-color: #666;
    display: block;
}

</style>