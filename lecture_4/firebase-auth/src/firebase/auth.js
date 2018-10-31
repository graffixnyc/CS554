import { auth, firebase } from './firebase'

async function doCreateUserWithEmailAndPassword(email,password,displayName){
    await auth.createUserWithEmailAndPassword(email, password)
   auth.currentUser.updateProfile({displayName: displayName})
   console.log(`DISPLAY NAME ${displayName}`)
}

async function doSignInWithEmailAndPassword(email,password){
    await auth.signInWithEmailAndPassword(email, password);
}

async function doSocialSignIn(provider){
    let socialProvider = null
    if (provider === "google") {
        socialProvider = new firebase.auth.GoogleAuthProvider();
    } else if (provider === "facebook") {
        socialProvider = new firebase.auth.FacebookAuthProvider();
    }
    await auth.signInWithPopup(socialProvider); 
    
}

async function doPasswordReset(email){
    await auth.sendPasswordResetEmail(email);
}

async function doPasswordUpdate(password){
    await auth.updatePassword(password);
}

async function doSignOut(){
    await auth.signOut();
}

export {
    doCreateUserWithEmailAndPassword, 
    doSocialSignIn,
    doSignInWithEmailAndPassword, 
    doPasswordReset,
    doPasswordUpdate,
    doSignOut
}