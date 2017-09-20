<template>
<div>
  <tabs></tabs>
  <v-container grid-list-md text-xs-center >

    <v-layout row wrap>

      <v-flex xs6  v-for="album in albums">
        <v-card>
          <v-card-media src="/static/album.png" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{album.name}}</h3>
              <div>Album qui contient les photos de l'album {{album.name}}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <router-link class="indigo--text" v-bind:to="'/detailsAlbum/'+album.id">Voir Contenu</router-link>

          </v-card-actions>
        </v-card>
      </v-flex>


    </v-layout>
    <v-layout class="gridi">
      <v-flex xs4 >
        <v-btn flat v-on:click="prev" v-bind:disabled="currentPg === 1 ? true : false"><v-icon right dark>arrow_back</v-icon>prev</v-btn>
      </v-flex>
      <v-flex xs4  class="numbPg" v-on:click="next">

          <v-card-text class="px-0">Page {{currentPg}} of {{countAlbum}}</v-card-text>

      </v-flex>
      <v-flex xs4  >
        <v-btn flat v-on:click="next"  v-bind:disabled="currentPg === countAlbum ? true : false">next<v-icon left dark>arrow_forward</v-icon></v-btn>

      </v-flex>
    </v-layout>
  </v-container>
</div>


</template>

<script>
  export default {
    data () {
      return {
        albums:[],
        after:'',
        before:'',
        countAlbum:'',
        currentPg:1

      }

    },

    methods: {
      prev : function () {

        FB.api('/me', dude => {
          FB.api(`/${dude.id}/albums?limit=2&before=`+this.before, albm => {
            console.log("click prev")
            if (albm.hasOwnProperty('paging')) {

            this.after=albm.paging.cursors.after
            this.before=albm.paging.cursors.before
            this.albums=albm.data
            this.currentPg=this.currentPg-1
            } else{

              alert("first page")

            }
          })
        })

      },
      next : function () {


        FB.api('/me', dude => {

          FB.api(`/${dude.id}/albums?limit=2&after=`+this.after, albm => {

            if (albm.hasOwnProperty('paging')) {
            this.after=albm.paging.cursors.after
            this.before=albm.paging.cursors.before
            this.albums=albm.data
              this.currentPg++

            } else{



            }
          })
        })

      }

    },
    created : function () {
      FB.api('/me', dude => {
        console.log(dude.id)
        FB.api(`/${dude.id}/albums?limit=2`, albm => {
          this.after=albm.paging.cursors.after
          this.before=albm.paging.cursors.before
          this.albums=albm.data;

        })
        FB.api(`/${dude.id}/albums?fields=count`, albmm => {
          this.countAlbum=(albmm.data.length%2)+1;

        })
      })

    }
  }
</script>

<style>

</style>
