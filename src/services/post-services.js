import axios from 'axios'

//exportacion general
export class PostsServices{

    getPost = () =>{
        //conectamos con el api y lo retornamos
        return axios.get("http://localhost:3000/posts");
    }

    //FALTA CAMBIAR

    // postComment = (body,postId) =>{
    //     return axios.post("http://localhost:3000/comments",
    //         {
    //             "body": body,
    //             "postId": postId,
    //         });
    // }
    //
    // deleteComment = (id) =>{
    //     //conectamos con el api y lo retornamos
    //     return axios.delete("http://localhost:3000/comments/" + id);
    // }
    //
    // putComment = (id,body,postId) =>{
    //     return axios.put("http://localhost:3000/comments/" + id,{
    //         "body": body,
    //         "postId": postId,
    //     });
    // }

}