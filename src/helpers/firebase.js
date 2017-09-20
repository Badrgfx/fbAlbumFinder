import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyB6RmDFxch0nokELf5D18A9a2BkqYcG1Js",
  authDomain: "vusjs-project.firebaseapp.com",
  databaseURL: "https://vusjs-project.firebaseio.com",
  projectId: "vusjs-project",
  storageBucket: "vusjs-project.appspot.com",
  messagingSenderId: "1088378656904"
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.



export const db = firebaseApp.database();









