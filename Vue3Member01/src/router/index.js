import HomeView from "@/views/HomeView.vue"
import AboutView from "@/views/AboutView.vue"
import { createRouter, createWebHistory } from "vue-router";
import {useRouter} from 'vue-router';
import NestedView from "@/views/nested/NestedView.vue";
import NestedOneView from "@/views/nested/NestedOneView.vue";
import NestedTwoView from "@/views/nested/NestedTwoView.vue";
import NestedHomeView from "@/views/nested/NestedHomeView.vue";

const routes= [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },

    {
        path:"/about",
        name:"About",
        component: AboutView,
    },
    
    {
        path:"/nested",
        name:"Nested",
        component: NestedView,
        
        children: [
            {
                path:'',
                name:"NestedHome",
                component: NestedHomeView, 
            },
            {
                path:'one',
                name:"NestedOne",
                component: NestedOneView, 
            },
            {
                path:'two',
                name:"NestedTwo",
                component: NestedTwoView, 
            },
        ]
    
    },

];

const router=createRouter({ //라우터 객체를 만듬
    history: createWebHistory("/"),
    routes: routes, //위의 만든 객체 routes를 루트로 해서 라우터를 생성
})

export default router //이제 이 index.js에 있는 것들은 밖에서 router로 쓸수있음