<template>
 <div id="#top" class="container-fluid">
    <div class="row h-100 justify-content-center align-items-center">
    
     
      <div class="col-md-6 gedf-main card">

 <div v-if="currentComment" class="card-body">
          <h4>Post</h4>
            <div class="">
                <div class="post-heading">
            
            <div   class="list-group">
      <!-- <div  v-if="currentPost" class="card-body">
        <h4>Post</h4>
         <div class="borderBox">
           <div class="">
         <div class="title h5"> -->
                             <div class="float meta ">
                        <div class="title h5">
                            <a href="#"><b> {{ currentComment.username }} </b></a>
                            made a post.
                        </div>
                        <h6 class="text-muted time">1 minute ago</h6>
                    </div>
                        </div>
        <!-- <label for="description">Description</label> -->
       <div v-if="!editing"> <h5><strong>{{ currentComment.description }}</strong></h5> </div> 
          <textarea-autosize
  placeholder="Type something here..."
  ref="myTextarea"
 
  :min-height="30"
  :max-height="350"
  
 v-else type="text"  class="form-control" id="description" v-model="currentComment.description"/>
         </div>
             <!-- <a href="#commentArea"> <button v-show="!editing"  class="btn btn-primary float-right  marginRightButton "> Comment </button></a> -->
    <button v-if="dataUser.user_Id == currentComment.user_Id" class="btn btn-success float-right" @click="editPost(currentComment)"> {{editing? 'Update':'Modify'}} </button>
     <button v-show="!editing" class="btn btn-secondary mr-2 float-right" @click="$router.go(-1)"> Back </button>
   
    <button v-show="editing" v-if="dataUser.user_Id == currentComment.user_Id" class="btn btn-secondary mr-2 float-right" @click="cancel()"> Cancel </button>
    <button  v-show="editing" v-if="dataUser.user_Id == currentComment.user_Id" class="badge badge-danger mr-2" @click="deleteComment"> Delete </button>


  <!-- <div v-if="currentComment" class="edit-form">
    <h4>Post</h4>
  
      
      <div class="form-group">
       <div v-if="!editing" class="form-group list-group-item"> {{ currentComment.description }} </div> 
          <input v-else type="text" class="form-control" id="description" v-model="currentComment.description"/>
      </div>
      <div class="form-group">
        <label for="">ID</label>
        <input type="text" class="form-control" id=""
          v-model="currentComment.user_Id"
        />
      </div>



    <button v-if="dataUser.user_Id == currentComment.user_Id" class="btn btn-success" @click="editPost(currentComment)"> {{editing? 'Update':'Modify'}} </button>
    <button v-show="editing" v-if="dataUser.user_Id == currentComment.user_Id" class="btn btn-secondary mr-2" @click="cancel()"> Cancel </button>
    <button v-show="editing" v-if="dataUser.user_Id == currentComment.user_Id" class="badge badge-danger mr-2" @click="deleteComment"> Delete </button>
     <div>   <input  type="text" v-model="comments.description"> {{comments.description}} </div>
     <button  @click="saveComment" class="btn btn-primary"> Comment </button>



    <div v-for="comment in comments" :key="comment.id">  <div v-if="currentComment.id == comment.post_id" class="form-group list-group-item"> {{ comment.description }} </div> </div>
    
   
    
     <div v-if="currentComment.id == comment.post_id" class="form-group list-group-item"> {{ comment.description }} {{ currentComment.id }} </div>  -->

   
  
  </div>
 </div>
      </div>
    </div>
 </div>

  
</template>

<script>
import PostCommentService from "../services/PostCommentService";
// import PostDataService from "../services/PostDataService";
import CommentPostService from "../services/CommentPostService";
// import TextareaAutosize from 'vue-textarea-autosize'
// Vue.use(TextareaAutosize)

