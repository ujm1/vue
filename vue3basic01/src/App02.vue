<template>
    <div>
      <button v-on:click="increment">Counter:{{ counter }}</button>
    </div>
  </template>
  
  <script>
  export default { //이렇게 모아놓을 수 있다.
	data() {
		return {
			counter: 0,
		};
	},
	methods: {
		increment() {
			this.counter++; //App01과 똑같이 동작. 단지 default만 한 것
		},
	},
	mounted() {
		console.log('컴포넌트가 마운트 되었습니다!');
	},
};
</script>
  
  <style lang="scss" scoped></style>
  