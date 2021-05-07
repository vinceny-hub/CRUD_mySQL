<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="post.title"
          name="title"
          maxlength="30"
        />
      </div>

      <div class="form-group">
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
      </div>
         <div class="form-group">
        <label for="user_Id">ID</label>
        <textarea
          class="form-control"
          id="user_Id"
          required
          v-model="post.user_Id"
          
        

          
          rows="1"
          maxlength="155"
        />
      </div>

      <button @click="savePost" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newPost">Add</button>
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
