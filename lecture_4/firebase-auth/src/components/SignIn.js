import React, { Component } from 'react';
import { auth } from '../firebase'
import {Link} from 'react-router-dom'
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };
class SignUp extends Component {
   
    constructor(props){
        super(props);
        this.state ={...INITIAL_STATE}
    }
    handleChange =(e)=>{
        let newState ={};
        newState[e.target.name] = e.target.value;
        this.setState(newState)
    }
    async onSubmit(e){
        e.preventDefault();
        const {
            email,
            password,
          } = this.state;
        
        try{
            await auth.doSignInWithEmailAndPassword(email, password)
                this.setState({ ...INITIAL_STATE });
                this.props.history.push('./home');
        }catch(e) {
            console.log(e.code);
            switch (e.code) {
                case "auth/user-not-found":
                    this.setState({ error: "No Account With That Email Address Found!"});
                    break;
                case "auth/wrong-password":
                    this.setState({ error: "Password Incorrect!" });
                    break;
                case "auth/invalid-email":
                    this.setState({ error: "Invalid Email Address!" });
                    break;
                default:
                    console.log(`Something else went wrong: ${e.code}`);
                    this.setState({ error: "Unkown Error!" });
                    break;
            }
        }
    }
    async socialSignOn(provider){
        try {
            await auth.doSocialSignIn(provider) 
                this.setState({ ...INITIAL_STATE });
                this.props.history.push('./home');
           
        } catch (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // The email of the user's account used.
            //var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            //var credential = error.credential;
            console.log(error);
        }
    }

    render() {
        const {
            email,
            password,
            error,
          } = this.state;

        const isInvalid =
        password === '' ||
        email === '' ||
        password.length < 6;
        
        return (
            <div>
                { error && <p className="error">{error}</p> }
                <form onSubmit={this.onSubmit.bind(this)}>

                    <label htmlFor="email">Email Address:</label>
                    <div className="form-group">
                        <input
                            autoComplete='email'
                            type = 'email'
                            name='email'
                            onChange={this.handleChange}
                            value ={this.state.email}
                        />
                    </div>
                    
                    <label htmlFor="password">Password</label>
                    <div className="form-group">
                        <input
                            autoComplete ='new-password'
                            type = 'password'
                            name='password'
                            onChange={this.handleChange}
                            value ={this.state.password}
                        />
                    </div>

                    <div className="form-group">
                        <button
                            type="submit"
                            disabled={isInvalid}>Submit
                        </button>
                    </div>
                    
                    Not Registered yet? <Link to='/signup'> Click here to Register</Link>
                </form>
                <br />

                <img
                    onClick={() => this.socialSignOn("google")}
                    alt="google signin"
                    src="./imgs/btn_google_signin.png"
                />

                <img
                    onClick={() => this.socialSignOn("facebook")}
                    alt="facebook signin"
                    src="./imgs/facebook_signin.png"
                />

                
            </div>
      );
   }
}

export default SignUp;
