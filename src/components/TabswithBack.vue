<template>
  <div >
    <v-toolbar light>
      <v-btn icon class="hidden-xs-only" v-on:click="backHisto">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Back</v-toolbar-title>
      <v-spacer></v-spacer>

    </v-toolbar>
  </div>
</template>


<script>

  export default {

    data () {
      return{

      }
    },
    methods: {
 backHisto() {
   this.$router.go(-1)
 }

    },

  }
</script>

<style>

</style>
