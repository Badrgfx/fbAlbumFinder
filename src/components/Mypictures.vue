<template>

  <div>
    <tabs></tabs>
  <v-container grid-list-md text-xs-center>


    <v-layout row wrap>

      <v-flex xs4  v-for="img in photos" v-if="img.clientId ===clientid">

        <v-card>
          <v-card-media
            :src="img.imageSource"
            height="400px"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>

              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-actions class="white">
            <v-spacer></v-spacer>

            <a :href="img.imageSource" target="_blank" download>
              <v-icon right >cloud_upload</v-icon>
            </a>

          </v-card-actions>
        </v-card>



      </v-flex>

    </v-layout>



  </v-container>
    </div>
</template>

<script>
  //firebase import
  import {db} from '../helpers/firebase';

  export default {

    data () {
      return {
        photos:[],
        clientid:''

      }
    },
    methods: {
      getPhotos(id){

      }
    },

    firebase: {
      photos: {
        source: db.ref('images'),
        // Optional, allows you to handle any errors.
        cancelCallback(err) {
          console.error(err);
        }
      }
    },
    created : function () {
      FB.api('/me', dude => {
        this.clientid=(dude.id);
      })
    }
  }
</script>

<style>

</style>
