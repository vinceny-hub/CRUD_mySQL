<template>
 <div class="container-fluid">
        <div class="row h-100 justify-content-center align-items-center">
           <div class="col-md-6 gedf-main">
        
                <div class="card gedf-card d-flex ">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make
                                    a publication</a>
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
                                   <textarea
          class="form-control"
          id="description"
          
          v-model="post.description"
        

          name="description"
          rows="5"
          maxlength="155"
        />
                                </div>

                            </div>
                            
                            <!-- <div class="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
                                <div class="form-group">
                                    <div class="custom-file">
                                        <input  type="file" class="custom-file-input" id="customFile">
                                        <label class="custom-file-label" for="customFile">Upload image</label>
                                    </div>
                                </div>
                                <div class="py-4"></div>
                            </div> -->
                        </div>
                        <div class="btn-toolbar justify-content-between">
                            <div class="btn-group">
                                <!-- <button @click="newPost"  class="btn btn-primary">share</button> -->
                                <button @click="savePost" class="btn btn-primary">Share</button>
                            </div>
    
                            
                            <div class="btn-group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i class="fa fa-globe"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                                    <a class="dropdown-item" href="#"><i class="fa fa-globe"></i> Public</a>
                                    <a class="dropdown-item" href="#"><i class="fa fa-users"></i> Friends</a>
                                    <a class="dropdown-item" href="#"><i class="fa fa-user"></i> Just me</a>
                                </div>
                            </div>
                        </div>
                    </div>
  <!-- <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group"> -->
        <!-- <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="post.title"
          name="title"
          maxlength="30"
        />
      </div> -->

      <!-- <div class="form-group">
        <label for="description">Description</label>
        <textarea
          class="form-control"
          id="description"
          required
          v-model="post.description"
        

          name="description"
          rows="5"
          maxlength="155"
        />
      </div> -->
         <!-- <div class="form-group">
        <label for="user_Id">ID</label>
        <textarea
          class="form-control"
          id="user_Id"
          required
          v-model="post.user_Id"
          
        

          
          rows="1"
          maxlength="155"
        />
      </div> -->

      <!-- <button @click="savePost" class="btn btn-success">Submit</button> -->
    <!-- </div> -->

    <!-- <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newPost">Add</button>
    </div> -->
   
  </div>
    </div>
  </div>
 </div>
 
 
</template>

<script>

import PostDataService from "../services/PostDataService";
// import currentUser from "../views/Profile"

// console.log(user_Id)
export default {
  name: "add-post",
  data() {
    return {
      post: {
        id: null,
        title: "",
        description: "",
        user_Id: "",
        published: false
      },
      submitted: false
    };
    
  },
  // props:{
  //   user_Id : Array
  // },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },

 
  methods: {
   
    savePost() {
      let dataUser = JSON.parse(localStorage.getItem("user"))
      console.log(dataUser)
      // this.user = response.data1;
      var data = {
       
        title: this.post.title,
        description: this.post.description,
        user_Id : dataUser.id,
        
      };
    

      PostDataService.create(data)
        .then(response => {
          this.post.id = response.data.id;
          // this.user_Id = 
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

  
    
    newPost() {
      this.submitted = false;
      this.post = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
