import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../form-input/form-input.components';
import SignUpImage from '../../assets/sing-up.jpg';
import CustomButton from '../custom-button/custom-button.compenent';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            error: '',
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {
            displayName, email, password, confirmPassword,
        } = this.state;

        if (password !== confirmPassword) {
            console("Password don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
                error: '',
            });

        } catch (error) {
            this.setState({
                error: error.message,
            });
            console.error(error.message);
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const {
            displayName, email, password, confirmPassword,
        } = this.state;

        return (
            <div className="sign-in-container">
                <div className="sign-in-image" style={{ backgroundImage: `url(${SignUpImage})` }} />
                <div className="sign-in">
                    <h2>I do not have a account</h2>
                    <span className="text-with-link">
                        Sign up with your email and password.
                        <Link to="/signin">You have already account? Sign in</Link>
                    </span>
                    {
                        this.state.error ? <div className="error-panel">{this.state.error}</div> : ''
                    }
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            label="Display name"
                            handleChange={this.handleChange}
                            name="displayName"
                            type="text"
                            value={displayName}
                            required
                        />
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
                        <FormInput
                            onChange={this.handleChange}
                            name="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            required
                            label="Confirm password"
                        />
                        <CustomButton type="submit">
                            SIGN UP
                        </CustomButton>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;