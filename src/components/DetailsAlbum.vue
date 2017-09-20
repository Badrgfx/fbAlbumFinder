<template>
<div>
  <tabswithback></tabswithback>

  <v-container fluid grid-list-md text-xs-center>

      <v-progress-linear v-bind:indeterminate="true" v-if="progressB"></v-progress-linear>
    <div>
      <v-alert success  dismissible v-model="alert">
        l'opération a été effectuée avec succès
      </v-alert>
    </div>

    <v-layout row wrap>

      <v-flex xs4  v-for="photo in photos.data">

        <v-card>
          <v-card-media
            :src="photo.images[0].source"
            height="400px"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>

              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-actions class="white">
            <v-spacer></v-spacer>

            <input type="checkbox" id="{photo.images[0].source}" :value="photo.images[0].source" v-model="imagesPack">

          </v-card-actions>
        </v-card>

      </v-flex>

    </v-layout>

    <v-btn fab dark class="indigo" v-if="imagesPack[0]" v-on:click="addImages" dark v-tooltip:bottom="{ html: 'Ajouter à vos photos' }">
      <v-icon dark>add</v-icon>
    </v-btn>

  </v-container>
</div>

</template>

<script>
  //firebase import
  import {db} from '../helpers/firebase';
  let imagesRef = db.ref('images');
  export default {
    firebase: {

        dbimages: imagesRef


    },
    data () {
      return {
        progressB:false,
        alert: false,
        photos:[],
        imagesPack:[],
        image:{
          clientId:'',
          imageSource:''
        }
      }
    },
    methods: {
      getPhotos(id){
        FB.api('/'+id+'?fields=id,name,cover_photo,photos{images{source}},description', phts => {
          this.photos=phts.photos;

        })
      },
      addImages(){
        this.progressB=true;


        FB.api('/me', dude => {




       for(var i in this.imagesPack){

         this.image.clientId=dude.id

         this.image.imageSource=this.imagesPack[i]
         imagesRef.push(this.image)


       }

       this.imagesPack=[];
       this.image.imageSource='';
       this.image.clientId='';

        var self = this;
        setTimeout(function(){
          self.progressB=false;
          self.alert=true;
        }, 2000);

        })

      },



    },
    created : function () {

        this.getPhotos(this.$route.params.id);

    }
  }
</script>

<style>

</style>
