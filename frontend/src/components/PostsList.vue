
<!--eslint-disable no-mixed-spaces-and-tabs 
<template>
    <div class="container-fluid gedf-wrapper">
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body">
                        <div class="h5">@LeeCross</div>
                        <div class="h7 text-muted">Fullname : Miracles Lee Cross</div>
                        <div class="h7">Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js,
                            etc.
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="h6 text-muted">Followers</div>
                            <div class="h5">5.2342</div>
                        </li>
                        <li class="list-group-item">
                            <div class="h6 text-muted">Following</div>
                            <div class="h5">6758</div>
                        </li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 gedf-main">

              
                <div class="card gedf-card">
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
                                    <textarea class="form-control" id="message" rows="3" placeholder="What are you thinking?"></textarea>
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
                                <button type="submit" class="btn btn-primary">share</button>
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
                </div>
             
                <div class="card gedf-card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="mr-2">
                                    <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="">
                                </div>
                                <div class="ml-2">
                                    <div class="h5 m-0">@LeeCross</div>
                                    <div class="h7 text-muted">Miracles Lee Cross</div>
                                </div>
                            </div>
                            <div>
                                <div class="dropdown">
                                    <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                        <div class="h6 dropdown-header">Configuration</div>
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Hide</a>
                                        <a class="dropdown-item" href="#">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="card-body">
                        <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div>
                        <a class="card-link" href="#">
                            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
                        </a>

                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
                            sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
                        </p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                        <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                        <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
                    </div>
                </div>
        
                <div class="card gedf-card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="mr-2">
                                    <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="">
                                </div>
                                <div class="ml-2">
                                    <div class="h5 m-0">@LeeCross</div>
                                    <div class="h7 text-muted">Miracles Lee Cross</div>
                                </div>
                            </div>
                            <div>
                                <div class="dropdown">
                                    <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                        <div class="h6 dropdown-header">Configuration</div>
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Hide</a>
                                        <a class="dropdown-item" href="#">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="card-body">
                        <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i> 10 min ago</div>
                        <a class="card-link" href="#">
                            <h5 class="card-title"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur
                                deserunt illo esse distinctio.</h5>
                        </a>

                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis nihil, aliquam est, voluptates officiis iure soluta
                            alias vel odit, placeat reiciendis ut libero! Quas aliquid natus cumque quae repellendus. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Ipsa, excepturi. Doloremque, reprehenderit!
                            Quos in maiores, soluta doloremque molestiae reiciendis libero expedita assumenda fuga quae.
                            Consectetur id molestias itaque facere? Hic!
                        </p>
                        <div>
                            <span class="badge badge-primary">JavaScript</span>
                            <span class="badge badge-primary">Android</span>
                            <span class="badge badge-primary">PHP</span>
                            <span class="badge badge-primary">Node.js</span>
                            <span class="badge badge-primary">Ruby</span>
                            <span class="badge badge-primary">Paython</span>
                        </div>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                        <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                        <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
                    </div>
                </div>
             
                <div class="card gedf-card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="mr-2">
                                    <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="">
                                </div>
                                <div class="ml-2">
                                    <div class="h5 m-0">@LeeCross</div>
                                    <div class="h7 text-muted">Miracles Lee Cross</div>
                                </div>
                            </div>
                            <div>
                                <div class="dropdown">
                                    <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                        <div class="h6 dropdown-header">Configuration</div>
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Hide</a>
                                        <a class="dropdown-item" href="#">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="card-body">
                        <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i> Hace 40 min</div>
                        <a class="card-link" href="#">
                            <h5 class="card-title">Totam non adipisci hic! Possimus ducimus amet, dolores illo ipsum quos
                                cum.</h5>
                        </a>

                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt fugit reprehenderit consectetur exercitationem odio,
                            quam nobis? Officiis, similique, harum voluptate, facilis voluptas pariatur dolorum tempora sapiente
                            eius maxime quaerat.
                            <a href="https://mega.nz/#!1J01nRIb!lMZ4B_DR2UWi9SRQK5TTzU1PmQpDtbZkMZjAIbv97hU" target="_blank">https://mega.nz/#!1J01nRIb!lMZ4B_DR2UWi9SRQK5TTzU1PmQpDtbZkMZjAIbv97hU</a>
                        </p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                        <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                        <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
                    </div>
                </div>
       

      



            </div> 
            <div class="col-md-3">
                <div class="card gedf-card">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
                <div class="card gedf-card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
            </div>
        </div>
    </div>


       \\\\\\\Post-->
      
