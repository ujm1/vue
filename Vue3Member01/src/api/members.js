import axios from 'axios'

export function getMembers() {
  console.log('getMembers Start...')
   return axios.get("http://localhost:8386/restApi/v1/members") //모든 정보 줘서 나쁜 api
  //return axios.get('http://localhost:8386/restApi/v21/members') //좋은 api
} //api 수업 때, 만든, postman에 get으로 넣었을 때 객체가 반환되는 주소를 넣음

//단일 멤버 조회
export function getMemberById(id) {
  //const numberId=parseInt(id);
  console.log('getMemberById typeof id->',typeof id);
  console.log('getMemberById id->', id);
  //return axios.get(str_id);
  //return posts.get(id);
  return axios.get('http://localhost:8386/restApi/v15/members/'+id)
}