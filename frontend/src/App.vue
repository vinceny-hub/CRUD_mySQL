<!-- <template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Groupomania</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/posts" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">New post</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>-->










<script>
export default {
 name: "app"
  };
</script>






<template>

  <div id="app">
    <!-- <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href class="navbar-brand" @click.prevent>Groupomania</a>
      <div class="navbar-nav mr-auto">
       <li v-if="currentUser" class="nav-item">
          <router-link to="/posts" class="nav-link">
            <font-awesome-icon icon="home" />Home
          </router-link>
        </li>
         <li v-if="currentUser" class="nav-item">
          <router-link to="/add" class="nav-link">New post</router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </li>
        <li v-if="showModeratorBoard" class="nav-item">
          <router-link to="/mod" class="nav-link">Moderator Board</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
        </li>
        </div> -->

           <!-- <div   v-if="currentUser" class="col-md-2">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div> -->


        





        <!-- <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/add" class="nav-link">
            <font-awesome-icon icon="user" /> New post
             {{ currentUser.username }} 
          </router-link>
        </li> 
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>-->

      <!-- <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" />Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </li>
      </div>
      
      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>
    </nav> -->
<!-- ************************************************************************** -->
    <nav id="#top" class="navbar navbar-expand-lg navbar-light bg-white border-nav static-top">
  <div class="container">
    <a class="navbar-brand head-logo"  @click.prevent href="#">
          <img class="head-img" src="./img/icon-left-font-sized1.png" alt=""><h3 class="font-weight-bold"></h3>
        </a>
    <button class="navbar-toggler border" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse navbar-light" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li v-if="currentUser" class="nav-item">
          <router-link to="/posts" class="nav-link">
            <font-awesome-icon icon="home" />Home
          </router-link>
        </li>
         <!-- <li v-if="currentUser" class="nav-item">
          <router-link to="/add" class="nav-link">New post</router-link>
        </li> -->
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </li>
        <li v-if="showModeratorBoard" class="nav-item">
          <router-link to="/mod" class="nav-link">Moderator Board</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
        </li> -->
         <div v-if="!currentUser" class="navbar-nav">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" />Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </li>
      </div>
      
      <div v-if="currentUser" class="navbar-nav">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>
      </ul>
    </div>
  </div>
</nav>

<!-- Page Content -->
<!-- <div class="container">
  <h1 class="mt-4">Logo Nav by Start Bootstrap</h1>
  <p>The logo in the navbar is now a default Bootstrap feature in Bootstrap 4! Make sure to set the width and height of the logo within the HTML or with CSS. For best results, use an SVG image as your logo.</p>
</div> -->


    <div class="container"> 
       <router-view />
    </div>
    <footer id="sticky-footer" class="py-4  text-white-50">
    <div  id="commentArea" class="container text-center">
      <small>Copyright  &copy;  <img class="foot-img" src="./img/icon-left-font-monochrome-white1.png" alt="">
         </small> 
    </div>
  </footer>
  </div> 
  
</template>

<script>
export default {
  computed: {
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
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<style>


nav{
  margin-top: 10px;
  margin-bottom: 30px;
}

.navbar-brand img {
  height: 50px;
  /* put value of image height as your need */

 
}

.head-img{
  width: 275px;
  height: 30px;
}

.foot-img{
  width: 145px;
  height: 30px;
}
footer{
  
  background-color:#091f43;
 

/* position:absolute; */

bottom:0;

width:100%;


}

.border-nav{
  border-bottom: 1px solid #091f43 ;
}

</style>
