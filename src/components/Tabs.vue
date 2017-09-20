<template>
  <div >
    <v-toolbar>
      <v-toolbar-title>Facebook Album Finder</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">

        <router-link class="btn btn-default" v-bind:to="'albums'">Albums</router-link>
        <router-link class="btn btn-default" v-bind:to="'/mypictures'">Mes photos</router-link>
        <router-link class="btn btn-default" v-bind:to="'/'">Log out</router-link>

      </v-toolbar-items>
    </v-toolbar>
    </div>
</template>

<style>


</style>
