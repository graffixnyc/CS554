import React, { Component } from 'react';
import { auth } from '../firebase'
const INITIAL_STATE = {
    displayName: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };
class SignUp extends Component {
   
    constructor(props){
        super(props);
        this.state ={...INITIAL_STATE}
    }
    handleChange =(e)=>{
        if (e.target.name === 'passwordTwo'){
            if (e.target.value !== document.getElementById('passwordOne').value){
                this.setState({error:'Passwords not the same'})
            }else{ 
                this.setState({error: null})}
        }
        let newState ={};
        newState[e.target.name] = e.target.value;
        this.setState(newState)
    }
    async onSubmit(e){
        e.preventDefault();
        const {
            displayName,
            email,
            passwordOne,
          } = this.state;
        
        try{
            await auth.doCreateUserWithEmailAndPassword(email, passwordOne,displayName)
            this.setState({ ...INITIAL_STATE });
            this.props.history.push('/home')
          
        }catch(e) {
            console.log(e.code);
            switch (e.code) {
                case "auth/invalid-email":
                    this.setState({error: "Invalid Email Address!"});
                    break;
                case "auth/weak-password":
                    this.setState({error: "Password Blank or Password Less Than 6 Characters!"});
                    break;
                case "auth/email-already-in-use":
                    this.setState({error: "Email Address Already in Use!"});
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
            this.props.history.push('/home')
            
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
            displayName,
            email,
            passwordOne,
            passwordTwo,
            error,
          } = this.state;

        const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        displayName === '' ||
        passwordOne.length < 6;
        
        return (
            <div>
                { error && <p className="error">{error}</p> }
                <form onSubmit={this.onSubmit.bind(this)}>

                    <label htmlFor="displayName">Name:</label>
                    <div className="form-group">
                        <input
                            type = 'text'
                            name='displayName'
                            onChange={this.handleChange}
                            value ={this.state.displayName}
                        />
                    </div>

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
                    
                    <label htmlFor="passwordOne">Password</label>
                    <div className="form-group">
                        <input
                            id='passwordOne'
                            autoComplete ='new-password'
                            type = 'password'
                            name='passwordOne'
                            onChange={this.handleChange}
                            value ={this.state.passwordOne}
                        />
                    </div>

                    <label htmlFor="passwordTwo">Confirm Password:</label>
                    <div className="form-group">
                        <input
                            autoComplete ='new-password'
                            type = 'password'
                            name='passwordTwo'
                            onChange={this.handleChange}
                            value ={this.state.passwordTwo}
                        />
                    </div>
                    <div className="form-group">
                        <button
                            type="submit"
                            disabled={isInvalid}>Submit
                        </button>
                    </div>
                </form>

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
