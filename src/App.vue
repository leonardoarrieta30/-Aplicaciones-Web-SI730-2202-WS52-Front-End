

<script>
import {CommentsServices} from "@/services/comments-services";

export default {
  name:"app",
  components:{
    login,
  }
};

import login from "@/components/Login.vue";
</script>

<template>
  <nav class="flex flex-row gap-4">
    <router-link to="/">Go to Home</router-link>
    <router-link to="/product">Go to Product</router-link>
    <router-link to="/comment">Go to Comment</router-link>
    <router-link to="/post">Go to Post</router-link>
<!--    <router-link to="/commentNew"> </router-link>-->

  </nav>

  <main>




    <router-view></router-view>
  </main>
<!--  <router-link to="/login">Go to Login</router-link>-->

<!--  <login></login>-->

</template>


<style scoped>

</style>
