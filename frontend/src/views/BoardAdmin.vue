<template>
  

  <div class="">
          
          <div class="d-inline-flex p-2"> <img class="title-img" src="../img/icon.png" alt=""><h4 class="title-pos">Posts</h4></div>
            <div class="">
                <div class="post-heading">
            
            <ul class="list-group">
            
              
                <li class="card rounded card-white postBox"
                @click="setActiveUser(user)"
                :class="{ active: user == currentUser}"
                v-for="(user, index) in users"
                v-bind:key="user.id"
               
               
              > 
              <div class="card-body">
                  <div class="float meta ">
                        <div class="title h5">
                            <!-- <a  :href="'/profile/' + post.id"><b> {{ user }} </b></a>  -->
                              <a  :href="'/profile/' + post.id"><b> {{ user.username }} </b></a> 
                                <a  :href="'/profile/' + post.id"><b> {{ user.email }} </b></a> 
                                  <a  :href="'/profile/' + post.id"><b> {{ user.createdAt }} </b></a> 
                                   <a  :href="'/profile/' + post.id"><b> {{ user.id }} </b></a> 
                             made a post.
                        </div>
                        <h6 class="text-muted time">1 minute ago</h6>
                    </div>
            
              <div class="card aPost rounded card-white"> <h5><strong>{{ post.description }}</strong></h5><img :src="post.imageUrl"></div> 
              <div class="">
                <div class="post-heading">
                   <div class="float meta">
                        <div class="title h5">
              <!-- <div  v-for="comment in comments" :key="comment.id"> <div class="comment float-right card rounded card-white" v-if="post.id == comment.post_id"> 
                        
                    
                        <div class="list-group-item">  <div class="title h5"> <a href="#"><b> {{ comment.username }} </b></a>  made a comment </div>  <h6 class="text-muted time">1 minute ago</h6> <div>{{ comment.description }} </div></div>    </div></div> -->
                        </div> 

                        </div>
              </div>
             
              </div>
                <!-- <div v-if="!editing"> {{ post.description }} </div>    -->
                 
                <!-- <input v-else type="text" class="form-control" id="" v-model="post.description"/>  -->
             
                <!-- <input type="text" class="form-control" id="" v-model="post.user_Id"/><br> -->
                <div>   <img class="card-img" src="../img/icon-left-font-sized.png" alt="">
                <a><button  href="#top" class=" btn btn-sm btn-danger float-right float-bottom" @click="deleteUser(user, index)"> Delete </button></a>
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


  
</template>

<script>
import PostDataService from "../services/PostDataService";

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
        published: false
      },
      submitted: false,
      selectedIndex: null,
      editing: false,
      emptyError:false,
        users:'',
     index:'',
      selectUser:""
    }
  
    
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
          // this.posts.push(data)
          // this.$router.push({ name: "posts" });
        })
        .catch(e => {
          console.log(e);
        });
    },

      deleteUser(user, index) {
         this.selectUser = user;
      this.currentIndex = index;
      
      console.log(user.id)
      //  this.posts.splice(index,1)
        // user = this.users.id
      // PostCommentService.delete(this.user.id)
      PostDataService.deleteUser(user.id)
     
      console.log(user.id)
        .then(response => {
          console.log(response.data);
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
      PostDataService.getAllUsers()
        .then(response => {
          this.users = response.data;
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

    setActiveUser(user, index) {
      this.selectUser = user;
      this.currentIndex = index;
      
      console.log(user.id)
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
       if (!this.post.description) {
      this.emptyError = this.emptyError == true?false:true
       error => {
           
              this.message =
                (error.response && error.response.data)
             
      }}else{ 
     
      let dataUser = JSON.parse(localStorage.getItem("user"))
      console.log(dataUser)
      // this.user = response.data1;
      var data = {
       
        // title: this.post.title,
        description: this.post.description,
        user_Id : dataUser.id,
        
      }}
       
    

      PostDataService.create(data)
        .then(response => {
          this.post.id = response.data.id;
          // this.user_Id = 
          console.log(response.data);
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
      console.log(this.users)
        .then(response => {
          this.posts = response.data;
          console.log(response.data);
        
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    mounted() {
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
/* .list {
  text-align: left;
  max-width: 750px;
  margin: auto;
} */

</style>
