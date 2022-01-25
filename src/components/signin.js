import React from 'react';
import { signInWithGoogle } from "../services/firebase";

function Signin() {

  return (
    <div>
        <button className="login-provider-button" onClick={signInWithGoogle}>
        <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
        <span> Continue with Google</span>
       </button>
    </div>
  );
}

export default Signin;