<template>
  <div class="container-fluid">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-md-8 gedf-main">
        <div class="card gedf-card d-flex " v-if="!submitted">
          <div class="box-header-body-input">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
              <li class="nav-item"
               >
                <a v-on:click="isHidden = true" class="nav-link active"    id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make a publication</a>
              </li>
              <li class="nav-item">
                  <a  v-on:click="isHidden = false" class="nav-link" id="images-tab" data-toggle="tab" role="tab" aria-controls="images" aria-selected="false" href="#images"> Images </a>
              </li>
            </ul>
          </div>
          <div class="card-body card-input">
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                <div class="form-group">
                  <label class="sr-only" for="message">post</label>
            
                         <textarea-autosize
                          
                          ref="myTextarea"
                        
                          :min-height="75"
                          :max-height="350"
                          type="text"   class="form-control" id="description"
                  
                    required
                    v-model="post.description" autofocus  placeholder="What are you thinking?"/>
                </div>
              </div>
              <div class="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
                <div class="form-group">
                    <div class="custom-file">
                        <input  type="file" ref="file" @change="onSelect" class="" id="">
                        <label class=""></label>
                 
                </div>
                <div class="py-3"></div>
              </div>
            </div>
            <div class="">
              <div class="">
                 <div>   <img class="card-img-post" src="../img/icon-left-font-sized.png" alt="">
                  <button @click="savePost" type="submit" class="btn btn-primary float-right" v-show="isHidden">Share</button>
                  <button @click="uploadImage" type="submit" class="btn btn-success float-right" v-show="!isHidden">Upload</button> 
                 </div>
              </div>
            </div>
          </div>
          <div>
            <div v-if="!emptyError"></div>
          </div>
        </div> 
        </div>
        </div>

      <!-- <form
      @submit.prevent="submit"
      enctype="multipart/form-data"
      class="largeur80 my-5 shadow bordurePost bordureRond"
    >
 
     
      <div class="form-group">
        <label class="text-primary" for="description">Description</label>
        <textarea
          class="form-control"
          name="description"
          rows="3"
          placeholder="Décrire le post..."
          v-model="post.description"
        ></textarea>
      </div>
     
      <div class="form-group">
        <label class="text-primary" for="image_link"
          >Ajouter une image ou multimedia</label
        >
        <input type="file" ref="imageUrl" class="file-input" @change="upload" />
      </div>
      
      <div
        class="error"
        v-if="!$v.image_link.required && submitStatus === 'ERROR'"
      >
        Field is required
      </div>
    
      <div
        class="form-group row d-flex align-item-center justify-content-center"
      >
        <div class="col-sm-10 ">
          <button
            type="submit"
            class="bg-light btn btn-outline-primary"
           
          >
            Publier !
          </button>
         
        
        
        </div>
      </div>
    </form> -->





        <!-- <div class="container"> -->
    <!-- <div class="row"> -->
        <div class="">
          
          <div class="d-inline-flex p-2"> <img class="title-img" src="../img/icon.png" alt=""><h4 class="title-pos">Posts</h4></div>
            <div class="">
                <div class="post-heading">
            
            <ul class="list-group">
                <!-- @click="setActivePost(post)"
                :class="{ active: post == currentPost}" -->
                <li class="card rounded card-white postBox"
                @dblclick="editPost(index, post)"
                v-for="(post, index) in posts.slice().reverse()"
                :key="post.id"
               
               
              > 
              <div class="card-body">
                  <div class="float meta ">
                        <div class="title h5">
                            <a  :href="'/profile/' + post.id"><b> {{ post.username }} </b></a> 
                             made a post.
                        </div>
                        <h6 class="text-muted time">1 minute ago</h6>
                    </div>
            
              <div class="card aPost rounded card-white"> <h5><strong>{{ post.description }}</strong></h5><img :src="post.imageUrl"></div> 
              <div class="">
                <div class="post-heading">
                   <div class="float meta">
                        <div class="title h5">
              <div  v-for="comment in comments" :key="comment.id"> <div class="comment float-right card rounded card-white" v-if="post.id == comment.post_id"> 
                        
                    
                        <div class="list-group-item">  <div class="title h5"> <a href="#"><b> {{ comment.username }} </b></a>  made a comment </div>  <h6 class="text-muted time">1 minute ago</h6> <div>{{ comment.description }} </div></div>    </div></div></div> 

                        </div>
              </div>
             
              </div>
                <!-- <div v-if="!editing"> {{ post.description }} </div>    -->
                 
                <!-- <input v-else type="text" class="form-control" id="" v-model="post.description"/>  -->
             
                <!-- <input type="text" class="form-control" id="" v-model="post.user_Id"/><br> -->
                <div>   <img class="card-img" src="../img/icon-left-font-sized.png" alt="">
                <a :href="'/posts/' + post.id"><button  href="#top" class="btn btn-outline pink float-right float-bottom"> Comment </button></a>
                </div>
              </div>
             
              </li>
            </ul>
                <!-- <a v-if="currentUser.id == post.user_Id" class="badge badge-warning" @click="editPost(index, post)"> {{editing?'Update':'Edit'}} </a> -->
                <!-- <button v-show="editing" v-if="currentUser.id == post.user_Id" class="badge badge-danger mr-2" @click="deletePost(index)"> Delete </button>
                <button v-show="editing" v-if="currentUser.id == post.user_Id" class="badge badge-success mr-2" @click="cancel(index)"> Cancel </button> -->
               
             
          </div>
        </div>
        <button v-if="showAdminBoard" class="m-3 btn btn-sm btn-danger" @click="removeAllPosts"> Remove All </button> 
      </div>
    </div>
        </div>
      <!-- </div> -->
    <!-- </div> -->
    <!-- <div class="container">
    <div class="row">
        <div class="col-8">
            <div class="card card-white post">
                <div class="post-heading">
                    <div class="float-left image">
                        <img src="http://bootdey.com/img/Content/user_1.jpg" class="img-circle avatar" alt="user profile image">
                    </div>
                    <div class="float-left meta">
                        <div class="title h5">
                            <a href="#"><b>Ryan Haywood</b></a>
                            made a post.
                        </div>
                        <h6 class="text-muted time">1 minute ago</h6>
                    </div>
                </div> 
                <div class="post-description"> 
                    <p>Bootdey is a gallery of free snippets resources templates and utilities for bootstrap css hmtl js framework. Codes for developers and web designers</p>

                </div>
            </div>
        </div>
        
    </div>
