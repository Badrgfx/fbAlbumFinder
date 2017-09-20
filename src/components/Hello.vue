<template xmlns="http://www.w3.org/1999/html">

  <v-app light>

    <main>
      <section>
        <v-parallax src="static/background.jpg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img style="width: 30%" src="static/logoA.gif" alt="logo">
            <h1 class="white--text mb-2 display-3">Get All albums and photos from facebook</h1>

            <div>

              <fb-signin-button
                :params="fbSignInParams"
                @success="onSignInSuccess"
                @error="onSignInError">
                Sign in with Facebook
              </fb-signin-button>

            </div>

          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline black--text">The best way to save your albums</h2>
              <span class="subheading">
               is simply dummy text of the printing
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Title 1</div>
                    </v-card-title>
                    <v-card-text>
                      is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                      it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">business</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Title 2</div>
                    </v-card-title>
                    <v-card-text>
                      is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                      it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">call_split</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Title 3</div>
                    </v-card-title>
                    <v-card-text>
                      is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                      it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

    </main>
  </v-app>


</template>

<script>
  export default {
    data () {
      return {
        fbSignInParams: {
          scope: 'user_photos',
          return_scopes: true
        }
      }
    },
    methods: {
      onSignInSuccess (response) {
        this.$router.push('albums')

      },
      onSignInError (error) {
        console.log('OH NOES', error)
      }
    }
  }
</script>

<style>
  .fb-signin-button {
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
    /* width: 13em;  - apply for fixed size */
    margin: 0.2em;
    padding: 0 15px 0 46px;
    border: none;
    text-align: left;
    line-height: 34px;
    white-space: nowrap;
    border-radius: 0.2em;
    font-size: 16px;
    color: #FFF;
  }
  .fb-signin-button:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 100%;
  }
  .fb-signin-button:focus {
    outline: none;
  }
  .fb-signin-button:active {
    box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
  }


  /* Facebook */
  .fb-signin-button {
    background-color: #4C69BA;
    background-image: linear-gradient(#4C69BA, #3B55A0);
    /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
    text-shadow: 0 -1px 0 #354C8C;
  }
  .fb-signin-button:before {
    border-right: #364e92 1px solid;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
  }
  .fb-signin-button:hover,
  .loginBtn--facebook:focus {
    background-color: #5B7BD5;
    background-image: linear-gradient(#5B7BD5, #4864B1);
  }

  h1 {
    font-weight: bold;
    color: #fff;
    font-size: 44px;
    letter-spacing: 2px;
    line-height: 50px;
    text-align:center
  }
  h2 {

    color: #fff;
    font-size: 14px;
    letter-spacing: 2px;
    line-height: 50px;
    text-align:center
  }

</style>
