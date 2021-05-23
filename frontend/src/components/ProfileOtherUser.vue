<template>
 <!-- <div class="container-fluid">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-md-8 gedf-main">

  <div class="">
          
          <div class="d-inline-flex p-2"> <img class="title-img" src="../img/icon.png" alt=""><h4 class="title-pos">Posts</h4></div>
               <div class="card-body">
            <div class="">
                <div class="post-heading">
  <div class="container"> -->
  
     
        <div> {{ $route.params.id }} {{ id.username }}  </div>

       

   
 

     <!-- <button v-if="currentUser.id" class="badge badge-danger mr-2 btn-up float-right" @click="deleteUser"> Delete account </button>
  

    
      <p class="p-up" v-if="!editingUsername"><strong>Username : {{currentUser.username}}  </strong></p>
        <input placeholder="Type something here..." ref="myTextarea" v-else type="text"  v-model="currentUser.username" class="form-control" id="description"/>
          <button v-show="editingUsername"   id="btnC" class="badge badge-secondary mr-2 btn-dwn " @click="cancelEditUsername()"> Cancel </button>
     <button class="badge badge-success btn-dwn  buttonCEC" href="#top" @click="editUserUsername(currentUser)">  {{editingUsername? 'Update':'Edit'}} </button>
      <p  class="p-up" v-if="!editingEmail"><strong>Email : {{currentUser.email}}  </strong></p>
        <input placeholder="Type something here..." ref="myTextarea" :min-height="30" :max-height="350" v-else type="text"  v-model="currentUser.email" class="form-control" id="description"/>
          <button v-show="editingEmail"   id="btnC" class="badge badge-secondary mr-2  btn-dwn " @click="cancelEditemail()"> Cancel </button>
     <button class="badge badge-success  btn-dwn  buttonCEC" href="#top" @click="editUserEmail(currentUser)">  {{editingEmail? 'Update':'Edit'}} </button>
   <button class="badge badge-success float-right buttonCEC" href="#top" @click="editUser(index, user)"> <a v-if="currentUser.id" class="badge badge-warning" @click="editUser(index, user)"></a> {{editing? 'Update':'Edit'}} </button> -->
     <!-- <br><p class=""> 
      <strong>Id :</strong>
      {{currentUser.id}}
    </p>
    
    <strong>Authorities:</strong>
    <ul class="p-dwn">
      <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li> 
      
       
    </ul> -->
   
    
  <!-- </div>
                </div>
            </div>
  </div>
      </div>
    </div>
 </div>
 </div>  -->

 
</template>

<script>
// import UserService from "../services/user.service";
import PostDataService from "../services/PostDataService";
export default {
  name: "ProfileOtherUser",

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
        id:"",

currentUser: "",


// user_Id: this.$route.params.user_Id,
//    user_Id: this.$route,
      currentUrl: "",
    
      editingUsername: false,
      editingEmail: false,
      isDisplay:false,
   }},

   
  
  computed: {
    dataUser(){  return JSON.parse(localStorage.getItem("user"))

    
    },

    // watch: {
    //     $route(){},
    // }

    

    // currentUser() {
    //   return this.$store.state.auth.user;
     
    // },

    //  user_Id(){
    //     return this.$route.params.user_Id

    //  },
    //     showAdminBoard() {
    //   if (this.currentUser && this.currentUser.roles) {
    //     return this.currentUser.roles.includes('ROLE_ADMIN');
    //   }

    //   return false;
    // },
    // showModeratorBoard() {
    //   if (this.currentUser && this.currentUser.roles) {
    //     return this.currentUser.roles.includes('ROLE_MODERATOR');
    //   }

    //   return false;
    // }
  
  },

   
  methods: {

    
     
    
  
      
   
    //  dataUser(){  return JSON.parse(localStorage.getItem("user"))
    // },

       logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },


      deleteUser() {
     let dataUser =  JSON.parse(localStorage.getItem("user"))
      console.log(this.currentUser.id)
      PostDataService.deleteUser(this.currentUser.id)
      this.logOut()
          console.log(dataUser)
        .then(response => {
          console.log(response.data);
      
          // this.retrievePosts();
          // this.$router.push({ name: "posts" });
        })
        .catch(e => {
          console.log(e);
        });
       
        // this.posts.splice(index,1)
        
    },

getUrl(){
     this.currentUrl =  this.$route.params.id
     console.log(this.currentUrl)
           
},

//  getCommentId(id) {
//       PostCommentService.get(id)
//         .then(response => {
//           this.currentComment = response.data;
//           console.log(response.data);
//         })
//         .catch(e => {
//           console.log(e);
//         });
//     },


