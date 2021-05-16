
<template>
    

<div v-if="currentComment" class="edit-form">
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
    
   
    
     <div v-if="currentComment.id == comment.post_id" class="form-group list-group-item"> {{ comment.description }} {{ currentComment.id }} </div> 

   
  
  </div>

  </template>

