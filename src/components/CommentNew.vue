<template>
  <form>
    <div class="field grid">
      <label for="body">Body</label>
      <InputText id="body" v-model="body"/>

    </div>

    <div class="field grid">
      <label for="postId">Post Id</label>
<!--      <InputText id="postId" v-model="postId"/>-->
<!--si queresmos ponemos un dropdown,porque el usuario no sabe el postId-->
      <pv-dropdown v-model="SelectedPost" :options="posts" optionLabel="title" placeholder="Select a Post" />

    </div>


    <Button @click="createComment">Save</Button>

  </form>

</template>

<script>
import {CommentsServices} from "@/services/comments-services";
import {PostsServices} from "@/services/post-services";

export default {
  name: "CommentNew",
  data(){
    return{
      body: "",
      SelectedPost: "",
      posts:null
    };

  },
  methods:{
    createComment:function (){
      console.log("body: ",this.body);
      console.log("id: ",this.SelectedPost.id);
      new CommentsServices().postComment(this.body,this.SelectedPost.id)
          .then(
              this.$router.push('/comment')
          )
    },
  },
  created() {
    new PostsServices().getPost()
        .then(response=>{
         this.posts = response.data
        })
  }
};
</script>

<style scoped>

</style>