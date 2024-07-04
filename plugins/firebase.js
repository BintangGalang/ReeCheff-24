
// plugins/firebase.js
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD1mCqueRl8zDiaYwySrDqID7Cn8xNp3mE",
    authDomain: "reecheff-ke13.firebaseapp.com",
    projectId: "reecheff-ke13",
    storageBucket: "reecheff-ke13.appspot.com",
    messagingSenderId: "1095521271855",
    appId: "1:1095521271855:web:e309ba213ed2a9d8de06da"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }

  const firestore = firebase.firestore()
  const storage = firebase.storage()

  nuxtApp.provide('firestore', firestore)
  nuxtApp.provide('storage', storage)



