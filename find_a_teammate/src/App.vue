<template>
  <div id="nav">
    <router-link to="/">FIND A TEAMMATE</router-link> 
    <router-link to="/users/random">Random user</router-link>
    <router-link to="/users/create"> Create user </router-link>
    <router-link ></router-link>
  </div>
  <router-view/>
</template>

<style>
  @import url("../src/assets/main.css");
</style>
