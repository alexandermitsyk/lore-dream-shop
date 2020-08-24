import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../form-input/form-input.components';
import SignInImage from '../../assets/sing-in.jpg';
import CustomButton from '../custom-button/custom-button.compenent';
import { signInWithGoogle, signInWithFacebook, auth } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: '',
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '', error: '' });
        } catch (error) {
            this.setState({ error: 'Incorrect username or password.' });
            console.log('User not found ', error);
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className="sign-in-container">
                <div className="sign-in">
                    <h2>I already have account</h2>
                    <span className="text-with-link">
                        Sign in with your email and password.
                        <Link to="/signup">Don`t Have an Account?</Link>
                    </span>
                    {
                        this.state.error ? <div className="error-panel">{this.state.error}</div> : ''
                    }
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            label="Email"
                            handleChange={this.handleChange}
                            name="email"
                            type="email"
                            value={email}
                            required
                        />
                        <FormInput
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            value={password}
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
                <div className="sign-in-image" style={{ backgroundImage: `url(${SignInImage})` }} />
            </div>
        );
    }
}

export default SignIn;
