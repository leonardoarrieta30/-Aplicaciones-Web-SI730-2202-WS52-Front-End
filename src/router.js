import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';

import Home from './components/Home.vue';
import About from './components/About.vue';
import Login from './components/Login.vue';
import Product from './components/Product.vue';
import Comment from './components/Comment.vue';
import Post from './components/Post.vue';
import CommentNew from "./components/CommentNew.vue";

const routes = [
    { path: '/', component:Home},
    { path: '/product', component: Product},
    { path: '/comment', component: Comment},
    { path: '/post', component: Post},
    { path: '/commentNew', component: CommentNew},
    // { path: '/login', component: Login },
]

const history = createWebHistory();
const router = createRouter({
        history,
        routes
    }
)

export default router