

<template>
  <div class="container-fluid">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-md-6 gedf-main">
        <div class="card gedf-card d-flex " v-if="!submitted">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make a publication</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" id="images-tab" data-toggle="tab" role="tab" aria-controls="images" aria-selected="false" href="#images">Images</a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                <div class="form-group">
                  <label class="sr-only" for="message">post</label>
                  <!-- <input v-show="!editing" type="text" class="form-control" id="" v-model="username"/>  -->
                    <textarea 
                    id="description"
                    required
                    v-model="comment.description" class="form-control" rows="3" placeholder="What are you thinking?"></textarea>
                </div>
              </div>
              <div class="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
                <div class="form-group">
                    <div class="custom-file">
                        <input  type="file" class="custom-file-input" id="customFile">
                        <label class="custom-file-label" for="customFile">Upload image</label>
                    </div>
                </div>
                <div class="py-4"></div>
              </div>
            </div>
            <div class="btn-toolbar justify-content-between">
              <div class="btn-group">
                  <button @click="saveComment" type="submit" class="btn btn-primary">Share</button>
              </div>
            </div>
          </div>
          <div>
            <div v-if="!emptyError"></div>
          </div>
        </div>
        <div class="list row">
          <div class="col-md-6">
            <h4>Posts</h4>
            <ul class="list-group">
               
                <li class="list-group-item"
                @dblclick="editComment(index, comment)"
                v-for="(comment, index) in comments.slice().reverse()"
                :key="comment.id"
                @click="setActiveComment(comment)"
                :class="{ active: comment == currentComment}"
               
              > <div> {{ comment.description }} </div> 
              <div> Posted by {{ comment.username }} </div> 
             
              
                <!-- <div v-if="!editing"> {{ post.description }} </div>    -->
                 
                <!-- <input v-else type="text" class="form-control" id="" v-model="post.description"/>  -->
             
                <input type="text" class="form-control" id="" v-model="comment.user_Id"/><br>
                <a :href="'/posts/' + comment.id"><button class="btn btn-primary"> Comment </button></a>
              </li>
            </ul>
                <!-- <a v-if="currentUser.id == post.user_Id" class="badge badge-warning" @click="editPost(index, post)"> {{editing?'Update':'Edit'}} </a> -->
                <!-- <button v-show="editing" v-if="currentUser.id == post.user_Id" class="badge badge-danger mr-2" @click="deletePost(index)"> Delete </button>
                <button v-show="editing" v-if="currentUser.id == post.user_Id" class="badge badge-success mr-2" @click="cancel(index)"> Cancel </button> -->
               
             
          </div>
        </div>
        <button v-if="showAdminBoard" class="m-3 btn btn-sm btn-danger" @click="removeAllComments"> Remove All </button> 
      </div>
    </div>
  </div>
</template>
       
                    
              
 
       
        
     
    


<script>
import PostCommentService from "../services/PostCommentService";

export default {
  name: "comment",
  data() {
    return {
      comments:[],
        currentComment: null,
        currentIndex: -1,         
        message: '',
      comment: {
      
        
        id: null,
        post_Id: "",
        // title: "",
        description: "",
        user_Id: "",
        username: "",
        published: false
      },

      // comments:[],
      
      //   id:null,
      //  content:"",
      //   user_Id:"",
        // username:""

      
      

      submitted: false,
      selectedIndex: null,
      editing: false,
      emptyError: false
    };
    
  },
  // props:{
  //   user_Id : Array
  // },
  computed: {

  //     orderPost: function () {
  //   return _.orderBy(this.post, 'date')
  // },

    dataUser(){  return JSON.parse(localStorage.getItem("user"))
    },

    currentUser() {
      return this.$store.state.auth.user;
     
    },
        showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }

      return false;
    }
  },

 
  methods: {

    cancel(){
       this.editing = this.editing == false
    },

    editComment(){
    
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
          
        
          // this.posts.push(data)
          // this.$router.push({ name: "posts" });
        })
        .catch(e => {
          console.log(e);
        });
      
     
    },

      deleteComment() {
     
    
      PostCommentService.delete(this.currentComment.id)
        .then(response => {
          console.log(response.data);
          this.retrieveComments();
          // this.$router.push({ name: "posts" });
        })
        .catch(e => {
          console.log(e);
        });
       
        // this.posts.splice(index,1)
        
    },

        retrieveComments() {
      PostCommentService.getAll()
        .then(response => {
          this.comments = response.data;
          console.log(response.data);
        })
        
        .catch(e => {
          console.log(e);
        });
    },

      refreshList() {
      this.retrieveComments();
      this.currentComment = null;
      this.currentIndex = -1;
    },

    setActiveComment(comment, index) {
      // this.post.id == post.id
      this.currentComment = comment;
      this.currentIndex = index;
      
      console.log(comment.id)
   
      
    },

        removeAllComments() {
      PostCommentService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      PostCommentService.findByTitle(this.title)
        .then(response => {
          this.comments = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
   
    saveComment() {
       if (!this.comment.description) {
          // this.emptyError = this.emptyError == true?false:true
          this.emptyError = alert('Cannot be empty')
          
       error => {
           
              this.message =
                (error.response && error.response.data)
      }}else{ 
     
      let dataUser = JSON.parse(localStorage.getItem("user"))
      console.log(dataUser)
      // this.user = response.data1;
      var data = {
       
        // title: this.post.title,
        description: this.comment.description,
        user_Id : dataUser.id,
        username : dataUser.username,
        
      
        
      }}
     
    

      PostCommentService.create(data)
        .then(response => {
          this.comment.id = response.data.id;
          // this.user_Id = 
          this.username
          console.log(response.data);
          this.submitted = true;
          this.comments.push(data)
           this.retrieveComments();
          this.newComment()
        })
        .catch(e => {
          console.log(e);
        });
    },

  
    
    newComment() {
      this.submitted = false;
      this.comment = {};
    },

      logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  },

   retrieveComments() {
      PostCommentService.getAll()
        .then(response => {
          this.comments = response.data;
          console.log(response.data);
        
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    mounted() {
    this.retrieveComments();
  }
  
  
}

</script>

<style>


</style>
