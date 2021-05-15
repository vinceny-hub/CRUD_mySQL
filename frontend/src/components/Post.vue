<template>
  <div v-if="currentPost" class="edit-form">
    <h4>Post</h4>
    <!-- <form> -->
      
      <div class="form-group">
        <!-- <label for="description">Description</label> -->
       <div v-if="!editing" class="form-group list-group-item"> {{ currentPost.description }} </div> 
          <input v-else type="text" class="form-control" id="description" v-model="currentPost.description"/>
      </div>
      <div class="form-group">
        <label for="">ID</label>
        <input type="text" class="form-control" id=""
          v-model="currentPost.user_Id"
        />
      </div>

      <!-- <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentPost.published ? "Published" : "Pending" }}
      </div>
    </form> -->

    <!-- <button class="badge badge-primary mr-2"
      v-if="currentPost.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button> -->
     <!-- <button v-show="editing" v-if="currentUser.id == post.user_Id" class="badge badge-danger mr-2" @click="deletePost(index)"> Delete </button> -->
    <button v-if="dataUser.id == currentPost.user_Id" class="btn btn-success" @click="editPost(currentPost)"> {{editing? 'Update':'Modify'}} </button>
    <button v-show="editing" v-if="dataUser.id == currentPost.user_Id" class="btn btn-secondary mr-2" @click="cancel()"> Cancel </button>
    <button v-show="editing" v-if="dataUser.id == currentPost.user_Id" class="badge badge-danger mr-2" @click="deletePost"> Delete </button>
     <div>   <input  type="text" v-model="comments.description"> {{comments.description}} </div>
     <button  @click="saveComment" class="btn btn-primary"> Comment </button>
    <div v-for="comment in comments" :key="comment.id">  <div v-if="currentPost.id == comment.post_id" class="form-group list-group-item"> {{ comment.description }} </div> 
    <a :href="'/comments/' + comment.id"><button v-if="dataUser.id == comment.user_Id" class="btn btn-success"> Modify </button></a>
    </div>
    
   
    
      <!-- <div v-if="currentPost.id == comment.post_id" class="form-group list-group-item"> {{ comment.description }} </div>   -->

   
    <!-- <button type="submit" class="badge badge-success"
      @click="updatePost"
    >
      Update
    </button> -->
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Post...</p>
  </div>
</template>

<script>
import PostCommentService from "../services/PostCommentService";
import PostDataService from "../services/PostDataService";

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
        user_Id : dataUser.id,
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
          this.message = 'The post was updated successfully!';
          this.$router.push({ name: "posts" });
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

    getPost(id) {
      PostDataService.get(id)
        .then(response => {
          this.currentPost = response.data;
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

     editPost(){
    
    this.editing = this.editing == true?false:true
    
    if(this.editing== false){
    this.updatePost()
    }  
    
    console.log(this.editing)
    

  

    },

    updatePost() {
      PostDataService.update(this.currentPost.id, this.currentPost)
        .then(response => {
          console.log(response.data);
          this.message = 'The post was updated successfully!';
          this.$router.push({ name: "posts" });
        })
        .catch(e => {
          console.log(e);
        });
    },

    deletePost() {
      PostCommentService.delete(this.currentPost.id)
      PostDataService.delete(this.currentPost.id)
     
      
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
    this.getPost(this.$route.params.id);
    this.getComment();
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
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