</div> -->

 <!-- <div id="">
  <input type="file" @change="onFileChange" />
 </div>
  <div id="preview">
    <img v-if="imageUrl" :src="url" />
  </div>
</div> -->
   
  </div>

  
</template>
       
                    
              
 
       
        
     
    


<script>
import PostDataService from "../services/PostDataService";
import PostCommentService from "../services/PostCommentService";
import UpLoadFilesService from '../services/UpLoadFilesService';

export default {
  name: "post-list",
  data() {
    return {
      posts:[],
        currentPost: null,
        currentIndex: -1,         
        message: '',
      post: {
      
        
        id: null,
        // title: "",
        description: "",
        user_Id: "",
        username: "",
        published: false,
        imageUrl: "",
      },
      currentComment:"",
      comments:[],
      comment: {
      
        
        id: null,
        // title: "",
        description: "",
        user_Id: "",
        username: "",
        published: false
      },

      isHidden:true,
      //   id:null,
      //  content:"",
      //   user_Id:"",
        // username:""

      
      file:"",

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

    upload(e) {
      // this.post.imageUrl = this.$refs.imageUrl.files[0];
      this.post.imageUrl = e.target.files[0];
      console.log(this.post.imageUrl);
    },

     uploadImage() {
        let dataUser = JSON.parse(localStorage.getItem("user"))
      const formData = new FormData();
      // if (this.image !== null || "") {
        formData.append("file", this.post.imageUrl, this.post.imageUrl.name);
        formData.append("user_Id", dataUser.user_Id );
        formData.append("username", dataUser.username,);
        //    user_Id : dataUser.user_Id,
        // username : dataUser.username,
        // formData.append("description", this.post.description);
        UpLoadFilesService.upload(formData)
   
    //  }
     },
    onSelect(e){

       
      // const file = e.target.files[0];
      // this.post.imageUrl = URL.createObjectURL(file);
     
      const file = this.$refs.file.files[0];
      this.post.imageUrl = file;
      console.log(e)
      console.log(this.post.imageUrl)
        
    },

    // uploadImage(){
    //     this.savePost()

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

        getComment() {
      PostCommentService.getAll()
        .then(response => {
          
          this.comments = response.data;
          console.log(response.data);
            console.log(this.comments);
        })
        .catch(e => {
          console.log(e);
        });
    },

     

      updatePost() {
      PostDataService.update(this.currentPost.id, this.currentPost)
        .then(response => {
           
          console.log(response.data);
          
        
          // this.posts.push(data)
          // this.$router.push({ name: "posts" });
        })
        .catch(e => {
          console.log(e);
        });
      
     
    },

      deletePost() {
     
    
      PostDataService.delete(this.currentPost.id)
        .then(response => {
          console.log(response.data);
          this.retrievePosts();
          // this.$router.push({ name: "posts" });
        })
        .catch(e => {
          console.log(e);
        });
       
        // this.posts.splice(index,1)
        
    },

        retrievePosts() {
      PostDataService.getAll()
        .then(response => {
          this.posts = response.data;
          console.log(response.data);
        })
        
        .catch(e => {
          console.log(e);
        });
    },

      refreshList() {
      this.retrievePosts();
      this.currentPost = null;
      this.currentIndex = -1;
    },

    setActivePost(post, index) {
      // this.post.id == post.id
      this.currentPost = post;
      this.currentIndex = index;
      
      console.log(post.id)
   
      
    },

        removeAllPosts() {
      PostDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      PostDataService.findByTitle(this.title)
        .then(response => {
          this.posts = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
   
    savePost() {
      //  if (!this.post.description) {
      //     // this.emptyError = this.emptyError == true?false:true
      //     this.emptyError = alert('Cannot be empty')
          
      //  error => {
           
      //         this.message =
      //           (error.response && error.response.data)
      // }}else{ 
     
      let dataUser = JSON.parse(localStorage.getItem("user"))
      console.log(dataUser)
      // // this.user = response.data1;
      var data = {
       
        // title: this.post.title,
        description: this.post.description,
        user_Id : dataUser.user_Id,
        username : dataUser.username,
        // imageUrl : this.post.imageUrl
        
      
        
      // }
      }
      // UploadFilesService.upload(formData)
     
    

      PostDataService.create(data)
        .then(response => {
        
          this.post.id = response.data.id;
          // this.user_Id = 
          this.username
          console.log(response);
          this.submitted = true;
          this.posts.push(data)
           this.retrievePosts();
          this.newPost()
        })
        .catch(e => {
          console.log(e);
        });
    },

  
    
    newPost() {
      this.submitted = false;
      this.post = {};
    },

      logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  },

   retrievePosts() {
      PostDataService.getAll()
        .then(response => {
          this.posts = response.data;
          console.log(response.data);
        
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    mounted() {
          this.message = '';
    this.getComment()
    // (this.$route.params.id);
    this.retrievePosts();
  }
  
  
}
//   name: "posts-list",
//   data() {
//     return {
//       posts: [],
//       currentPost: null,
//       currentIndex: -1,
//       title: ""
//     };
//   },
//   methods: {
//     retrievePosts() {
//       PostDataService.getAll()
//         .then(response => {
//           this.posts = response.data;
//           console.log(response.data);
//         })
//         .catch(e => {
//           console.log(e);
//         });
//     },

//     refreshList() {
//       this.retrievePosts();
//       this.currentPost = null;
//       this.currentIndex = -1;
//     },

//     setActivePost(post, index) {
//       this.currentPost = post;
//       this.currentIndex = index;
//     },

//     removeAllPosts() {
//       PostDataService.deleteAll()
//         .then(response => {
//           console.log(response.data);
//           this.refreshList();
//         })
//         .catch(e => {
//           console.log(e);
//         });
//     },
    
//     searchTitle() {
//       PostDataService.findByTitle(this.title)
//         .then(response => {
//           this.posts = response.data;
//           console.log(response.data);
//         })
//         .catch(e => {
//           console.log(e);
//         });
//     }
//   },
  // mounted() {
  //   this.retrievePosts();
  // }
//  computed: {
//     currentUser() {
//       return this.$store.state.auth.user;
//     },
//     showAdminBoard() {
//       if (this.currentUser && this.currentUser.roles) {
//         return this.currentUser.roles.includes('ROLE_ADMIN');
//       }

//       return false;
//     },
//     showModeratorBoard() {
//       if (this.currentUser && this.currentUser.roles) {
//         return this.currentUser.roles.includes('ROLE_MODERATOR');
//       }

//       return false;
//     }
//   },
  // methods: {
  //   logOut() {
  //     this.$store.dispatch('auth/logout');
  //     this.$router.push('/login');
  //   }
  // }



// };
</script>

<style>

.card-header{
   background-color:  #091f43;
}

.title-pos{
  margin-top: 10px;
  color: #091f43;
  font-weight: bold;
}

.card-img{
  width: 125px;
}

.card-img-post{
  width: 125px;
  margin-top: 10px;
  border-bottom: none;
}

#posts-tab{
  border: 1px solid #e1e1e1;
  border-bottom: none;
 
}

#images-tab{
  border: 1px solid #e1e1e1;
  border-bottom: none;
 
}
.nav-link{
  color: white;
  

} 

.box-header-body-input{
  /* border: 1px solid #091f43; */
  /* border-top: none; */
  box-shadow: 10px 7px 10px#091f43;
}

.card-body{
   box-shadow: 10px 7px 10px #091f43;
}




/* .float-bottom{
  margin-top: 15px;
} */

.title-img{
  width: 50px;
  /* margin-left: -20px; */
  margin-top: 0px;
  margin-bottom: 0px;
}
/* .list {
  text-align: left;
  max-width: 750px;
  margin: auto;
} */
/* .gedf-main{
  margin-top: 30px;
   margin-bottom: 15px;
} */

.gedf-main{
  margin-bottom: 100px;
}

.comment {
    width: 80%;
    overflow: hidden;
    border: 1px solid #091f43;
     margin-bottom: 30px;
      margin-left: 100px;
        box-shadow: 5px 5px 5px #091f43;
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
    border: 1px solid #091f43;
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


#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}
.pink{
  border: 1px solid  #091f43;
  color:  #091f43;
}
</style>
