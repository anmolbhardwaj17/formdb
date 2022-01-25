import firebase from 'firebase/app';
require("firebase/auth");

firebase.initializeApp({
    apiKey: "AIzaSyDHFQUVxIkknjbfVYfKBO3ercc10HQaB8w",
    authDomain: "bigthing-91227.firebaseapp.com",
    databaseURL: "https://bigthing-91227-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bigthing-91227",
    storageBucket: "bigthing-91227.appspot.com",
    messagingSenderId: "1065991698973",
    appId: "1:1065991698973:web:4bc6bb50eb75a5e23f24f4",
    measurementId: "G-YEKL4T8823"
});

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()


export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then( async (res) => {
    //console.log(res.user)
    const user = res.user.providerData[0];
    const uid = res.user.uid;
    console.log(user)
    console.log(uid)

    const response = await fetch("https://bigthing-91227-default-rtdb.asia-southeast1.firebasedatabase.app/contactform.json", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            uid:uid,
            email:user.email,
            name:user.displayName,
            photo:user.photoURL
        })
    })
    if(response){
        alert("login successfull")
        res.user.sendEmailVerification();
    }
  }).catch((error) => {
      console.log("hi")
    console.log(error.message)
  })
}