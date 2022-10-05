import axios from 'axios'

//exportacion general
export class CommentsServices{

    getComments = () =>{
        //conectamos con el api y lo retornamos
        return axios.get("http://localhost:3000/comments");
    }

    postComment = (body,postId) =>{
        return axios.post("http://localhost:3000/comments",
            {
                "body": body,
                "postId": postId,
            });
    }

    deleteComment = (id) =>{
        //conectamos con el api y lo retornamos
        return axios.delete("http://localhost:3000/comments/" + id);
    }

    putComment = (id,body,postId) =>{
        return axios.put("http://localhost:3000/comments/" + id,{
            "body": body,
            "postId": postId,
        });
    }

}