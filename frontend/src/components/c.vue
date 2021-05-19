<template>
 <div class="container-fluid">
    <div class="row h-100 justify-content-center align-items-center">
    
     
      <div class="col-md-6 gedf-main card">
     
    
    <!-- <form> -->
      <!-- <div class="card-body">
                  <div class="float meta ">
                        <div class="title h5">
                            <a href="#"><b> {{ post.username }} </b></a>
                            made a post.
                        </div>
                        <h6 class="text-muted time">1 minute ago</h6>
                    </div>
            
              <div class="card aPost rounded card-white"> <h5><strong>{{ post.description }}</strong></h5></div> 
              <div class="">
                <div class="post-heading">
                   <div class="float meta">
                        <div class="title h5">
              <div  v-for="comment in comments" :key="comment.id"> <div class="comment card rounded card-white" v-if="post.id == comment.post_id"> 
                        
                    
                        <div class="list-group-item"> <a href="#"><b> {{ comment.username }} </b></a> <span> made a comment </span>  <h6 class="text-muted time">1 minute ago</h6> <div>{{ comment.description }} </div></div>    </div></div></div> 

                        </div>
              </div>
              </div>
                 <div v-if="!editing"> {{ post.description }} </div>    -->
                 
                <!-- <input v-else type="text" class="form-control" id="" v-model="post.description"/>  -->
             
                <!-- <input type="text" class="form-control" id="" v-model="post.user_Id"/><br> -->
                <!-- <a :href="'/posts/' + post.id"><button class="btn btn-primary"> Comment </button></a> -->
              <!-- </div> -->
       <div v-if="currentPost" class="card-body">
          <h4>Post</h4>
            <div class="jk">
                <div class="post-heading">
            
            <div   class="list-group">
      <!-- <div  v-if="currentPost" class="card-body">
        <h4>Post</h4>
         <div class="borderBox">
           <div class="">
         <div class="title h5"> -->
                             <div class="float meta ">
                        <div class="title h5">
                            <a href="#"><b> {{ currentPost.username }} </b></a>
                            made a post.
                        </div>
                        <h6 class="text-muted time">1 minute ago</h6>
                    </div>
                        </div>
        <!-- <label for="description">Description</label> -->
       <div class="kl" v-if="!editing"> <h5 class="postCard"><strong>{{ currentPost.description }}</strong></h5> </div> 
           <textarea-autosize
  placeholder="Type something here..."
  ref="myTextarea"
 
  :min-height="30"
  :max-height="350"
   v-else type="text"   class="form-control" id="description" v-model="currentPost.description"/>
      <div class="form-group">
                    <div class="custom-file">
                        <input  type="file" ref="file" @change="onSelect" class="" id="">
                        <label class=""></label>
                 
                </div>
                <div class="py-3"></div>
              </div>
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
   
    <a href="#commentArea"> <button v-show="!editing"  class="btn btn-primary float-right buttonCEC"> Comment </button></a>
    <button v-if="dataUser.user_Id == currentPost.user_Id" class="btn btn-success float-right buttonCEC" @click="editPost(currentPost)"> {{editing? 'Update':'Edit'}} </button>
     <button v-show="!editing" class="btn btn-secondary mr-2 float-right" @click="uploadImage" type="submit"> updateImage </button>
     <button v-show="!editing" class="btn btn-secondary mr-2 float-right" @click="cancelled()"> Back </button>
     
    <button v-show="editing" v-if="dataUser.user_Id == currentPost.user_Id"  id="btnC" class="btn btn-secondary mr-2 float-right marginRightButton" @click="cancel()"> Cancel </button>
    <button v-show="editing" v-if="dataUser.user_Id == currentPost.user_Id" class="badge badge-danger mr-2" @click="deletePost"> Delete </button>
    
     
     


       <div class="post-heading">
                   <div class="float meta">
                        <div class="title h5">
     <div class="" v-show="!editing">



    <!-- <a href="#"><b> {{ comment.username }} </b></a> <span> made a comment </span>  <h6 class="text-muted time">1 minute ago</h6> <div>{{ comment.description }} </div> -->
    


    
    <div v-for="comment in comments" :key="comment.id">  
      <div v-if="currentPost.id == comment.post_id" class="comment card rounded card-white"> <div class="list-group-item">
        <a href="#"><b> {{ comment.username }} </b></a> <span> made a comment </span>  <h6 class="text-muted time">1 minute ago</h6> <div>{{ comment.description }} </div>
    <a :href="'/comments/' + comment.id"><button v-if="dataUser.user_Id == comment.user_Id" class="btn btn-success float-right"> Edit </button></a></div></div>
    </div>
     
      <div class="postCard" id="commentArea">        <textarea-autosize
  placeholder="Type something here..."
  ref="myTextarea"
 
  :min-height="30"
  :max-height="350"
   type="text"   class="form-control" id="description" autofocus v-model="comments.description"/></div>
      
     <button  @click="saveComment" class="btn btn-primary float-right"> Share </button>
       <button class="btn btn-secondary mr-2 float-right" @click="cancelled()"> Cancel </button>
                        </div>
                   </div></div></div>
    
   
   
    
      <!-- <div v-if="currentPost.id == comment.post_id" class="form-group list-group-item"> {{ comment.description }} </div>   -->

   
    <!-- <button type="submit" class="badge badge-success"
      @click="updatePost"
    >
      Update
    </button> -->
    <p>{{ message }}</p>
         </div>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Post...</p>
  </div>
  </div>
