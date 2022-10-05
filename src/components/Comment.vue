<template>

  <pv-dataTable :value="comments">
      <pv-column field="id" header="Id"></pv-column>
      <pv-column field="body" header="Body"></pv-column>
      <pv-column field="postId" header="Post Id">

<!--        si o si usamos slotProps para poder utilizar html dentro de otro html xD-->
        <template #body="slotProps">

          <Button @click="deleteComment(slotProps.data.id)">Eliminar</Button>

        </template>

      </pv-column>
  </pv-dataTable>

  <Button><router-link to="/commentNew">New Comment</router-link></Button>

<!--PROBE ESTO Y SOLO SE PUEDE EN EL then xd  -->
<!--  <Button this.$router.push('/comment') >New Comment</Button>-->

</template>



<script>

import {CommentsServices} from "@/services/comments-services";
export default {
  name: "Comment",
  data(){
    return {
      comments: null
    }
  },
  methods:{
    deleteComment:function (id){
    //  aca hacer una llamada a la API
    console.log("Deleted Comment "+id)
    }
  },

  created() {
    new CommentsServices().getComments()
        .then(response =>{
          this.comments = response.data
        })
  }
}
</script>

<style scoped>
  Button{
    margin:12px;
  }
</style>