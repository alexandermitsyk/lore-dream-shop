import React, { Component } from 'react'
import FormInput from '../../components/form-input/form-input.components';
import SignInImage from '../../assets/sing-in.jpg';
import CustomButton from '../../components/custom-button/custom-button.compenent';
import { signInWithGoogle, signInWithFacebook } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = event => {
         const { value, name } = event.target;

         this.setState({[name]: value});
    }

    render() {
        return(
            <div className="sign-in-container">
                <div className="sign-in">
                    <h2>I already have account</h2>
                    <span>Sign in with your email and password</span>

                    <form onSubmit={this.handleSubmit}>
                        <FormInput 
                            label="Email"
                            handleChange={this.handleChange} 
                            name="email" 
                            type="email" 
                            value={this.state.email} 
                            required 
                        />
                        <FormInput 
                            onChange={this.handleChange} 
                            name="password" 
                            type="password" 
                            value={this.state.password} 
                            required
                            label="Password"
                        />
                        <CustomButton type="submit">
                            SIGN IN
                        </CustomButton>
                        <div className="sign-in-separator"><span>OR</span></div>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                        <CustomButton isFacebookSignIn onClick={signInWithFacebook}>
                            SIGN IN WITH FACEBOOK
                        </CustomButton>
                        
                    </form>
                </div>
                <div className="sign-in-image" style={{backgroundImage: `url(${SignInImage})`}}></div>
            </div>
        );
    }
}

export default SignIn;