</div>
 </div>

  
</template>

<script>
import PostCommentService from "../services/PostCommentService";
import PostDataService from "../services/PostDataService";
import UpLoadFilesService from '../services/UpLoadFilesService';
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

      uploadImage() {
        // let dataUser = JSON.parse(localStorage.getItem("user"))
      const formData = new FormData();
      // if (this.image !== null || "") {
        formData.append("file", this.currentPost.imageUrl, this.currentPost.imageUrl.name);
        // formData.append("user_Id", dataUser.user_Id );
        // formData.append("username", dataUser.username,);
        // //    user_Id : dataUser.user_Id,
        // // username : dataUser.username,
        // formData.append("description", this.post.description);
        UpLoadFilesService.update(this.currentPost.id, formData)
   
    //  }
     },

      onSelect(e){

       
      // const file = e.target.files[0];
      // this.post.imageUrl = URL.createObjectURL(file);
     
      const file = this.$refs.file.files[0];
      this.currentPost.imageUrl = file;
      console.log(e)
      console.log(this.currentPost.imageUrl)
        
    },

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
        
      
        
      // }
      }
     
    

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
      //   if (this.comment.description) {
      //     // this.emptyError = this.emptyError == true?false:true
      //     this.emptyError = alert('Cannot be empty')
      //     this.editPost()
          
      //  error => {
           
      //         this.message =
      //           (error.response && error.response.data)
           
      // }}else{ 
       this.editing = this.editing == false
      // }
    },

     editPost(){
    
    this.editing = this.editing == true?false:true
    
    if(this.editing == true && this.comment.description){
    this.updatePost()
    } 
    // else { 

    //       this.emptyError = alert('Cannot be empty')
          
    //    error => {
           
    //           this.message =
    //             (error.response && error.response.data)
    
    // console.log(this.editing)
    
      //  }
  
    // }
    },

    cancelled(){
       this.$router.push({ name: "posts" });

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

    // updatePost() {
    //   //    if (!this.comment.description) {
    //   //     // this.emptyError = this.emptyError == true?false:true
    //   //     this.emptyError = alert('Cannot be empty')
    //   //     this.editPost()
          
    //   //  error => {
           
    //   //         this.message =
    //   //           (error.response && error.response.data)
           
    //   // }}else{ 

    //   PostDataService.update(this.currentPost.id, this.currentPost)
    //     .then(response => {
    //       console.log(response.data);
    //       this.message = 'The post was updated successfully!';
    //       this.$router.push({ name: "posts" });
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    //   // }
    // },

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
  margin-top: 15px;
   margin-bottom: 15px;
}

.marginRightButton{
 
  margin-right: 30px;
}
.marginLeftButton{
  margin-left: 8px;
}

.postCard{
  /* margin-top: 30px; */
  margin-bottom: 30px;
}
.buttonCEC{
  margin-right:8px;
  margin-bottom: 30px;
}
#description{
  margin-bottom: 30px;
}
#btnC{
  margin-right: 50px;
}

</style>
