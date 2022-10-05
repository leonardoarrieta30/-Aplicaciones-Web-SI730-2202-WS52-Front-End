<script>
import {CommentsServices} from "@/services/comments-services";

export default {
  name: "Login",
  data(){
    return{
      form:{
        username:"",
        email:"",
        password:"",
      },
      selectedCity: null,
      cities: [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
      ],
      value:"",
      comments:[],
      body: "",
      postId: "",
      commentId:"",
      categories:[
        {name:"Lacteos",code:"LA"},
        {name:"Verduras",code:"VE"},
        {name:"Frutas",code:"FR"},
      ],
    };
  },
 methods:{
    sendForm(e){
      e.preventDefault();
      console.log("assad");
    },
    createComment:function (){
      new CommentsServices().postComment(this.body,this.postId)
          .then(response=>{
        console.log("postComment",response)
      })
   },
    deleteComment:function (){
      new CommentsServices().deleteComment(this.commentId)
          .then(response=>{
            console.log("postComment",response)
          })
          .catch(error=>{
            console.log("postComment",error)
          })
   },
   putComment:function (){
     new CommentsServices().putComment(this.commentId,this.body,this.postId)
         .then(response=>{
           console.log("putComment",response)
         })
   },
  },

  "created"(){
  //ni vien se creo el componente yo llamo a mi api
    new CommentsServices().getComments()
        .then(response => {
          console.log("Invocando API")
          console.log(response.status)
          console.log(response.data)
          // console.log(response.request)
          // console.log(response.config)
          // console.log(response.headers)
          // console.log(response.statusText)
          this.comments=response.data;
        })
  }




};

</script>

<template>
  <!--    <div>Hi leonardo arrieta, you are in 6to cicle</div>-->

  <div class="card">
    <div class="field grid">
      <label for="firstname4" class="col-12 mb-2 md:col-2 md:mb-0">Username</label>
      <div class="col-12 md:col-10">
        <input id="firstname4" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
      </div>
    </div>
    <div class="field grid">
      <label for="lastname4" class="col-12 mb-2 md:col-2 md:mb-0">Email</label>
      <div class="col-12 md:col-10">
        <input id="lastname4" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
      </div>
    </div>
    <div class="field grid">
      <label for="lastname4" class="col-12 mb-2 md:col-2 md:mb-0">Enter Password</label>
      <div class="col-12 md:col-10">
        <input id="lastname4" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
      </div>
    </div>
    <Button label="Submit" />
    <div class="field grid">
      <label for="category" class="col-3 mb-2">categoria*</label>
      <div class="col-9 p-0"> <pv-dropdown
          id="categories"
          :options="categories"
          optionLabel="name"
          placeholder="Select a comment"
          class="w-full"
      ></pv-dropdown></div>
    </div>
    <div class="field grid">
      <label for="category" class="col-3 mb-2">Comentarios*</label>
      <div class="col-9 p-0"> <pv-dropdown
          id="comments"
          :options="comments"
          optionLabel="body"
          placeholder="Select a comment"
          class="w-full"
      ></pv-dropdown></div>
    </div>


    <label for="body" class="col-12 mb-2 md:col-2 md:mb-0" >New Comment</label>
    <div class="col-12 md:col-10">
      <input id="body" type="text" v-model="body" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
    </div>

    <label for="postId" class="col-12 mb-2 md:col-2 md:mb-0">postId</label>
    <div class="col-12 md:col-10">
      <input id="postId" type="text"  v-model="postId" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
    </div>

    <Button @click="createComment" >Crear Post</Button>

    <label for="commentId" class="col-12 mb-2 md:col-2 md:mb-0">Choose Id to delete</label>
    <div class="col-12 md:col-10">
      <input id="commentId" type="text"  v-model="commentId" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
    </div>



    <Button @click="deleteComment" >Eliminar Post</Button>




    <Button @click="putComment" >Actualizar Post</Button>


  </div>

</template>




<style scoped>

.card Button{
  margin-top:10px;
  width:100%
}


</style>