export default {
  name: "post",
  data() {
    return {

         comments:[],
        currentComment: null,
        currentIndex: -1,         
        message: '',
      comment: {
      
        
        id: null,
        post_id: "",
        // title: "",
        description: "",
        user_Id: "",
        username: "",
        published: false
      },
       
      
    
      currentPost: null,
    
      editing: false,
      
    };
  },
  methods: {

    saveComment() {
      //  if (!this.comment.description) {
      //     // this.emptyError = this.emptyError == true?false:true
      //     this.emptyError = alert('Cannot be empty')
          
      //  error => {
           
      //         this.message =
      //           (error.response && error.response.data)
      // }}else{ 
     
      let dataUser = JSON.parse(localStorage.getItem("user"))
      console.log(dataUser)
      // this.user = response.data1;
      var data = {
       
        // title: this.post.title,
        description: this.comments.description,
        user_Id : dataUser.user_Id,
        username : dataUser.username,
        post_id : this.currentPost.id,
        id: this.comments.id,
        
      
        
      }
      // }
     
    

      PostCommentService.create(data)
        .then(response => {
          this.comment.id = response.data.id;
          // this.user_Id = 
          // this.username
          console.log(response.data);
          this.submitted = true;
          // this.comments.push(data)
          //  this.retrieveComments();
          // this.newComment()
        })
        .catch(e => {
          console.log(e);
        });
    },
  //       content(){
    
  // this.comment = this.comment == true?false:true
    
  //   console.log(this.comment)
    

  

  //   },
     getComment() {
      PostCommentService.getAll()
        .then(response => {
          this.comments = response.data;
          console.log(response.data);
        
        })
        .catch(e => {
          console.log(e);
        });
    },

    getCommentId(id) {
      PostCommentService.get(id)
        .then(response => {
          this.currentComment = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    // updatePublished(status) {
    //   var data = {
    //     id: this.currentPost.id,
    //     title: this.currentPost.title,
    //     description: this.currentPost.description,
    //      user_Id: this.currentPost.user_Id,
    //     published: status
    //   };

    //   PostDataService.update(this.currentPost.id, data)
    //     .then(response => {
    //       this.currentPost.published = status;
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },

    cancel(){
       this.editing = this.editing == false
    },

     cancelled(){
       this.$router.push({ name: "posts" });

    },

     editPost(){
    
    this.editing = this.editing == true?false:true
    
    if(this.editing== false){
    this.updateComment()
    }  
    
    console.log(this.editing)
    

  

    },

    updateComment() {
      PostCommentService.update(this.currentComment.id, this.currentComment)
        .then(response => {
          console.log(response.data);
          this.message = 'The post was updated successfully!';
          this.$router.push({ name: "posts" });
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteComment() {
      CommentPostService.deletePostComment(this.currentComment.id)

    //   PostDataService.delete(this.currentComment.id)
     
      
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "posts" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    // this.getPost(this.$route.params.id);
    this.getCommentId(this.$route.params.id);
  },
   computed: {
    dataUser(){  return JSON.parse(localStorage.getItem("user"))
    // currentUser() {
    //   return this.$store.state.auth.user;
   }
   },
};
</script>

<style>
.comment {
    width: 80%;
    overflow: hidden;
    border: 0.1vw solid grey;
     margin-bottom: 30px;
      margin-left: 100px;
    /* margin: 0 0 1em; */
    /* *zoom: 1; */
} 

.aPost {
    width: 100%;
    min-height: px;
    overflow: hidden;
    border: 0.1vw solid white;
     margin-bottom: 30px;
      /* margin-left: 100px; */
    /* margin: 0 0 1em; */
    /* *zoom: 1; */
} 

.postBox {
   
    /* overflow: hidden; */
    border: 0.1vw solid grey;
     margin-bottom: 30px;
      /* margin-left: 100px; */
    /* margin: 0 0 1em; */
    /* *zoom: 1; */
} 
.list-group{
  border:white;
}
.list-group-item{
    border:white;
}
li{
   border:white

}



/* .borderBox{
  border: 0.1vw solid grey;
  border-radius: 1%;
} */

.textBox{
   width: 100%;
}
.gedf-main{
  /* margin-top: 15px; */
   margin-bottom: 200px;
  
   box-shadow: 10px 7px 10px black;

}
.marginBottomButton{
  margin-bottom: 30px;
   margin-right: 15px;
}
.marginRightButton{
 
  margin-bottom: 30px;
}

#description{
  margin-bottom: 15px;
}

</style>
