<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.username}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
    </ul>
      <button v-if="currentUser.id" class="badge badge-danger mr-2" @click="deleteUser"> Delete </button>
  </div>
 
</template>

<script>
// import UserService from "../services/user.service";
import PostDataService from "../services/PostDataService";
export default {
  name: 'Profile',

   data() {
    return {
      user_Id: "",
   }},
      
  
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
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
        
    }

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