//  retrievePosts() {
//       PostDataService.getAll()
//       console.log(this.users)
//         .then(response => {
//           this.posts = response.data;
//           console.log(response.data);
        
//         })
//         .catch(e => {
//           console.log(e);
//         });
//     },
 
  
  


retrievePosts() {


   var data1 = {
       
        // title: this.post.title,
      
      currentUrl : this.$route.params.id
        
      
        
      }
      console.log(data1)
      // this.id = this.$route.params.id
      let id = this.$route.params.id
      PostDataService.getAnUser(id)
     
        .then(response => {
          this.id = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    


    // editUserUsername(){

 
    
    // this.editingUsername = this.editingUsername == true ? false : true
    
    // if(this.editingUsername== false){
    // this.updateUser()
    // }  
    
    // console.log(this.editingUsername)
    

  

    // },

//      getUser() {

// //          var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search
       

      


 
// //  console.log(newURL)
//        var user_Id = this.$route.params.user_Id
//       PostDataService.getAnUser(user_Id)
//         .then(response => {
//         this.user = response.data;
//           console.log(response.data);
//           console.log(user_Id)
//         })
//         .catch(e => {
//           console.log(e);
//         });
//     },

    //  editUserEmail(){

 
    
    // this.editingEmail = this.editingEmail == true ? false : true
    
    // if(this.editingEmail== false){
    // this.updateUser()
    // }  
    
    // console.log(this.editingEmail)
    
//  createUrl(){

//         var currentUrl = window.location.pathname;

//         console.log(currentUrl);
      
//      }

//    ,

    // },

    // //  show: function () {
    // //   this.isDisplay = true
    // // },

    //  cancelEditUsername(){
    //     // this.show()
    //    this.editingUsername = this.editingUsername == false
      
      
    // },

    //   cancelEditemail(){
    //     // this.show()
    //    this.editingEmail = this.editingEmail == false
      
      
    // },

    // updateUser(){

    
    //   PostDataService.updateUser(this.currentUser.id, this.currentUser)
    //     .then(response => {
           
    //       console.log(response.data);
          
        
    //       // this.posts.push(data)
    //       // this.$router.push({ name: "posts" });
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
      
     
    // },

      mounted() {

          //  this.getUrl()
           
  this.getUrl()
 
         console.log(this.currentUrl)
    //   this.id = this.$route.params.id
    //     //   this.message = '';
    // this.getUser(this.id)
        this.retrievePosts();
      this.getUser(this.$route.params.id)
    // this.$route.params.user_Id
    // console.log(this.$route.params.user_Id)
    // this.retrievePosts();

  
    // if (!this.currentUser) {
    //   this.$router.push('/login');
    // }
  },
    

//        deleteUser() {
//       //  if (!this.comment.description) {
//       //     // this.emptyError = this.emptyError == true?false:true
//       //     this.emptyError = alert('Cannot be empty')
          
//       //  error => {
           
//       //         this.message =
//       //           (error.response && error.response.data)
//       // }}else{ 
     
//       let dataUser = JSON.parse(localStorage.getItem("user"))
//       console.log(dataUser)
//       let data = localStorage.getItem("user")
//       console.log(data)
//       this.id = JSON.stringify(dataUser.id)
//       console.log(this.id)

//       // this.user = response.data1;
//       // var data = {
       
//       //   // title: this.post.title,
//       //   // description: this.comments.description,
//       //   // user_Id : this.currentUser.id,
//       //   // username : dataUser.username,
//       //   // post_id : this.currentPost.id,
//       //   id: this.dataUser.id,
        
      
        
//       // }
//       // }
     
    
//      PostDataService.deleteUser(this.currentUser)

//         .then(response => {
//           console.log(this.currentUser)
//           this.user_Id = response.data.user_Id;
//           // this.user_Id = 
//           // this.username
//           console.log(response.data.id);
//           this.submitted = true;
//           // this.comments.push(data)
//           //  this.retrieveComments();
//           // this.newComment()
//           this.message = 'The post was updated successfully!';
//           this.$router.push({ name: "posts" });
//         })
//         .catch(e => {
//           console.log(e);
//         });
//     },

// }
}
}

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

.btn-up{
 
  margin-bottom: 10px;

}

#images-tab{
  border: 1px solid #e1e1e1;
  border-bottom: none;
 
}
.nav-link{
  color: white;
  

} 
.p-dwn{
    margin-bottom: 2px;
}

.p-up{
  margin-bottom: -2px;
}

.btn-dwn{
  margin-bottom: 15px;
}


      ul{
        list-style-type: none;
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
